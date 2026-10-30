# Avenur — Verified Residential Living & Rentals Platform

A high-density, production-ready web application prototype cloned and adapted from the **Rentora** reference architecture (`https://dazzling-gingersnap-b591b1.netlify.app/`), reimagined as **Avenur Living** with a **Deep Indigo** visual identity, modern **Plus Jakarta Sans** typography, and a strict **8px border-radius standard**.

---

## 🚀 Quick Start / How to Run

You can open `index.html` directly in any web browser, or run a local static HTTP server:

```bash
# Using Node.js npx
npx serve .

# Or using Python
python -m http.server 3000
```

Then visit `http://localhost:3000` in your browser.

---

## 🎨 Design System & Adaptation Summary

| Dimension | Reference App (Rentora) | Avenur Adapted System |
|---|---|---|
| **Product Brand** | Rentora | **Avenur Living** |
| **Primary Accent Color** | Warm Ochre / Yellow (`#CA8A04`) | **Deep Indigo (`#4F46E5`) & Electric Indigo (`#6366F1`)** |
| **Dark Ink Token** | Dark Charcoal (`#1C1917`) | **Slate 900 (`#0F172A`)** |
| **Light Canvas Token** | Stone Warm White (`#FAFAF9`) | **Cool Clean Off-White (`#F8FAFC`)** |
| **Container & Component Borders** | 12px – 16px Pill Curves (`rounded-xl` / `rounded-2xl`) | **Strict 8px Architectural Radius (`rounded-lg`)** |
| **Typography Hierarchy** | Default Sans & Display serif | **Plus Jakarta Sans** paired with tabular numerical pricing |
| **Information Density** | High (watermarked cards, rating badges, distance hints) | Preserved and elevated with crisp 8px component geometry |

