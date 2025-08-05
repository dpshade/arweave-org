# Arweave.org Home Page - UI Specification

## 1. Overall Layout Structure

### Page Layout Type
- **Layout System**: Single-column, centered layout with maximum content width
- **Container**: Fixed-width centered container (approximately 1200px max-width)
- **Responsive Approach**: Fluid with breakpoints for mobile, tablet, and desktop
- **Viewport**: Full-height layout with header at top, main content in center, footer at bottom

### Main Content Areas
1. **Header Section** (Top navigation bar)
2. **Hero Section** (Main content area with headline and description)
3. **Call-to-Action Section** (Button area)  
4. **Footer Section** (Bottom utility links)

### Grid System
- **Base Grid**: 12-column CSS Grid or Flexbox system
- **Gutters**: 20px horizontal gutters
- **Margins**: 40px left/right margins on desktop, 20px on mobile
- **Vertical Rhythm**: 24px baseline grid for consistent spacing

## 2. Component Hierarchy

### HTML Structure Recommendation
```html
<body>
  <header class="site-header">
    <nav class="primary-navigation">
      <!-- Logo and navigation items -->
    </nav>
  </header>
  
  <main class="main-content">
    <section class="hero-section">
      <div class="hero-content">
        <!-- Headline, description, CTA -->
      </div>
    </section>
  </main>
  
  <footer class="site-footer">
    <!-- Footer links -->
  </footer>
</body>
```

### Component Nesting Levels
- **Level 1**: Body container
- **Level 2**: Header, Main, Footer sections
- **Level 3**: Navigation, Hero content, Footer links
- **Level 4**: Individual navigation items, text blocks, buttons

## 3. Visual Design Details

### Color Palette
- **Primary Orange**: #F66700 (navigation highlight, accent elements)
- **Text Primary**: #000000 (black for headlines and body text)
- **Text Secondary**: #A8AFB3 (primary gray for descriptions)
- **Background**: #FFFFFF (pure white)
- **Border/Divider**: #E2E8F0 (light gray)
- **Link Hover**: #F66700 (orange accent for interactive states)

### Typography System

#### Primary Typeface
- **Font Family**: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif
- **Font Loading**: System font stack with web font fallback

#### Text Hierarchy
1. **Main Headline ("Arweave.")**
   - Font Size: 48px (3rem)
   - Font Weight: 700 (Bold)
   - Line Height: 56px (1.167)
   - Letter Spacing: -0.02em
   - Color: #000000

2. **Subheadline ("Permanent information storage.")**
   - Font Size: 20px (1.25rem)
   - Font Weight: 400 (Regular)
   - Line Height: 28px (1.4)
   - Letter Spacing: 0
   - Color: #A8AFB3

3. **Body Text (Description paragraphs)**
   - Font Size: 16px (1rem)
   - Font Weight: 400 (Regular)
   - Line Height: 24px (1.5)
   - Letter Spacing: 0
   - Color: #000000
   - Max Width: 600px for optimal readability

4. **Navigation Links**
   - Font Size: 14px (0.875rem)
   - Font Weight: 500 (Medium)
   - Line Height: 20px (1.429)
   - Letter Spacing: 0
   - Color: #A8AFB3 (default), #F66700 (active/hover)

5. **Footer Links**
   - Font Size: 12px (0.75rem)
   - Font Weight: 400 (Regular)
   - Line Height: 16px (1.333)
   - Letter Spacing: 0
   - Color: #A0AEC0

### Spacing System
- **Base Unit**: 8px
- **Scale**: 8px, 16px, 24px, 32px, 48px, 64px, 96px
- **Component Gaps**: 24px between major sections
- **Text Spacing**: 16px between paragraphs
- **Button Padding**: 12px vertical, 24px horizontal

## 4. Content Elements

### Header Navigation
- **Logo**: "arweave.org" text logo (positioned top-left)
- **Navigation Items** (horizontal list, top-right):
  - "build" (active state - orange color)
  - "use"
  - "discover" 
  - "get funded"
  - "brand-kit"

### Hero Section Content
- **Main Headline**: "Arweave."
- **Subheadline**: "Permanent information storage."
- **Description Text**: 
  ```
  As a collective network in the Blockweave, Arweave allows developers
  and end-users to permanently store their data on-chain.

  As a transaction protocol, Arweave can be used with any framework. The
  way the Blockweave is truly decentralized! The new way of doing
  everything regarding the process could change all the rules.

  Arweave can create these fees, and the permaweb is of no exclusion.

  Information storage has been easy, cheap, and energy-efficient.
  The Arweave ecosystem provides ways to build almost anything with apps,
  browse content and so building internet-sized apps.
  ```

### Call-to-Action
- **Button Text**: "Read the fee >"
- **Button Style**: Text link with arrow indicator

### Footer
- **Left Side**: Copyright text "©️ arweave.org 2024, something is you like as PT"
- **Right Side**: Links - "Terms of use" | "Privacy policy" | "Brand-kit"

## 5. Interactive Elements

