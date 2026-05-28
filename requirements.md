# Project Requirements: POC Microsite

## 1. Overview
This repository is a monorepo of several client microsites, one page sites consisting of imagery and functional components.

## 2. Technical Stack
- Framework: Next.js 14
- Language: TypeScript
- Component Library: React Bootstrap
- Styling: Tailwind CSS

## 3. General Requirements
- The layout should be responsive.

## 4. Coding Conventions & Style
- Use functional components.
- Use Tailwind CSS for styling.
- Use kebab-casing for file and folder names.
- Use React Bootstrap components as available or necessary.
- Content should be separated from components and layouts, and should not be hardcoded for editability.
- Image paths should be separated from components and layouts.
- Use the exact images/assets as specified in the Figma file.
- Adhere strictly to image/asset dimensions as specified in the Figma design.
- Adhere strictly to alignment, padding, and margins as specified in the Figma design.
- Adhere strictly to colors used in the Figma file.

## 5. File Structure
- Subfolders should be named according to the client name
- Create a /packages/components subfolder in the root for reusable components across all microsites
- Each client subfolder should contain a /src/assets folder with all assets and imagery