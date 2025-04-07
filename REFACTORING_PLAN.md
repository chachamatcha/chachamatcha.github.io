# Personal Website Refactoring Plan

This document outlines the proposed plan for refactoring the HTML and CSS of the personal website project.

## Initial Findings

Based on the analysis of `index.html`, `contact.html`, `resume.html`, and `css/style.css`:

1.  **HTML Structure:** Generally semantic (`header`, `nav`, `main`, `section`, `article`), with consistent page layouts (header/nav/content/footer). Uses IDs for main sections.
2.  **CSS Approach:** Heavily relies on utility-style classes defined in `style.css`, similar to frameworks like Tailwind CSS. CSS variables are used well for theming.
3.  **CSS Issues:**
    *   **Redundancy & Overrides:** Significant duplication and redefinition of CSS classes (e.g., `.hover-lift`, `.rounded-*`, `.gap-*`, `.accent-bottom-*`, `.icon-style`, `.projects-grid`). This increases file size and maintenance complexity.
    *   **Organization:** The `style.css` file lacks clear structure, mixing utility classes, component styles, element selectors, and IDs without distinct sections.
    *   **Specificity:** Potential for specificity issues due to mixing selector types, although the utility-first approach might lessen the impact. Styling sections by ID (`#hero`, `#about`) tightly couples styles to specific page structures.
    *   **Naming:** Mostly descriptive, but some inconsistencies (e.g., similar background classes like `bg-subtle`, `bg-semi-transparent`).
    *   **Size/Performance:** `style.css` is large (>2100 lines). There might be unused styles (e.g., several keyframes animations).
4.  **Consistency:** While efforts towards standardization are noted in HTML comments, the CSS duplication suggests potential inconsistencies might still exist or could easily arise.
5.  **JavaScript:** `resume.html` contains embedded JavaScript for the skills tab functionality and animations.
6.  **Accessibility:** Basic accessibility features are present (lang attribute, some alt text), but could be enhanced, especially for custom interactive elements (skills visualization).

## Proposed Refactoring Plan

```mermaid
graph TD
    A[Start Analysis] --> B{Analyze HTML Files};
    B --> C{Analyze CSS File};
    C --> D[Identify Issues: Redundancy, Organization, Specificity, Size];
    D --> E{Develop Refactoring Strategy};
    E --> F[1. CSS Cleanup & Organization];
    E --> G[2. HTML Structure & Class Refinement];
    E --> H[3. Enhance Consistency];
    E --> I[4. Improve Accessibility];
    E --> J[5. JavaScript Externalization];
    F --> F1[Remove Duplicate/Overridden CSS Rules];
    F --> F2[Group CSS Rules: Base, Utilities, Components, Sections];
    F --> F3[Adopt/Refine Naming Convention (e.g., BEM-like for components)];
    F --> F4[Audit for & Remove Unused CSS];
    G --> G1[Reduce Utility Class Overload in HTML];
    G1 --> G2[Create Reusable Component Classes (e.g., `.card`, `.button`, `.skill-item`)];
    G --> G3[Review Semantic Element Usage];
    H --> H1[Standardize Spacing, Typography, Colors via CSS Variables/Base Styles];
    H --> H2[Ensure Consistent Component Appearance Across Pages];
    I --> I1[Add ARIA Attributes to Interactive Elements (Tabs, Buttons)];
    I --> I2[Ensure Proper Alt Text for All Images];
    I --> I3[Review Color Contrast];
    J --> J1[Move JS from resume.html to Separate File (e.g., `js/resume.js`)];
    J1 --> K[End Plan];
    F1 --> K;
    F2 --> K;
    F3 --> K;
    F4 --> K;
    G2 --> K;
    G3 --> K;
    H1 --> K;
    H2 --> K;
    I1 --> K;
    I2 --> K;
    I3 --> K;

    style F fill:#f9f,stroke:#333,stroke-width:2px
    style G fill:#f9f,stroke:#333,stroke-width:2px
    style H fill:#f9f,stroke:#333,stroke-width:2px
    style I fill:#f9f,stroke:#333,stroke-width:2px
    style J fill:#f9f,stroke:#333,stroke-width:2px
```

## Detailed Steps

1.  **CSS Cleanup & Organization:**
    *   **De-duplication:** Systematically identify and remove duplicate CSS class definitions and overrides.
    *   **Structure `style.css`:** Reorganize into logical sections (Variables, Base, Utilities, Components, Sections, Animations, Media Queries).
    *   **Naming Convention:** Consider adopting a BEM-like approach for component styles.
    *   **Audit & Prune:** Identify and remove unused CSS rules.

2.  **HTML Structure & Class Refinement:**
    *   **Component Classes:** Replace long strings of utility classes with more semantic component classes (e.g., `.card`, `.button`).
    *   **Semantic Review:** Ensure appropriate use of HTML elements.

3.  **Enhance Consistency:**
    *   **Global Styles:** Leverage CSS variables and base styles for consistency.
    *   **Component Consistency:** Ensure common components look and behave identically.

4.  **Improve Accessibility (A11y):**
    *   **ARIA Roles:** Add appropriate ARIA attributes to interactive elements (tabs, hexagons).
    *   **Alt Text:** Ensure descriptive alt text for images.
    *   **Color Contrast:** Review color combinations.

5.  **JavaScript Externalization:**
    *   Move inline script from `resume.html` to a separate `.js` file.

This plan aims to make the codebase cleaner, easier to maintain, more consistent, and potentially more performant without changing the visual appearance significantly.