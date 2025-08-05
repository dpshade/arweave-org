# Get Funded/Funding Page - Implementation Specification

*Comprehensive implementation guide for the Arweave Get Funded page based on wireframe analysis and updated brand guidelines*

## Page Overview

The Get Funded page serves as a project discovery platform showcasing funding opportunities within the Arweave ecosystem. The page emphasizes "permanent information storage" as the foundation for innovative projects, featuring Arweave Research funding programs in a clean, grid-based layout.

---

## 1. Page Structure & Layout

### Overall Page Organization
- **Page Type**: Static content page with dynamic project listings
- **Layout Pattern**: Header + Hero Section + Project Grid + Footer
- **Content Focus**: Funding opportunities and project discovery
- **Grid System**: 12-column responsive grid with consistent spacing

### Viewport & Container Structure
```css
.page-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

@media (min-width: 768px) {
  .page-container {
    padding: 0 48px;
  }
}
```

### Header/Navigation Implementation
- **Header Style**: Minimal top navigation consistent with brand standards
- **Logo Placement**: Top-left corner with Arweave wordmark and circular symbol
- **Navigation Items**: Horizontal menu (Home, Build, Use, Discover, **Funding** - active)
- **Active State**: Orange highlighting (#F66700) for "Funding" menu item
- **Height**: 72px desktop, 64px mobile

```css
.header {
  height: 72px;
  background: #FFFFFF;
  border-bottom: 1px solid #F5F5F5;
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-item.active {
  color: #F66700;
  font-weight: 600;
}
```

### Main Content Areas
1. **Page Header Section** (Hero)
2. **Project Grid Section** (Main content)
3. **Call-to-Action Section** (Optional footer CTA)

---

## 2. Brand-Aligned Visual Design

### Color Implementation

#### Primary Brand Colors
- **Brand Orange**: `#F66700` - CTAs, active states, accent elements
- **Primary Black**: `#000000` - Main headlines, brand name
- **Primary Gray**: `#A8AFB3` - Body text, secondary headings
- **Background White**: `#FFFFFF` - Card backgrounds, page background
- **Subtle Gray**: `#F5F5F5` - Dividers, subtle backgrounds

#### Color Usage Hierarchy
```css
:root {
  --brand-orange: #F66700;
  --text-primary: #000000;
  --text-secondary: #A8AFB3;
  --text-tertiary: #666666;
  --background-primary: #FFFFFF;
  --background-subtle: #F5F5F5;
  --border-light: #E5E5E5;
}
```

### Typography Hierarchy

#### Font Family
- **Primary**: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif
- **Weight Scale**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

#### Type Scale Implementation
```css
.h1-hero {
  font-size: 48px;
  line-height: 1.2;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.02em;
}

.h2-section {
  font-size: 32px;
  line-height: 1.3;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 16px;
}

.body-large {
  font-size: 18px;
  line-height: 1.6;
  color: var(--text-secondary);
  font-weight: 400;
}

.body-regular {
  font-size: 16px;
  line-height: 1.5;
  color: var(--text-secondary);
  font-weight: 400;
}

.label-medium {
  font-size: 14px;
  line-height: 1.4;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.02em;
}
```

### Spacing System
- **Base Unit**: 8px
- **Spacing Scale**: 8px, 16px, 24px, 32px, 48px, 64px, 96px
- **Component Spacing**: 24px between cards, 48px between sections
- **Container Padding**: 24px mobile, 48px desktop

---

## 3. Content Elements

### Page Header (Hero Section)
```html
<section class="hero-section">
  <div class="hero-content">
    <h1 class="hero-title">Find projects.</h1>
    <p class="hero-subtitle">Build & monetize apps built on the foundation of permanent data.</p>
  </div>
</section>
```

#### Hero Styling
```css
.hero-section {
  padding: 64px 0 48px;
  text-align: left;
}

.hero-title {
  font-size: 48px;
  line-height: 1.2;
  font-weight: 700;
  color: #000000;
  margin-bottom: 16px;
}

.hero-subtitle {
  font-size: 18px;
  line-height: 1.6;
  color: #A8AFB3;
  max-width: 600px;
}
```

### Project Grid Content Structure

#### Project Categories (As shown in wireframe)
1. **Arweave Research** - Multiple funding opportunities
2. **Grant Programs** - Various research initiatives
3. **Community Projects** - Ecosystem development opportunities

#### Project Card Content Elements
Each project card contains:
- **Category Label**: "Arweave Research" (recurring theme)
- **Project Title**: Brief, descriptive name
- **Project Description**: 2-3 lines of explanation
- **Funding Information**: Grant amount or "Apply" CTA
- **Application Status**: Available/Deadline information

---

## 4. Interactive Components

### Project Cards
```html
<div class="project-card">
  <div class="project-category">Arweave Research</div>
  <h3 class="project-title">[Project Title]</h3>
  <p class="project-description">[Project description text]</p>
  <div class="project-footer">
    <button class="btn-apply">Apply</button>
    <span class="project-meta">[Additional info]</span>
  </div>
</div>
```

#### Card Styling
```css
.project-card {
  background: #FFFFFF;
  border: 1px solid #E5E5E5;
  border-radius: 12px;
  padding: 24px;
  transition: all 0.2s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  border-color: #F66700;
  box-shadow: 0 4px 12px rgba(246, 103, 0, 0.1);
  transform: translateY(-2px);
}

.project-category {
  font-size: 12px;
  font-weight: 600;
  color: #F66700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 12px;
}

.project-title {
  font-size: 20px;
  font-weight: 600;
  color: #000000;
  line-height: 1.3;
  margin-bottom: 12px;
}

.project-description {
  font-size: 14px;
  line-height: 1.5;
  color: #A8AFB3;
  flex-grow: 1;
  margin-bottom: 20px;
}

.project-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
```

### Button Implementations
```css
.btn-apply {
  background: #F66700;
  color: #FFFFFF;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 80px;
}

.btn-apply:hover {
  background: #E55A00;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(246, 103, 0, 0.2);
}

.btn-apply:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(246, 103, 0, 0.2);
}

.btn-apply:focus {
  outline: 2px solid #F66700;
  outline-offset: 2px;
}
```

### Grid Layout Implementation
```css
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
  margin-top: 48px;
}

@media (min-width: 768px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

---

## 5. Funding-Specific Features

### Grant Program Information Architecture
Each funding opportunity displays:
1. **Program Category**: "Arweave Research" label
2. **Grant Focus**: Specific research or development area
3. **Funding Amount**: If specified, or "Apply" for details
4. **Application Process**: Direct application links
5. **Deadline Information**: When applicable

### Application Process Integration
```html
<div class="application-flow">
  <div class="application-step">
    <div class="step-number">1</div>
    <div class="step-content">
      <h4>Review Requirements</h4>
      <p>Check eligibility and project criteria</p>
    </div>
  </div>
  <div class="application-step">
    <div class="step-number">2</div>
    <div class="step-content">
      <h4>Submit Proposal</h4>
      <p>Complete application with project details</p>
    </div>
  </div>
  <div class="application-step">
    <div class="step-number">3</div>
    <div class="step-content">
      <h4>Review Process</h4>
      <p>Evaluation by Arweave Research team</p>
    </div>
  </div>
</div>
```

### Success Metrics & Community Emphasis
- **Project Discovery**: Emphasis on finding collaborative opportunities
- **Ecosystem Growth**: Supporting permanent data storage innovation
- **Community Building**: Connecting developers and researchers
- **Permanent Impact**: Highlighting long-term value creation

---

## 6. Responsive Considerations

### Mobile Adaptations (320px - 767px)
```css
@media (max-width: 767px) {
  .hero-title {
    font-size: 32px;
    line-height: 1.3;
  }
  
  .hero-subtitle {
    font-size: 16px;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  
  .project-card {
    padding: 20px;
  }
  
  .page-container {
    padding: 0 16px;
  }
}
```

### Tablet Breakpoint (768px - 1023px)
```css
@media (min-width: 768px) and (max-width: 1023px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  
  .hero-section {
    padding: 48px 0 40px;
  }
}
```

### Desktop Optimization (1024px+)
```css
@media (min-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
  
  .hero-section {
    padding: 64px 0 48px;
  }
  
  .project-card:hover {
    transform: translateY(-4px);
  }
}
```

---

## 7. Technical Implementation Notes

### HTML Structure Recommendations
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Get Funded - Arweave</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header class="header">
    <!-- Navigation implementation -->
  </header>
  
  <main class="main-content">
    <section class="hero-section">
      <!-- Hero content -->
    </section>
    
    <section class="projects-section">
      <div class="page-container">
        <div class="projects-grid">
          <!-- Project cards -->
        </div>
      </div>
    </section>
  </main>
  
  <footer class="footer">
    <!-- Footer implementation -->
  </footer>
</body>
</html>
```

### CSS Class Naming Conventions
```css
/* BEM-style naming for components */
.project-card { }
.project-card__category { }
.project-card__title { }
.project-card__description { }
.project-card__footer { }
.project-card--featured { }

/* Utility classes */
.u-margin-bottom-24 { margin-bottom: 24px; }
.u-text-center { text-align: center; }
.u-visually-hidden { /* Screen reader only */ }
```

### Component Organization
```
components/
├── Header/
│   ├── Header.astro
│   └── header.css
├── ProjectCard/
│   ├── ProjectCard.astro
│   ├── projectcard.css
│   └── ProjectCard.types.ts
├── Button/
│   ├── Button.astro
│   └── button.css
└── Grid/
    ├── ProjectsGrid.astro
    └── grid.css
```

### Accessibility Considerations

#### ARIA Attributes
```html
<main role="main" aria-label="Funding opportunities">
  <section aria-labelledby="hero-title">
    <h1 id="hero-title">Find projects.</h1>
  </section>
  
  <section aria-labelledby="projects-title">
    <h2 id="projects-title" class="sr-only">Available Projects</h2>
    <div class="projects-grid" role="grid">
      <article class="project-card" role="gridcell" tabindex="0">
        <!-- Card content -->
      </article>
    </div>
  </section>
</main>
```

#### Focus Management
```css
.project-card:focus {
  outline: 2px solid #F66700;
  outline-offset: 2px;
}

.btn-apply:focus-visible {
  outline: 2px solid #F66700;
  outline-offset: 2px;
}

/* Skip link for keyboard navigation */
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: #F66700;
  color: white;
  padding: 8px;
  text-decoration: none;
  z-index: 1000;
}

.skip-link:focus {
  top: 6px;
}
```

#### Screen Reader Support
```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

### Form Validation & User Feedback
```css
.form-field {
  margin-bottom: 24px;
}

.form-input {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #E5E5E5;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.2s ease;
}

.form-input:focus {
  outline: none;
  border-color: #F66700;
  box-shadow: 0 0 0 3px rgba(246, 103, 0, 0.1);
}

.form-input.error {
  border-color: #E53E3E;
}

.form-error {
  color: #E53E3E;
  font-size: 14px;
  margin-top: 4px;
}

.form-success {
  color: #38A169;
  font-size: 14px;
  margin-top: 4px;
}
```

---

## 8. Performance Considerations

### Image Optimization
```css
.project-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  loading: lazy;
}
```

### Animation Performance
```css
/* Use transform and opacity for smooth animations */
.project-card {
  will-change: transform;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

@media (prefers-reduced-motion: reduce) {
  .project-card {
    transition: none;
  }
  
  .project-card:hover {
    transform: none;
  }
}
```

---

## 9. Content Management

### Dynamic Content Structure
```typescript
interface FundingOpportunity {
  id: string;
  category: string;
  title: string;
  description: string;
  fundingAmount?: string;
  deadline?: Date;
  applicationUrl: string;
  requirements: string[];
  isActive: boolean;
  isFeatured?: boolean;
}
```

### SEO Considerations
```html
<head>
  <title>Get Funded - Arweave Research Grants &amp; Opportunities</title>
  <meta name="description" content="Discover funding opportunities for permanent data storage projects. Apply for Arweave Research grants and build innovative applications on the permanent web.">
  <meta property="og:title" content="Get Funded - Arweave">
  <meta property="og:description" content="Build & monetize apps built on the foundation of permanent data">
  <meta property="og:type" content="website">
  <link rel="canonical" href="https://arweave.org/funding">
</head>
```

---

## Implementation Checklist

### Phase 1: Core Structure
- [ ] Header with navigation and active state
- [ ] Hero section with brand-aligned typography
- [ ] Basic project grid layout
- [ ] Project card component structure

### Phase 2: Styling & Interactions
- [ ] Brand color implementation (#F66700 orange)
- [ ] Typography hierarchy with proper weights
- [ ] Hover states and transitions
- [ ] Button components with focus states

### Phase 3: Responsive Design
- [ ] Mobile-first responsive breakpoints
- [ ] Touch-friendly interactions
- [ ] Flexible grid system
- [ ] Optimized font sizes across devices

### Phase 4: Accessibility & Performance
- [ ] ARIA attributes and semantic HTML
- [ ] Keyboard navigation support
- [ ] Screen reader optimization
- [ ] Performance optimizations

### Phase 5: Content Integration
- [ ] Dynamic content loading
- [ ] SEO optimization
- [ ] Form validation systems
- [ ] Analytics implementation

---

*This specification provides pixel-perfect implementation guidance while maintaining strict adherence to the updated Arweave brand guidelines, emphasizing the brand orange (#F66700) for CTAs and interactive elements.*