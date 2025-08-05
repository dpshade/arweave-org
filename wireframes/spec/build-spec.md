# Build Page Implementation Specification

*Comprehensive specification for the Arweave Build page based on wireframe analysis and brand guidelines*

## Page Overview

The Build page serves as the primary developer onboarding and web app hosting interface for Arweave. It combines step-by-step guidance for hosting web applications with comprehensive developer resources and platform capabilities. The page emphasizes Arweave's core value proposition of permanent, decentralized storage while providing clear pathways for both immediate deployment and deeper development engagement.

## 1. Page Structure & Layout

### Overall Architecture
- **Layout Type**: Single-column responsive layout with centered content blocks
- **Maximum Width**: 1152px (max-w-6xl in Tailwind)
- **Container Padding**: 16px mobile, 24px tablet, 32px desktop (px-4 sm:px-6 lg:px-8)
- **Vertical Rhythm**: 64px section spacing (py-16, mb-16)

### Content Sections (Top to Bottom)
1. **Hero Section**: Primary headline and introduction
2. **Step Navigation**: Visual progress indicator for hosting process
3. **Step Content**: Detailed step-by-step instructions with interactive elements
4. **Secondary Hero**: Introduction to development platform
5. **Developer Resources**: Getting started section with CTA
6. **Platform Capabilities**: Decentralized compute section with product cards

### Grid System
- **Desktop**: 2-column grid for content/visual pairs (lg:grid-cols-2)
- **Tablet**: Single column with adjusted spacing
- **Mobile**: Single column with optimized vertical spacing
- **Gap**: 48px between grid items (gap-12)

## 2. Brand-Aligned Visual Design

### Color Implementation

#### Primary Brand Colors
- **Brand Orange**: `#F66700` (brand orange)
  - Primary CTAs and buttons
  - Active navigation states
  - Step indicators (active state)
  - Accent elements and links

#### Text Color Hierarchy
- **Headlines**: `#000000` (Black) - Main page titles and section headers
- **Body Text**: `#A8AFB3` (primary gray) - Primary content and descriptions
- **Secondary Text**: `#666666` (light gray) - Supporting text and inactive states
- **Tertiary Text**: `#666666` (light gray) - Placeholder and minimal text

#### Background Colors
- **Primary Background**: `#FFFFFF` (White)
- **Secondary Background**: `#F9FAFB` (gray-50) - Card backgrounds and sections
- **Interactive Backgrounds**: `#FEF3F2` (orange-100) - Icon containers and highlights

### Typography System

#### Font Family
- **Primary Typeface**: System font stack (font-sans in Tailwind)
- **Fallback**: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif

#### Type Scale & Implementation

