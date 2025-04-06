# Personal Website Plan

This document outlines the structure, content, and high-level requirements for the personal website.

## 1. Core Pages

*   **Home / About / Resume (`index.html`):**
    *   **Purpose:** Main landing page, introduction, and professional summary.
    *   **Content:** About Me section, Contact Information (Email, LinkedIn, GitHub), Skills (Categorized), Work Experience (Position, Company, Dates, Responsibilities/Achievements), Education (Degree, Institution, Dates).
    *   **Navigation:** Clear links to Blog and Projects sections.
*   **Blog Index (`blog/index.html`):**
    *   **Purpose:** Listing of all blog posts.
    *   **Content:** Chronological list (newest first) showing Title, Publication Date, Short Summary/Excerpt. Each entry links to the full post.
*   **Individual Blog Post (`blog/posts/{post-slug}.html`):**
    *   **Purpose:** Display the full content of a single blog post.
    *   **Content:** Full Post Title, Publication Date, Main Blog Content (text, images, code snippets). Optional: Categories/Tags.
*   **Project Showcase (`projects/index.html`):**
    *   **Purpose:** Showcase key personal or professional projects.
    *   **Content:** Grid or list view. Each project shows: Title, Thumbnail Image/Icon, Brief Description, Key Technologies Used.
    *   **Links:** Direct links to the GitHub repository and/or a live demo for each project.

## 2. Content Outline Summary

*   **Home:** About Me, Contact, Skills, Experience, Education.
*   **Blog Index:** List of Posts (Title, Date, Summary, Link).
*   **Blog Post:** Full article content.
*   **Projects:** Project details (Title, Desc, Tech), Links (GitHub, Demo).

## 3. High-Level Style & Technical Notes

*   **Aesthetic:** Clean and modern.
*   **Technology:** Custom HTML and CSS.
*   **Features:** Consider implementing a user-selectable dark theme option.
*   **Hosting:** GitHub Pages.

## 4. Site Structure Diagram

```mermaid
graph TD
    A(Home / About / Resume: index.html) --> B(Blog Index: blog/index.html);
    A --> C(Project Showcase: projects/index.html);
    B --> D{Individual Blog Posts: blog/posts/*.html};
    C --> F[External: GitHub Repo];
    C --> G[External: Live Demo];

    style A fill:#f9f,stroke:#333,stroke-width:2px
    style B fill:#ccf,stroke:#333,stroke-width:2px
    style C fill:#cfc,stroke:#333,stroke-width:2px
    style D fill:#ccf,stroke:#333,stroke-width:1px,stroke-dasharray: 5 5
    style F fill:#eee,stroke:#333,stroke-width:1px
    style G fill:#eee,stroke:#333,stroke-width:1px