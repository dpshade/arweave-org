# Discover Page Implementation Specification

*Comprehensive specification for the Arweave Discover page based on wireframe analysis and brand guidelines*

## Page Overview

The Discover page serves as the primary project discovery interface for the Arweave ecosystem, enabling users to explore, search, and discover projects built on the Arweave network. The page emphasizes a clean, grid-based browsing experience with sophisticated filtering and search capabilities.

### Core Purpose
- Enable discovery of Arweave-based projects and applications
- Provide filtering and categorization for efficient project browsing
- Showcase community projects with consistent branding
- Support various project types from web apps to data storage solutions

## 1. Page Structure & Layout

### 1.1 Overall Page Architecture

```
┌─ Header/Navigation ─────────────────────────────────┐
├─ Hero Section ─────────────────────────────────────┤
├─ Search/Filter Controls ───────────────────────────┤
├─ Project Grid (Main Content) ──────────────────────┤
│  ┌─ Project Card ─┐ ┌─ Project Card ─┐ ┌─ Card ─┐  │
│  └────────────────┘ └────────────────┘ └────────┘  │
│  ┌─ Project Card ─┐ ┌─ Project Card ─┐ ┌─ Card ─┐  │
│  └────────────────┘ └────────────────┘ └────────┘  │
├─ Load More/Pagination ─────────────────────────────┤
└─ Footer ───────────────────────────────────────────┘
```

### 1.2 Container Structure
- **Max Width**: 1200px centered container
- **Side Margins**: 24px on mobile, 48px on tablet, 80px on desktop
- **Vertical Spacing**: 80px between major sections
- **Grid System**: CSS Grid with responsive columns

