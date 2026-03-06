# Canada Theme Implementation for HABB Official Website

## Overview
This document outlines the Canada theme implementation for the HABB website, establishing the brand as a Canada-based digital engineering company.

## Color Palette (Union Jack Inspired)

### Primary Colors
- **Dark Blue**: `#0d2f5f` - Royal blue inspired by the Union Jack
- **Red**: `#c8102e` - Union Jack red, used for accents and CTAs
- **Dark Black**: `#0a1428` - Deep blue-black for text and backgrounds
- **Purple**: `#1d4e7a` - Secondary blue tone

### Secondary Colors
- **Green**: `#1e7a5f` - British green accent
- **Pink**: `#d81a5f` - Secondary accent
- **Blue**: `#1f5a9d` - Lighter blue for highlights

### Gradient Colors
- **Blue Gradient**: `#cce4f5` - Light blue for backgrounds
- **Yellow Gradient**: `#fef3c7` - Warm accent (heritage)
- **Dark Blue Gradient**: `#1a2d3f` - For dark mode
- **Dark Yellow Gradient**: `#4b3f1f` - For dark mode

## New Components

### 1. Canada Badge Component
**Location**: `src/app/components/shared/uk-badge/index.tsx`
- Displays a Canada flag-inspired badge with "CANADA ENGINEERED" text
- Animated entrance effect
- Used on the hero section

### 2. Canada Accent Border Component
**Location**: `src/app/components/shared/uk-accent-border/index.tsx`
- Decorative accent borders in Canada red
- Customizable position (left, right, top, bottom)
- Used for emphasis and visual hierarchy

## CSS Utilities Added

### Global CSS Updates
New utility classes in `globals.css`:
- `.ca-accent` - Left border accent with Canada red
- `.ca-divider` - Gradient divider using Canada palette
- `.ca-badge` - Inline badge styling
- `.ca-highlight` - Background highlight with Canada colors

## Updated Content

### Page Metadata
1. **Root Layout** - Added Canada-focused description
   - Title: "HABB - Canada-Based Digital Engineering & Software Solutions"
   - Description includes Canada location and services

2. **Home Page**
   - Title: "HABB — Canada Digital Engineering Partner | Your Success, Engineered"

3. **Contact Page**
   - Title: "Contact HABB | Canada-Based Digital Engineering Partner"

### Hero Section
-- Added Canada Badge component at top
-- Updated headline: "Your Success, Engineered in Canada" + "Delivered Globally"
-- Updated description to emphasize Canada-based status
- Maintains all existing functionality

### Footer
-- Added Canada Badge section with Canada flag colors
 - Text: "HABB - Canada Digital Engineering Partner"
- Subtitle: "Based in the United Kingdom | Delivering global-scale digital solutions"
- Prominent placement above main footer content

## Color Application Strategy

### Buttons & CTAs
- Primary buttons use `#0d2f5f` (dark blue)
- Hover states use `#c8102e` (red) for emphasis
- Creates visual interest with Union Jack theme

### Accents & Highlights
- Section dividers use gradient from purple_blue → orange → purple_blue
- Left borders on key content use red (#c8102e)
- Highlights use transparent overlays of blue and red

### Text & Backgrounds
- Headlines and important text use dark blue (`#0d2f5f`)
- Body text uses dark black (`#0a1428`)
- Backgrounds use blue and yellow gradients for visual interest

## Implementation Benefits

1. **Brand Recognition** - Clear Canada positioning
2. **Visual Hierarchy** - Canada colors draw attention to key elements
3. **Global Appeal** - Union Jack theme resonates internationally
4. **Consistency** - Unified color system across all pages
5. **Accessibility** - High contrast ratios maintained
6. **Professional** - British aesthetic adds credibility

## Usage Guide

### Using Canada Badge Component
```tsx
import CanadaBadge from '@/app/components/shared/uk-badge'

<CanadaBadge />
```

### Using Canada Accent Border
```tsx
import UKAccentBorder from '@/app/components/shared/uk-accent-border'

<div className='relative'>
   <UKAccentBorder position='left' color='#d52b1e' />
   {/* Content */}
</div>
```

### Using CSS Utilities
```tsx
// Accent border
<div className='ca-accent'>Important content</div>

// Divider
<div className='ca-divider' />

// Badge
<span className='ca-badge'>Featured</span>

// Highlight background
<div className='ca-highlight'>Highlighted content</div>
```

## Future Enhancements

1. Add Canada office location map to contact page
2. Create Canada-specific case studies
3. Add testimonials from Canada clients
4. Implement Union Jack pattern in hero background
5. Create Canada-themed illustrations
6. Add region-specific content targeting Canada businesses
7. Implement Canada business trust badges (ISO certifications, etc.)

## Testing Checklist

- [ ] Color contrast meets WCAG AA standards
- [ ] UK badge displays correctly on mobile
- [ ] Color scheme works in light and dark modes
- [ ] All buttons use correct UK-themed colors
- [ ] Hero section displays UK badge properly
- [ ] Footer UK section is prominent and readable
- [ ] Accent borders align correctly
- [ ] Gradient dividers render smoothly
- [ ] Metadata appears correctly in search engines
- [ ] Brand colors remain consistent across all pages
