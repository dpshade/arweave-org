# wireframe-to-directives

Convert wireframe images into detailed implementation specifications using the ui-spec-translator agent.

## Usage

```
/wireframe-to-directives <image_path>
```

## Description

This command takes a wireframe image and generates comprehensive written specifications that can be used by developers to implement the UI without seeing the original design. The output includes detailed descriptions of:

- Layout structure and component hierarchy
- Visual design elements (colors, typography, spacing)
- Interactive elements and their behaviors
- Responsive design considerations
- Accessibility requirements
- Component states and variations

## Parameters

- `image_path`: Path to the wireframe image file (PNG, JPG, or other image formats)

## Output

The command creates a markdown specification file in `wireframes/spec/` with the same base name as the input image.

## Examples

```
/wireframe-to-directives wireframes/home.png
# Creates: wireframes/spec/home-spec.md

/wireframe-to-directives wireframes/dashboard.jpg  
# Creates: wireframes/spec/dashboard-spec.md
```

## Implementation

```javascript
const path = require('path');
const fs = require('fs');

async function executeCommand(args) {
  const imagePath = args[0];
  
  if (!imagePath) {
    throw new Error('Please provide an image path');
  }
  
  // Verify image exists
  if (!fs.existsSync(imagePath)) {
    throw new Error(`Image not found: ${imagePath}`);
  }
  
  // Create output directory if it doesn't exist
  const specDir = 'wireframes/spec';
  if (!fs.existsSync(specDir)) {
    fs.mkdirSync(specDir, { recursive: true });
  }
  
  // Generate output filename
  const baseName = path.basename(imagePath, path.extname(imagePath));
  const outputPath = path.join(specDir, `${baseName}-spec.md`);
  
  // Use ui-spec-translator agent to analyze the wireframe
  const agent = useAgent('ui-spec-translator');
  
  const prompt = `
    Analyze this wireframe image and create an exhaustive written specification that would allow a developer to recreate this UI exactly without seeing the original image.
    
    Your specification should include:
    
    1. **Overall Layout Structure**
       - Page layout type (fixed, fluid, responsive breakpoints)
       - Main content areas and their relationships
       - Grid system or layout methodology
    
    2. **Component Hierarchy**
       - Parent-child relationships
       - Component nesting levels
       - Semantic HTML structure recommendations
    
    3. **Visual Design Details**
       - Color palette (exact hex/rgb values if discernible)
       - Typography (font families, sizes, weights, line-heights)
       - Spacing system (margins, padding, gaps)
       - Border styles and radii
       - Shadow effects
    
    4. **Content Elements**
       - All text content (headings, paragraphs, labels)
       - Image placeholders and their purposes
       - Icon descriptions and placements
       - Data display formats
    
    5. **Interactive Elements**
       - Buttons (styles, states, positions)
       - Form fields (types, labels, placeholders)
       - Links and navigation elements
       - Dropdowns, toggles, or other controls
    
    6. **Component States**
       - Default states
       - Hover/focus states
       - Active/selected states
       - Disabled states
       - Loading states
    
    7. **Responsive Behavior**
       - Mobile layout adaptations
       - Tablet breakpoints
       - Desktop optimizations
       - Component reflow patterns
    
    8. **Accessibility Considerations**
       - ARIA labels and roles
       - Keyboard navigation order
       - Screen reader considerations
       - Color contrast requirements
    
    9. **Implementation Notes**
       - Recommended component libraries
       - CSS framework compatibility
       - Browser support requirements
       - Performance considerations
    
    Please analyze the wireframe at: ${imagePath}
    
    Format the output as a detailed markdown specification with clear sections and subsections.
    Be extremely specific and thorough - the goal is to enable pixel-perfect recreation.
  `;
  
  const result = await agent.execute({
    imagePath: imagePath,
    prompt: prompt
  });
  
  // Write specification to file
  fs.writeFileSync(outputPath, result.specification);
  
  return {
    success: true,
    message: `Specification created: ${outputPath}`,
    outputPath: outputPath
  };
}

module.exports = { executeCommand };
```

## Notes

- The ui-spec-translator agent provides detailed visual-to-textual translation
- Specifications are designed for developers who cannot see the original wireframe
- Output includes both technical implementation details and design system considerations
- Best used for handoffs between design and development teams
- Supports accessibility documentation and compliance requirements