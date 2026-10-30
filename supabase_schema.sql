-- ====================================================================
-- AVENUR LIVING - SUPABASE DATABASE SCHEMA & SECURITY POLICIES
-- Paste this script into Supabase SQL Editor and click RUN
-- ====================================================================

-- 1. Create profiles table (links to Supabase Auth users)
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  email TEXT,
  full_name TEXT,
  phone TEXT,
  role TEXT DEFAULT 'landlord', -- 'admin' or 'landlord'
  is_approved BOOLEAN DEFAULT FALSE, -- Only admin can toggle this to TRUE
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Create properties table
CREATE TABLE IF NOT EXISTS public.properties (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  area TEXT NOT NULL,
  estate TEXT,
  rent NUMERIC NOT NULL,
  deposit NUMERIC,
  bedrooms TEXT,
  bathrooms NUMERIC DEFAULT 1,
  type TEXT DEFAULT 'Apartment',
  features TEXT[] DEFAULT '{}',
  photos TEXT[] DEFAULT '{}',
  verified BOOLEAN DEFAULT TRUE,
  watermark TEXT DEFAULT 'Avenur Verified · 0798792730',
  lat NUMERIC,
  lng NUMERIC,
  landlord_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  landlord_name TEXT,
  landlord_phone TEXT,
  status TEXT DEFAULT 'available', -- 'available' | 'rented' | 'pending'
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Enable Row Level Security (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.properties ENABLE ROW LEVEL SECURITY;

-- 4. Policies for profiles
-- Anyone can view their own profile
CREATE POLICY "Users can view own profile" 
ON public.profiles FOR SELECT 
TO authenticated 
USING (auth.uid() = id);

-- Admins can view and update all profiles
CREATE POLICY "Admins can view all profiles" 
ON public.profiles FOR ALL 
TO authenticated 
USING (
  auth.jwt() ->> 'email' = 'avenurliving@gmail.com'
  OR EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE id = auth.uid() AND role = 'admin'
  )
)
WITH CHECK (
  auth.jwt() ->> 'email' = 'avenurliving@gmail.com'
  OR EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE id = auth.uid() AND role = 'admin'
  )
);

-- 5. Policies for properties
-- Anyone (public/unauthenticated) can view available properties
CREATE POLICY "Public can view available properties" 
ON public.properties FOR SELECT 
TO anon, authenticated 
USING (status = 'available');

-- Only approved landlords can insert new properties
CREATE POLICY "Approved landlords can insert properties" 
ON public.properties FOR INSERT 
TO authenticated 
WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE id = auth.uid() AND is_approved = TRUE
  )
);

-- Landlords can update or delete their own properties
CREATE POLICY "Landlords can update own properties" 
ON public.properties FOR UPDATE 
TO authenticated 
USING (landlord_id = auth.uid());

CREATE POLICY "Landlords can delete own properties" 
ON public.properties FOR DELETE 
TO authenticated 
USING (landlord_id = auth.uid());

-- 6. Storage bucket for property photos
INSERT INTO storage.buckets (id, name, public) 
VALUES ('property-photos', 'property-photos', true)
ON CONFLICT (id) DO NOTHING;

-- Allow public to view photos
CREATE POLICY "Public Access" 
ON storage.objects FOR SELECT 
TO public 
USING (bucket_id = 'property-photos');

-- Allow approved landlords to upload photos
CREATE POLICY "Authenticated users can upload photos" 
ON storage.objects FOR INSERT 
TO authenticated 
WITH CHECK (bucket_id = 'property-photos');