### 1.3 Header Implementation
- **Height**: 80px fixed header
- **Background**: White (#FFFFFF) with subtle shadow
- **Logo**: Arweave logo positioned top-left (148px from left edge)
- **Navigation**: Horizontal menu with "Discover" highlighted in brand orange (#F66700)
- **Sticky Behavior**: Fixed position on scroll

## 2. Brand-Aligned Visual Design

### 2.1 Color Implementation

#### Primary Brand Colors
```css
:root {
  --brand-orange: #F66700;
  --brand-black: #000000;
  --primary-gray: #A8AFB3;
  --light-gray: #666666;
  --background-white: #FFFFFF;
  --subtle-gray: #F5F5F5;
  --card-border: #E5E5E5;
}
```

#### Color Usage Patterns
- **Headlines**: Brand black (#000000) for maximum contrast
- **Body Text**: Primary gray (#A8AFB3) for readability
- **CTAs & Active States**: Brand orange (#F66700)
- **Card Backgrounds**: Pure white (#FFFFFF)
- **Subtle Accents**: Light gray (#F5F5F5) for borders and dividers

### 2.2 Typography System

#### Font Specifications
```css
/* Primary font stack - modern sans-serif */
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 
             'Helvetica Neue', Arial, sans-serif;

/* Type scale hierarchy */
--text-hero: 48px/56px;        /* Hero headline */
--text-xl: 32px/40px;          /* Section headers */
--text-lg: 24px/32px;          /* Card titles */
--text-base: 16px/24px;        /* Body text */
--text-sm: 14px/20px;          /* Supporting text */
--text-xs: 12px/16px;          /* Labels & metadata */
```

#### Typography Hierarchy
1. **Page Title**: 48px bold black, "Find projects."
2. **Tagline**: 16px regular primary gray, "Build & monetize apps built on the foundation of permanent data."
3. **Card Titles**: 24px medium black for project names
4. **Card Descriptions**: 14px regular primary gray
5. **Metadata**: 12px regular light gray for categories, dates, stats

### 2.3 Spacing System

#### Consistent Spacing Scale
```css
--space-xs: 4px;    /* Micro spacing */
--space-sm: 8px;    /* Small spacing */
--space-md: 16px;   /* Medium spacing */
--space-lg: 24px;   /* Large spacing */
--space-xl: 32px;   /* Extra large spacing */
--space-2xl: 48px;  /* Section spacing */
--space-3xl: 80px;  /* Major section spacing */
```

## 3. Content Elements

### 3.1 Hero Section
```html
<section class="hero-section">
  <div class="container">
    <h1 class="hero-title">Find projects.</h1>
    <p class="hero-tagline">Build & monetize apps built on the foundation of permanent data.</p>
  </div>
</section>
```

#### Hero Styling
- **Container**: Max-width 1200px, centered
- **Title**: 48px bold black, margin-bottom 16px
- **Tagline**: 16px regular primary gray
- **Vertical Spacing**: 80px top/bottom padding

### 3.2 Search & Filter Controls

#### Search Bar Implementation
```html
<div class="search-filter-section">
  <div class="search-container">
    <input type="search" placeholder="Search projects..." class="search-input">
    <button class="search-button">
      <svg class="search-icon"><!-- Search icon --></svg>
    </button>
  </div>
  
  <div class="filter-controls">
    <select class="filter-select">
      <option>All Categories</option>
      <option>Web Apps</option>
      <option>Data Storage</option>
      <option>DeFi</option>
      <option>Social</option>
    </select>
    
    <select class="sort-select">
      <option>Most Recent</option>
      <option>Most Popular</option>
      <option>Alphabetical</option>
    </select>
  </div>
</div>
```

#### Search/Filter Styling
- **Search Input**: 400px width, 48px height, rounded corners (8px)
- **Border**: 1px solid #E5E5E5, focus state with orange accent
- **Filter Dropdowns**: Consistent styling with search input
- **Spacing**: 32px margin bottom from hero section

### 3.3 Project Card Structure

#### Card HTML Template
```html
<article class="project-card">
  <div class="card-header">
    <div class="project-icon">
      <svg class="icon"><!-- Project type icon --></svg>
    </div>
    <div class="card-actions">
      <button class="bookmark-btn">
        <svg class="bookmark-icon"><!-- Bookmark icon --></svg>
      </button>
    </div>
  </div>
  
  <div class="card-content">
    <h3 class="project-title">Proposed Research</h3>
    <p class="project-description">
      Submit Research Proposals to fund research within their 
      relevant verticals through ecosystem distribution. Funds 
      are allocated through consensus distribution.
    </p>
  </div>
  
  <div class="card-footer">
    <div class="project-meta">
      <span class="category">Research</span>
      <span class="date">2 days ago</span>
    </div>
    <div class="project-stats">
      <span class="star-count">
        <svg class="star-icon"><!-- Star icon --></svg>
        24
      </span>
    </div>
  </div>
</article>
```

#### Card Content Guidelines
- **Project Title**: Descriptive name, 24px medium weight
- **Description**: 2-3 lines maximum, 14px regular text
- **Category Tags**: Visual badges with subtle backgrounds
- **Metadata**: Creation date, popularity metrics, creator info

## 4. Interactive Components

### 4.1 Project Card Interactions

#### Hover States
```css
.project-card {
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}

.project-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  border-color: var(--brand-orange);
}

.project-card:hover .project-title {
  color: var(--brand-orange);
}
```

#### Active States
- **Border Highlight**: 2px orange border on focus/active
- **Title Color Change**: Project title changes to brand orange
- **Elevation**: Subtle lift effect (2px translateY)
- **Shadow Enhancement**: Deeper shadow on hover

### 4.2 Search & Filter Interactions

#### Search Input Behavior
```css
.search-input:focus {
  outline: 2px solid var(--brand-orange);
  border-color: var(--brand-orange);
}
```

#### Filter Dropdown Styling
- **Active Filter**: Orange accent on selected options
- **Dropdown Animation**: Smooth open/close transitions
- **Clear Filters**: Reset button with orange styling

### 4.3 Button Implementations

#### Primary CTA Buttons
```css
.cta-button {
  background: var(--brand-orange);
  color: white;
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: 500;
  transition: all 0.2s ease;
}

.cta-button:hover {
  background: #E55A00; /* Darker orange */
  transform: translateY(-1px);
}
```

#### Secondary Buttons
- **Ghost Style**: Transparent background, orange border
- **Text Color**: Brand orange
- **Hover State**: Orange background with white text

## 5. Project Discovery Features

### 5.1 Grid Layout System

#### Responsive Grid Configuration
```css
.projects-grid {
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  margin-top: 48px;
}

/* Responsive breakpoints */
@media (min-width: 768px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }
}

@media (min-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

#### Grid Specifications
- **Mobile**: Single column, 320px minimum width
- **Tablet**: 2 columns, 32px gap
- **Desktop**: 3 columns, 32px gap
- **Large Desktop**: 3 columns maintained for optimal readability

### 5.2 Project Card Architecture

#### Card Dimensions
- **Width**: Flexible within grid constraints
- **Min Height**: 280px for content consistency
- **Padding**: 24px internal padding
- **Border Radius**: 12px for modern appearance
- **Border**: 1px solid #E5E5E5

#### Information Hierarchy
1. **Visual Identifier**: Project icon or logo (top)
2. **Project Title**: Primary heading
3. **Description**: Brief project overview
4. **Metadata**: Category, date, statistics
5. **Actions**: Bookmark, share, external link

### 5.3 Category Organization

#### Category System
```html
<div class="category-filters">
  <button class="category-pill active">All</button>
  <button class="category-pill">Web Apps</button>
  <button class="category-pill">DeFi</button>
  <button class="category-pill">Social</button>
  <button class="category-pill">Data Tools</button>
  <button class="category-pill">Research</button>
</div>
```

#### Category Pill Styling
- **Default**: Light gray background, dark text
- **Active**: Orange background, white text
- **Hover**: Orange border, maintain background
- **Padding**: 8px 16px
- **Border Radius**: 20px (pill shape)

### 5.4 User Engagement Elements

#### Popularity Indicators
- **Star Rating**: Visual star icons with count
- **View Count**: Eye icon with number
- **Recent Activity**: Time-based indicators
- **Creator Badge**: Verified creator indicators

#### Social Features
- **Bookmark**: Save projects for later
- **Share**: Social sharing capabilities
- **Like/Star**: Community engagement metrics
- **Comments**: Link to project discussion

## 6. Responsive Considerations

### 6.1 Mobile Adaptations (320px - 767px)

#### Layout Changes
- **Single Column Grid**: Projects stack vertically
- **Search Bar**: Full width with stacked filters
- **Card Padding**: Reduced to 16px for mobile
- **Typography**: Slightly smaller scales for mobile readability

#### Mobile-Specific Features
```css
@media (max-width: 767px) {
  .hero-title { font-size: 36px; line-height: 44px; }
  .search-filter-section { flex-direction: column; gap: 16px; }
  .project-card { margin-bottom: 16px; }
  .filter-controls { width: 100%; justify-content: space-between; }
}
```

### 6.2 Tablet Adaptations (768px - 1023px)

#### Grid Adjustments
- **Two Column Layout**: Optimal for tablet viewing
- **Increased Gaps**: 24px between cards
- **Maintained Readability**: Font sizes remain consistent
- **Touch Targets**: Ensure 44px minimum for interactive elements

### 6.3 Desktop Optimization (1024px+)

#### Enhanced Experience
- **Three Column Grid**: Maximum information density
- **Hover Interactions**: Rich hover states for mouse users
- **Advanced Filtering**: More sophisticated filter options
- **Keyboard Navigation**: Full keyboard accessibility

## 7. Technical Implementation Notes

### 7.1 HTML Structure Recommendations

#### Semantic HTML
```html
<main class="discover-page" role="main">
  <section class="hero-section" aria-labelledby="page-title">
    <h1 id="page-title">Find projects.</h1>
    <p class="tagline">Build & monetize apps built on the foundation of permanent data.</p>
  </section>
  
  <section class="search-section" aria-label="Project search and filters">
    <!-- Search and filter controls -->
  </section>
  
  <section class="projects-section" aria-label="Project listings">
    <div class="projects-grid" role="grid">
      <!-- Project cards -->
    </div>
  </section>
</main>
```

### 7.2 CSS Class Naming Conventions

#### BEM Methodology
```css
/* Block */
.project-card { }

/* Elements */
.project-card__header { }
.project-card__title { }
.project-card__description { }
.project-card__footer { }

/* Modifiers */
.project-card--featured { }
.project-card--loading { }
```

#### Utility Classes
```css
.text-center { text-align: center; }
.mb-lg { margin-bottom: var(--space-lg); }
.color-orange { color: var(--brand-orange); }
.bg-white { background-color: var(--background-white); }
```

### 7.3 Component Organization

#### File Structure
```
components/
├── DiscoverPage/
│   ├── DiscoverPage.astro
│   ├── SearchFilters.astro
│   ├── ProjectGrid.astro
│   ├── ProjectCard.astro
│   └── CategoryFilter.astro
└── shared/
    ├── Button.astro
    ├── Icon.astro
    └── Input.astro
```

#### Component Props
```javascript
// ProjectCard.astro props
export interface Props {
  id: string;
  title: string;
  description: string;
  category: string;
  createdAt: Date;
  starCount: number;
  author: string;
  featured?: boolean;
}
```

### 7.4 State Management

#### Search & Filter State
```javascript
// Example state structure
const [searchState, setSearchState] = useState({
  query: '',
  category: 'all',
  sortBy: 'recent',
  page: 1,
  loading: false
});
```

#### URL Parameter Sync
- **Search Query**: `?q=search-term`
- **Category Filter**: `?category=web-apps`
- **Sort Order**: `?sort=popular`
- **Pagination**: `?page=2`

## 8. Accessibility Considerations

### 8.1 WCAG 2.1 AA Compliance

#### Color Contrast
- **Text on White**: 4.5:1 minimum ratio
- **Orange on White**: Verified contrast ratio
- **Gray Text**: Meets AA standards for body text
- **Focus Indicators**: High contrast orange outlines

#### Keyboard Navigation
```css
.project-card:focus {
  outline: 2px solid var(--brand-orange);
  outline-offset: 2px;
}

.skip-to-content {
  position: absolute;
  top: -40px;
  left: 6px;
  background: var(--brand-orange);
  color: white;
  padding: 8px;
  text-decoration: none;
  transition: top 0.3s;
}

.skip-to-content:focus {
  top: 6px;
}
```

### 8.2 Screen Reader Support

#### ARIA Labels
```html
<section aria-label="Project search and filtering options">
  <input 
    type="search" 
    aria-label="Search projects"
    aria-describedby="search-help"
  >
  <div id="search-help" class="sr-only">
    Enter keywords to search through available projects
  </div>
</section>

<div class="projects-grid" role="grid" aria-label="Project listings">
  <article class="project-card" role="gridcell" tabindex="0">
    <h3 id="project-title-1">Project Name</h3>
    <p aria-describedby="project-title-1">Project description...</p>
  </article>
</div>
```

#### Screen Reader Only Content
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

### 8.3 Motion & Animation Preferences

#### Reduced Motion Support
```css
@media (prefers-reduced-motion: reduce) {
  .project-card {
    transition: none;
  }
  
  .project-card:hover {
    transform: none;
  }
}
```

## 9. Performance Considerations

### 9.1 Loading Strategies

#### Progressive Enhancement
- **Critical CSS**: Above-fold styles inlined
- **Lazy Loading**: Project cards below the fold
- **Image Optimization**: WebP format with fallbacks
- **Font Loading**: System fonts with fallbacks

#### Pagination Strategy
```javascript
// Infinite scroll with accessibility
const loadMoreProjects = async (page) => {
  const newProjects = await fetchProjects(page);
  // Update DOM with new content
  // Announce to screen readers
  announceForScreenReader(`Loaded ${newProjects.length} more projects`);
};
```

### 9.2 Search Performance

#### Debounced Search
```javascript
const debouncedSearch = debounce((query) => {
  performSearch(query);
}, 300);
```

#### Client-Side Filtering
- **Local Storage**: Cache recent searches
- **IndexedDB**: Store project metadata for offline browsing
- **Service Worker**: Cache static assets and API responses

## 10. Brand Consistency Checklist

### 10.1 Visual Elements
- [ ] Brand orange (#F66700) used for CTAs and active states
- [ ] Primary gray (#A8AFB3) for body text
- [ ] Clean sans-serif typography with proper hierarchy
- [ ] Generous whitespace between elements
- [ ] White card backgrounds with subtle borders
- [ ] Consistent border radius (6px buttons, 12px cards)

### 10.2 Interactive Elements
- [ ] Orange hover states on interactive elements
- [ ] Smooth transitions (0.2s ease-in-out)
- [ ] Consistent button padding and sizing
- [ ] Proper focus indicators for accessibility
- [ ] Brand-aligned loading states

### 10.3 Content Standards
- [ ] Clear, descriptive project titles
- [ ] Concise project descriptions (2-3 lines max)
- [ ] Consistent metadata formatting
- [ ] Professional, approachable tone
- [ ] Technical accuracy in descriptions

## 11. Implementation Priority

### Phase 1: Core Structure
1. HTML semantic structure
2. Basic CSS grid layout
3. Typography system implementation
4. Color system integration

### Phase 2: Interactive Features
1. Search functionality
2. Filter system
3. Card hover states
4. Responsive adaptations

### Phase 3: Enhanced Experience
1. Advanced filtering
2. Pagination/infinite scroll
3. Bookmark functionality
4. Performance optimizations

### Phase 4: Accessibility & Polish
1. WCAG compliance audit
2. Screen reader testing
3. Keyboard navigation refinement
4. Motion preference support

---

*This specification provides comprehensive implementation guidance for the Arweave Discover page, ensuring brand consistency, technical excellence, and optimal user experience across all devices and interaction methods.*