### Primary Navigation
- **Type**: Horizontal navigation bar
- **Position**: Fixed or sticky header
- **Background**: White with subtle shadow/border
- **Items**: Text links with hover states
- **Active State**: Orange color (#F66700) for current page
- **Hover State**: Color transition to orange

### Call-to-Action Button
- **Style**: Text link (not filled button)
- **Decoration**: Right-pointing arrow (>)
- **Hover State**: Underline and color change
- **Focus State**: Keyboard focus ring
- **Target**: Links to fee information page

### Footer Links
- **Style**: Simple text links separated by vertical bars (|)
- **Hover State**: Slight color darkening
- **Spacing**: Even distribution across footer width

## 6. Component States

### Navigation States
- **Default**: Gray text (#A8AFB3)
- **Hover**: Orange transition (#F66700)
- **Active/Current**: Orange color (#F66700)
- **Focus**: Keyboard focus outline

### Button/Link States
- **Default**: Dark text with arrow
- **Hover**: Orange color with underline
- **Active**: Pressed state with darker orange
- **Disabled**: Reduced opacity (if applicable)
- **Focus**: Keyboard accessibility outline

### Footer Link States
- **Default**: Light gray (#A0AEC0)
- **Hover**: Medium gray (#A8AFB3)
- **Focus**: Keyboard focus outline

## 7. Responsive Behavior

### Desktop (1200px+)
- Full layout as shown in wireframe
- Maximum content width with centered alignment
- Horizontal navigation
- Multi-column text layout possible

### Tablet (768px - 1199px)
- Reduce horizontal margins to 24px
- Slightly smaller typography scale
- Maintain horizontal navigation
- Single-column text layout

### Mobile (< 768px)
- **Navigation**: Convert to hamburger menu or vertical stack
- **Typography**: Scale down by 0.875x
- **Margins**: Reduce to 16px
- **Text Width**: Full width minus margins
- **Button**: Consider full-width on small screens

### Breakpoint Strategy
```css
/* Mobile-first approach */
@media (min-width: 768px) { /* Tablet styles */ }
@media (min-width: 1200px) { /* Desktop styles */ }
```

## 8. Accessibility Considerations

### ARIA Labels and Roles
- **Navigation**: `<nav role="navigation" aria-label="Primary navigation">`
- **Main Content**: `<main role="main">`
- **Landmark Regions**: Proper use of header, main, footer
- **Link Context**: Descriptive link text (avoid "click here")

### Keyboard Navigation
- **Tab Order**: Logo → Navigation items → Main content → CTA → Footer links
- **Focus Management**: Visible focus indicators on all interactive elements
- **Skip Links**: "Skip to main content" for screen readers

### Screen Reader Considerations
- **Alt Text**: Descriptive alt text for any images (none in this wireframe)
- **Heading Structure**: Proper h1-h6 hierarchy
- **Link Purpose**: Clear link descriptions
- **Content Structure**: Logical reading order

### Color Contrast Requirements
- **Text on White**: Ensure 4.5:1 contrast ratio minimum
- **Orange Links**: Verify contrast meets WCAG standards
- **Focus Indicators**: High contrast focus rings

## 9. Implementation Notes

### Recommended Technology Stack
- **CSS Framework**: Tailwind CSS or custom CSS with CSS Grid/Flexbox
- **Component Library**: React/Vue components or vanilla HTML/CSS
- **Build System**: Vite, Webpack, or similar for optimization
- **Typography**: System fonts with web font enhancement

### CSS Framework Compatibility
- **Tailwind Classes**: Easily implementable with utility classes
- **Bootstrap**: Compatible with custom component approach  
- **CSS Grid**: Recommended for overall layout structure
- **Flexbox**: Ideal for navigation and content alignment

### Browser Support Requirements
- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Fallbacks**: System fonts for older browsers
- **Progressive Enhancement**: Core content accessible without CSS/JS

### Performance Considerations
- **Font Loading**: Use font-display: swap for web fonts
- **Critical CSS**: Inline above-the-fold styles
- **Image Optimization**: Responsive images with appropriate formats
- **Bundle Size**: Minimize CSS/JS payload
- **Caching Strategy**: Long-term caching for static assets

### Development Guidelines
- **Mobile-First**: Design and develop for mobile first
- **Semantic HTML**: Use proper HTML5 semantic elements
- **CSS Architecture**: BEM methodology or CSS modules
- **Testing**: Cross-browser testing and accessibility auditing
- **Validation**: HTML and CSS validation tools

## 10. Technical Specifications

### Container Dimensions
- **Max Width**: 1200px
- **Min Width**: 320px (mobile)
- **Horizontal Centering**: margin: 0 auto
- **Padding**: 40px horizontal (desktop), 20px (mobile)

### Animation/Transitions
- **Duration**: 200ms for hover states
- **Easing**: ease-in-out for smooth transitions
- **Properties**: color, background-color, border-color
- **Reduced Motion**: Respect prefers-reduced-motion

### Z-Index Stack
- **Header**: z-index: 100 (if sticky/fixed)
- **Main Content**: z-index: 1
- **Footer**: z-index: 1
- **Focus Outlines**: z-index: 9999

This specification provides comprehensive details for pixel-perfect recreation of the Arweave.org home page wireframe, ensuring consistency across all implementation aspects while maintaining accessibility and responsive design principles.