**1. Primary Headlines (H1)**
- **Size**: 48px (text-5xl) on desktop, 36px mobile
- **Weight**: 300 (font-light)
- **Line Height**: 1.2
- **Color**: Black (#000000)
- **Usage**: "Build Arweave." main headlines
- **Margin**: 16px bottom (mb-4)

**2. Secondary Headlines (H2)**
- **Size**: 36px (text-4xl) on desktop, 28px mobile
- **Weight**: 700 (font-bold)
- **Line Height**: 1.3
- **Color**: Black (#000000)
- **Usage**: "Host your web app.", "Develop with a foundation of data."
- **Margin**: 32px bottom (mb-8)

**3. Section Headers (H3)**
- **Size**: 24px (text-2xl)
- **Weight**: 700 (font-bold)
- **Line Height**: 1.4
- **Color**: Black (#000000)
- **Usage**: Step titles, subsection headers
- **Margin**: 24px bottom (mb-6)

**4. Body Text (P)**
- **Size**: 18px (text-lg) for intro paragraphs, 16px (text-base) for standard
- **Weight**: 400 (font-normal)
- **Line Height**: 1.6
- **Color**: Primary Gray (#A8AFB3)
- **Max Width**: 768px (max-w-3xl) for intro text
- **Margin**: Auto centering for intro, 16px bottom for standard (mb-4)

**5. Supporting Text**
- **Size**: 14px (text-sm)
- **Weight**: 400 (font-normal)
- **Line Height**: 1.5
- **Color**: Primary Gray (#A8AFB3)

### Spacing System

#### Generous Whitespace Implementation
- **Section Padding**: 64px vertical (py-16)
- **Content Blocks**: 64px bottom margin (mb-16)
- **Grid Gaps**: 48px (gap-12)
- **Card Padding**: 32px (p-8) for large cards, 24px (p-6) for smaller cards
- **Button Padding**: 12px vertical, 24px horizontal (px-6 py-3)

## 3. Content Elements

### Hero Section Content

#### Primary Headline
```
Build Arweave.
```
- **Typography**: 48px, font-light, black
- **Alignment**: Center
- **Margin**: 16px bottom

#### Secondary Headline
```
Host your web app.
```
- **Typography**: 36px, font-bold, black
- **Alignment**: Center
- **Margin**: 32px bottom

#### Introduction Paragraph
```
Let's build on Arweave, which ensures your web app is permanently accessible online. This guarantees that your application remains available to users, eliminating the risk of being taken down or lost.
```
- **Typography**: 18px, font-normal, gray-600
- **Max Width**: 768px
- **Alignment**: Center
- **Line Height**: 1.6

### Step Navigation Content

#### Step Indicators (Horizontal Navigation)
1. **Step 1**: "Upload your file." (Active - Orange)
2. **Step 2**: "Upload your code." (Inactive - Gray)
3. **Step 3**: "..." (Inactive - Gray)
4. **Step 4**: "Path Manifests." (Inactive - Gray)
5. **Step 5**: "Build needs static output." (Inactive - Gray)

#### Visual Treatment
- **Active State**: Orange circle with white number, orange text with underline
- **Inactive State**: Gray circle with gray number, gray text
- **Circle Size**: 32px diameter (w-8 h-8)
- **Typography**: 14px font-medium for numbers, 16px font-medium for labels

### Step Content Detail

#### Step 1 Content
**Title**: "Step 1: Upload your file."
**Description**: 
```
You can upload your file for free and access is immediately after. Make sure its under 100kb.
```
(Note: Repeated 3 times in current implementation - should be refined)

#### Upload Interface
- **Tab Navigation**: "Host" (active/orange) and "Files" (inactive/gray)
- **Upload Area**: Dashed border drag-and-drop zone
- **Upload Icon**: Cloud upload icon in orange
- **Primary Text**: "Drag and Deploy"
- **Secondary Text**: "folder + files"
- **Tertiary Text**: "or choose file to upload"

### Secondary Hero Section

#### Headlines
```
Build Arweave.
Develop with a foundation of data.
```
- **Typography**: Same styling as primary hero
- **Alignment**: Center

### Developer Resources Section

#### Get Started Developing
**Title**: "Get Started Developing."
**Description**:
```
Your application remains accessible to everyone, forever, without the risk of censorship or removal. Visit the permaweb cookbook to start.
```

**CTA Button**: "Visit the Permaweb Cookbook →"
- **Styling**: Orange background, white text, rounded corners
- **Icon**: Right arrow
- **Link**: External cookbook resource

### Platform Capabilities Section

#### Decentralized Compute
**Title**: "Decentralized Compute."
**Description**:
```
The permaweb foundation backs projects like AO and Hyperbeam, improving smart contracts and Arweave's infrastructure. Here's how to begin.
```

#### Product Cards

**AO Card**
- **Title**: "AO"
- **Icon**: Command symbol (⌘)
- **Description**: "Create and deploy processes (smart contracts) on Arweave."
- **CTA**: "Explore AO Ecosystem →"

**Hyperbeam Card**
- **Title**: "Hyperbeam"
- **Icon**: Lightning bolt (⚡)
- **Description**: "Bridging web2 capabilities to the permaweb."
- **CTA**: "Start Hyperbeam →"

## 4. Interactive Components

### Primary Button Styling
```css
.btn-primary {
  background-color: #FF6B35;
  color: #FFFFFF;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 500;
  transition: background-color 0.2s ease;
}

.btn-primary:hover {
  background-color: #E55A2B;
}
```

### Secondary Button Styling
```css
.btn-secondary {
  background-color: transparent;
  color: #4B5563;
  border: 1px solid #D1D5DB;
  padding: 8px 24px;
  border-radius: 8px;
  font-weight: 400;
}

.btn-secondary:hover {
  background-color: #F9FAFB;
}
```

### Step Navigation Styling

#### Active Step
```css
.step-active .step-number {
  background-color: #FF6B35;
  color: #FFFFFF;
}

.step-active .step-label {
  color: #FF6B35;
  text-decoration: underline;
}
```

#### Inactive Step
```css
.step-inactive .step-number {
  background-color: #D1D5DB;
  color: #6B7280;
}

.step-inactive .step-label {
  color: #9CA3AF;
}
```

### Upload Interface Styling

#### Drag and Drop Zone
```css
.upload-zone {
  border: 2px dashed #D1D5DB;
  border-radius: 8px;
  padding: 48px;
  text-align: center;
  transition: border-color 0.2s ease;
}

.upload-zone:hover {
  border-color: #FF6B35;
}

.upload-zone.drag-over {
  border-color: #FF6B35;
  background-color: #FEF3F2;
}
```

#### Upload Icon Container
```css
.upload-icon {
  width: 64px;
  height: 64px;
  background-color: #FEF3F2;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
}
```

### Link Styling
```css
.link-primary {
  color: #FF6B35;
  text-decoration: none;
  transition: text-decoration 0.2s ease;
}

.link-primary:hover {
  text-decoration: underline;
}
```

## 5. Responsive Considerations

### Desktop (1024px+)
- **Grid**: 2-column layouts for content/visual pairs
- **Typography**: Full scale sizes
- **Spacing**: Full 64px section padding
- **Navigation**: Horizontal step indicators
- **Cards**: Side-by-side in grid layout

### Tablet (768px - 1023px)
- **Grid**: Single column with adjusted spacing
- **Typography**: Slightly reduced headline sizes
- **Spacing**: Maintained generous whitespace
- **Navigation**: Wrapped step indicators if needed
- **Cards**: Stacked or 2-column depending on content

### Mobile (< 768px)
- **Grid**: Single column stack
- **Typography**: Reduced headline sizes (text-3xl, text-2xl)
- **Spacing**: Reduced to 32px section padding (py-8)
- **Navigation**: Vertical or wrapped step indicators
- **Cards**: Single column stack
- **Upload Zone**: Reduced padding (p-8 instead of p-12)

### Breakpoint-Specific Adjustments

#### Typography Scaling
```css
/* Mobile */
.hero-title {
  font-size: 2.25rem; /* 36px */
}

.hero-subtitle {
  font-size: 1.875rem; /* 30px */
}

/* Tablet */
@media (min-width: 768px) {
  .hero-title {
    font-size: 3rem; /* 48px */
  }
  
  .hero-subtitle {
    font-size: 2.25rem; /* 36px */
  }
}
```

#### Layout Adjustments
```css
/* Mobile spacing */
.section-padding {
  padding: 2rem 0; /* 32px */
}

.content-gap {
  gap: 2rem; /* 32px */
}

/* Desktop spacing */
@media (min-width: 1024px) {
  .section-padding {
    padding: 4rem 0; /* 64px */
  }
  
  .content-gap {
    gap: 3rem; /* 48px */
  }
}
```

## 6. Technical Implementation Notes

### HTML Structure Recommendations

#### Semantic Structure
```html
<main role="main" class="min-h-screen">
  <section class="hero-section" aria-labelledby="hero-title">
    <h1 id="hero-title">Build Arweave.</h1>
    <h2>Host your web app.</h2>
    <p>Introduction text...</p>
  </section>
  
  <section class="step-navigation" aria-label="Hosting process steps">
    <ol class="step-list">
      <li class="step-item step-active">...</li>
      <!-- Additional steps -->
    </ol>
  </section>
  
  <section class="step-content" aria-labelledby="step-title">
    <!-- Step content -->
  </section>
  
  <!-- Additional sections -->
</main>
```

### CSS Class Naming Conventions

#### BEM Methodology Integration
```css
/* Block */
.step-navigation { }

/* Element */
.step-navigation__list { }
.step-navigation__item { }
.step-navigation__number { }
.step-navigation__label { }

/* Modifier */
.step-navigation__item--active { }
.step-navigation__item--inactive { }
```

#### Utility-First Approach (Tailwind CSS)
- Leverage existing Tailwind classes for consistency
- Create custom components for repeated patterns
- Use CSS custom properties for brand colors

### Component Organization

#### Astro Component Structure
```astro
---
// Component props and logic
interface Props {
  currentStep?: number;
  steps: StepData[];
}

const { currentStep = 1, steps } = Astro.props;
---

<section class="step-navigation">
  <!-- Component template -->
</section>

<style>
  /* Component-specific styles */
</style>
```

#### Recommended Components
1. **StepNavigation.astro**: Reusable step indicator
2. **UploadZone.astro**: File upload interface
3. **ProductCard.astro**: Platform capability cards
4. **CTAButton.astro**: Consistent button styling

### Performance Considerations

#### Image Optimization
- Use WebP format for images with fallbacks
- Implement lazy loading for below-fold images
- Optimize SVG icons for minimal file size

#### CSS Optimization
- Purge unused Tailwind classes in production
- Implement critical CSS inlining
- Use CSS custom properties for theme colors

#### JavaScript Enhancement
- Progressive enhancement for upload functionality
- Minimal JavaScript for step navigation
- Accessible focus management

## 7. Accessibility Considerations

### WCAG 2.1 AA Compliance

#### Color Contrast
- **Text on White**: All text meets 4.5:1 contrast ratio
- **Orange CTAs**: White text on orange meets 4.5:1 contrast
- **Interactive Elements**: Clear focus indicators

#### Keyboard Navigation
- **Tab Order**: Logical progression through interactive elements
- **Focus Indicators**: Visible outline on all focusable elements
- **Skip Links**: Hidden skip-to-content link for screen readers

#### Screen Reader Support
```html
<!-- Proper heading hierarchy -->
<h1>Build Arweave.</h1>
<h2>Host your web app.</h2>
<h3>Step 1: Upload your file.</h3>

<!-- Meaningful alt text -->
<img src="upload-icon.svg" alt="Cloud upload icon">

<!-- Form labels -->
<label for="file-upload" class="sr-only">Choose file to upload</label>
<input type="file" id="file-upload" aria-describedby="upload-help">
<div id="upload-help">Files must be under 100KB</div>

<!-- Step navigation -->
<ol aria-label="Web app hosting steps">
  <li aria-current="step">Upload your file.</li>
  <li>Upload your code.</li>
  <!-- Additional steps -->
</ol>
```

#### Interactive States
- **Hover**: Subtle color changes and transitions
- **Focus**: Clear focus rings (ring-2 ring-orange-500)
- **Active**: Visual feedback for button presses
- **Disabled**: Reduced opacity and cursor changes

### Responsive Accessibility
- **Touch Targets**: Minimum 44px tap targets on mobile
- **Text Scaling**: Support up to 200% text scaling
- **Motion Preferences**: Respect prefers-reduced-motion

## 8. Content Management

### Dynamic Content Areas
- **Step Content**: Configurable step-by-step instructions
- **Product Cards**: Editable platform capability cards
- **CTA Links**: Configurable external resource links

### Internationalization Considerations
- **Text Length**: Account for 30% text expansion
- **RTL Support**: Layout considerations for right-to-left languages
- **Cultural Adaptations**: Color and imagery considerations

## 9. Integration Points

### External Services
- **File Upload**: Integration with Arweave storage API
- **Analytics**: Progress tracking through step navigation
- **Documentation**: Links to external cookbook and guides

### Internal Navigation
- **Header Navigation**: Active state for "Build" section
- **Cross-linking**: Connections to Use, Discover, and Funding pages
- **Footer**: Consistent site-wide footer integration

## 10. Testing Checklist

### Visual Testing
- [ ] Typography renders correctly across browsers
- [ ] Color consistency matches brand guidelines
- [ ] Spacing and layout align with specifications
- [ ] Responsive behavior at all breakpoints

### Functional Testing
- [ ] File upload interface works correctly
- [ ] Step navigation responds to user interaction
- [ ] All CTAs link to correct destinations
- [ ] Form validation provides helpful feedback

### Accessibility Testing
- [ ] Screen reader navigation is logical
- [ ] Keyboard navigation works without mouse
- [ ] Color contrast meets WCAG standards
- [ ] Focus indicators are visible

### Performance Testing
- [ ] Page loads within 3 seconds on 3G
- [ ] Images are optimized and compressed
- [ ] CSS and JavaScript are minified
- [ ] No layout shift during load

---

*This specification provides a comprehensive blueprint for implementing the Build page with pixel-perfect accuracy while maintaining brand consistency and accessibility standards. All measurements, colors, and interactions should be implemented as specified to ensure optimal user experience and brand alignment.*