Detailed design tokens, spacing scales, and component anatomy are documented in [`DESIGN.md`](file:///r:/estate/DESIGN.md).

---

## 📱 Artboards & Interactive Screen Flows

1. **Landing / Home View (`view-home`)**:
   - Dynamic 6-slide Hero Carousel with auto-advance, dot indicators, play/pause, and listing link overlays.
   - Partially overlapping Quick Search Bar with autocomplete location datalist, property type selector, and budget dropdown.
   - 3-pillar Trust & Value Proposition strip (`Every listing verified`, `Talk to the landlord`, `Report bad listings`).
   - Trending Neighbourhoods visual cards (`Westlands`, `Kilimani`, `Karen`, `Ruaka`, `Nyali`, `Syokimau`) with 1-click filter routing.
   - Property Types quick selector strip (`Bedsitter`, `Studio`, `1 Bed`, `2 Bed`, `3 Bed`, `BnB`).
   - "Homes Tenants Love" featured listing carousel with score badges.
   - 3-step "How Avenur Works" interactive roadmap.
   - Verified tenant testimonials with 10.0 score badges.
   - Landlord acquisition banner linking to Landlord Portal.

2. **Core Search / Catalog View (`view-catalog`)**:
   - Filter Sidebar with live text search, category chips, interactive max-rent range slider, minimum bedroom chips, and toggle switches (`Verified Only`, `Furnished`, `Gated Estate`).
   - Dual layout density: **Grid View** vs **Compact List View**.
   - Real-time catalog filtering with empty-state recovery.
   - Card features: Watermarked photography, status badges (`Featured`, `New`, `Popular`, `Price drop`), score pills (`9.8`), live heart saving, and "Contacted" status ribbon.

3. **Item Detail / Feature State (`view-detail`)**:
   - Breadcrumb navigation.
   - Interactive high-res photo gallery with thumbnail switcher.
   - Core specifications strip (Bedrooms, Bathrooms, Parking, Floor level).
   - Interactive smooth Accordions:
     - Overview & Dimensions
     - Verified Building Amenities & Utilities checklist
     - Multi-unit mix and vacancy table
     - Transparent lease terms & deposit rules
   - Sticky Booking & Contact Card with:
     - Direct Landlord Contact Unlock button
     - In-person Viewing Tour Scheduler
     - Save to Favorites action
     - Report Misleading Listing trigger
   - Similar nearby verified homes recommendation carousel.

4. **Landlord Management Portal (`view-landlord`)**:
   - 4 live KPI metric cards (Active Listed Units, Tenant Inquiries, Contacts Unlocked, Monthly Rent Volume).
   - Tabs (`All Listed Properties`, `Inquiries & Leads`, `Scheduled Tours`, `Deposit Escrow`).
   - Multi-step "+ Add New Listing" modal form that immediately publishes new properties into the live catalog!
   - 1-click switch between Landlord and Tenant views.

5. **Modals & Overlay Drawers**:
   - **Multi-Step Contact Unlock Modal**: Step 1: Verification check -> Step 2: Reveals verified landlord name, direct telephone, and 1-click WhatsApp chat link (routed to official business WhatsApp `+254 798 792 730`).
   - **Schedule Viewing Modal**: Interactive calendar date selector, morning/afternoon/evening time slots, and caretaker message.
   - **Report Listing Modal**: Reason selector and moderation guarantee.
   - **Saved Favorites Flyout Drawer**: Real-time sliding drawer tracking saved properties with quick-view and remove actions.
   - **Sign In Modal**: Tenant pass vs Landlord login with demo quick-login shortcuts.
   - **Concierge "Find It For Me" Match Modal**: Collects tenant target area, budget, and move-in timeline for 48h physical hand-audit matching. Features the transparent **KES 0 advance viewing fee** policy and a **flat KES 3,000 success-only sourcing placement fee** payable only after the tenant physically inspects, approves, and signs the lease with the landlord.
   - **Instant Rental Alerts Modal (`modal-alerts`)**: Tri-channel alert engine offering:
     1. Official **WhatsApp Broadcast Channel** (`https://whatsapp.com/channel/0029VbDw7Xv6mYPT4pPeZK02`).
     2. Automated **Telegram Broadcast Channel** (`https://t.me/avenurliving` via bot token).
     3. Tailored **Direct 1-on-1 WhatsApp Alert** triggering pre-filled search criteria directly to `+254 798 792 730`.
   - **Automated Telegram Bot Publisher**: Whenever a landlord or admin adds a new listing via "+ Add New Listing", the platform calls the Telegram Bot API to automatically broadcast the listing title, specs, price, and direct link straight into `@avenurliving`.
   - **Landlord Free Photography Audit Modal**: Allows building owners to book certified photographers to inspect and list their vacant units for free.

6. **Programmatic SEO (pSEO) Dynamic Landing Pages Engine (`view-pseo`)**:
   - **Dynamic URL Routing**: Automatically resolves long-tail rental keywords via hash routes (`#/rentals/:slug`) and server-side routes.
   - **Database Query Engine**: Parses location, bedroom configuration, budget cap, stay type, and critical Kenyan utility requirements (e.g. borehole water, backup generator) from the URL slug into dynamic structured queries executed against active listings.
   - **Target Keyword Landing Pages Built & Verified**:
     - `#/rentals/bedsitters-in-ruaka-under-15k` (Auto-matches vetted units, displays Ruaka 98% borehole rating, token meters advisory, and transit breakdown).
     - `#/rentals/2-bedroom-apartments-in-kilimani-with-borehole` (Auto-matches Kilimani 2BRs with audited borehole filtration plants, generator backup, and deposit escrow benchmarks).
     - `#/rentals/furnished-apartments-in-westlands-for-short-stay` (Auto-matches turnkey furnished short stay suites with daily rates, Wi-Fi speeds, and housekeeping).
   - **Neighborhood Rental Intelligence Grid**: Dynamic benchmarks for average rent, security deposit standards, water reliability scores, and CBD commute times.
   - **Zero-Ghost Concierge Fallback**: If zero listings in the catalog match a niche search, automatically activates the localized **Avenur Concierge Hand-Match Desk** to dispatch physical verification agents rather than showing fake or stale broker listings.
   - **High-Intent Internal Linking Matrix**: Interlinks neighboring keyword variations across footer clusters and landing page pill clouds.
   - **Automated XML Sitemap**: Generated via `node generate_sitemap.js`, exporting indexed URLs, `<changefreq>daily</changefreq>`, and `<priority>0.8</priority>` in [`sitemap.xml`](file:///r:/estate/sitemap.xml).

7. **Prototype Flow HUD & Launch Mode Switcher (Bottom-Right)**:
   - A floating persistent controller enabling instantaneous jumping between all screens (Home, Catalog, Detail, Landlord, and pSEO Landing) during stakeholder reviews.
   - Includes a **`Mode: Seed Inventory` $\leftrightarrow$ `Mode: Day-0 Zero Inventory`** toggle to preview how the platform operates on day zero before any houses are published.

