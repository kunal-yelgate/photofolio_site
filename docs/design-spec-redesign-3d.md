# 3D redesign spec

## Objective
Create a futuristic, original portfolio experience that preserves all existing Kunal Yelgate content, project routes, metadata, and resume links while shifting the visual language toward an atmospheric 3D workstation concept inspired by interactive creative portfolios.

## Reference analysis

### Layout
- The reference uses a single dominant hero composition built around a fully visible 3D desk scene.
- The page foreground contains a concise narrative, a list of work links, and compact contact details.
- Navigation is heavily scene-led: interactive objects and buttons replace a conventional top nav in the hero.
- Supporting page content stays readable even when the scene is not present, especially on smaller screens.

### 3D scene
- The concept is a warm desk with a laptop, tablet, phone, lamp, plant, and interactive props.
- The camera is front-three-quarter, slightly elevated.
- The styling is soft and atmospheric, with warm browns, muted neutrals, and emissive highlights.
- The scene uses object groups and action hotspots; the desk is interactive, not just decorative.

### Animation patterns
- Scene motion is gentle and ambient rather than aggressive.
- Objects subtly react to pointer movement, and state changes occur when a device/project is activated.
- A realistic portfolio implementation should prefer low-frequency motion, heavy contrast, and controlled reveals over flashy effects.

### Visual system
- Main palette: dark navy / warm black, electric cyan, lime accent, coral warning tint, and atmospheric lighting.
- Main typography: high-contrast geometric headings paired with readable sans text.
- Spacing and border systems follow a crisp, engineered brutalist language but in a more polished dark interface.

### Responsive behavior
- Mobile prioritizes readable content and controls over a heavy 3D render.
- Desktop and larger tablet screens get the workstation scene.
- The 3D layer should be optional and should degrade gracefully without hiding project content.

## Current portfolio audit

### Existing content to preserve
- Entire route structure: `/`, `/projects/[slug]`, `robots.txt`, `sitemap.xml`.
- Metadata and canonical URLs remain in `src/app/layout.tsx`.
- Project data, route slugs, resume URL, socials, and project detail content remain the source of truth.

### Minimal-change integration approach
1. Keep the portfolio’s current data modules and route structure intact.
2. Replace the current hero styling with a dark futuristic workstation layout.
3. Implement an original low-poly 3D scene in a client-only canvas area with project hotspots.
4. Preserve all section content and map it into the new dark visual system.
5. Add mobile fallback layout and accessible project selection with complete text-based alternatives.
6. Keep the current Next.js metadata and deployment configuration untouched.

## Implementation direction
- Use a low-poly 3D scene built from primitive geometry.
- Use soft ambient light, emissive monitor surfaces, and motion-driven camera drift.
- Use a dark background with cyan/lime accents and a strong contrast relationship to the brand content.
- Use a reduced-motion fallback and no mandatory 3D requirement for mobile devices.

## Performance constraints
- Keep the scene lightweight and primitive-based.
- Implement DPR caps and hidden-tab optimization.
- Prefer original geometry over large third-party models.
- Maintain accessible DOM content even when the 3D layer fails to initialize.

## Design outcome
A futuristic workstation portfolio that feels premium and technically sophisticated while staying 100% rooted in Kunal Yelgate’s work, projects, and identity.
