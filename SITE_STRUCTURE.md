# Aurum Estate - Site Structure

## Page Sections (In Order)

### 1. **Header** (Fixed Navigation)
- Fixed header with logo, navigation links, and CTA button
- Scroll-triggered background change
- **Location**: Always visible at top

### 2. **Hero** (Section 1)
- Full-screen hero section with split headline
- "Timeless Luxury" tagline
- Stats bar with investor count, square footage, etc.
- **ID**: Home section

### 3. **Property Grid** (Section 2)
- 2x2 grid showcasing property types
- Retail, Offices, Dining, Brand Showcase
- Hover animations on cards

### 4. **Vision Section** (Section 3)
- "Our Vision" heading
- Redefining Commercial Real Estate
- Image + text split layout

### 5. **Stacked Panels** (Section 4) ⭐ NEW
- 4 full-screen panels with scroll pinning
- Strategic Location, Premium Infrastructure, Thriving Ecosystem, Lifestyle Destination
- Fade-in animations on scroll

### 6. **Investment Highlights** (Section 5)
- **ID**: `#investment`
- 6-column grid of investment benefits
- RERA Approved, Prime Location, ROI Focused, etc.
- Icon animations on hover

### 7. **Project Overview** (Section 6)
- **ID**: `#about`
- About the project description
- Key stats: 500K+ sq ft, 12-15% ROI, 50+ brands
- Image + content layout

### 8. **Location Advantage** (Section 7)
- Connectivity and location benefits
- Highway access, schools, hospitals, etc.
- SVG icons with details

### 9. **Amenities** (Section 8)
- **ID**: `#amenities`
- 9 premium facilities
- Parking, Security, Power Backup, WiFi, etc.
- SVG icons in gold circular backgrounds

### 10. **Gallery Preview** (Section 9)
- **ID**: `#gallery`
- Masonry grid of project images
- Different sized image cards
- "View Full Gallery" CTA button

### 11. **Contact Form** (Section 10)
- **ID**: `#contact`
- Lead capture form
- Name, email, phone, message fields
- Contact information display

### 12. **Footer**
- 3-column layout
- Company info, quick links, contact details
- Disclaimer and legal links

---

## Tailwind CSS Status

✅ **Tailwind CSS is FULLY implemented and working**

All components use Tailwind utility classes. The `.module.css` files you see in your editor are **old unused files** from before the conversion.

### To Clean Up (Optional):
Delete all `.module.css` files - they're no longer needed:
```powershell
Remove-Item -Path "src\components\*\*.module.css" -Force
```

---

## Navigation IDs

Quick reference for anchor links:
- `#home` → Hero section
- `#about` → Project Overview
- `#brands` → (Not currently in use)
- `#investment` → Investment Highlights
- `#amenities` → Amenities section
- `#gallery` → Gallery Preview
- `#contact` → Contact Form
