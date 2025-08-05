# Navigation Specification

## Key Requirements from Wireframes

### Location
- **TOP RIGHT** of header, not bottom footer
- Horizontal tab layout
- Part of the main header component

### Tab Structure
1. Home
2. Use  
3. Build
4. Discover (orange/active in wireframes)
5. Get Funded

### Visual Style
- Clean, minimal tabs
- Orange accent color for active state
- Consistent with overall Arweave branding
- Should integrate seamlessly with header logo on left

### Behavior
- Active tab highlighted in orange
- Hover states for inactive tabs
- Responsive design for mobile (may need hamburger menu)

### Implementation Notes
- Remove existing bottom NavBar component
- Update Header.astro to include navigation
- Ensure proper routing between pages
- Maintain accessibility standards