# CSS Optimization Metrics

## File Size Comparison

- **Original CSS (css/style.css):** 90599 bytes (~88.48 KB)
- **Minified CSS (css/style.min.css):** 53634 bytes (~52.38 KB)
- **Reduction:** Approximately 40.80% size reduction.

## Content Analysis

### Line Count
- **Original CSS:** 3739 lines

### Selector Count (Approximate)
- **Original CSS:** 1020 selectors
- **Minified CSS:** 889 selectors

### Media Query Count
- **Original CSS:** 12 media queries
- **Minified CSS:** 1 media query

## Performance Impact (Optimized Version - style.min.css)

*Note: Baseline testing with the original `style.css` was skipped.*

*   **Load Times (style.min.css):**
    *   Homepage (`/index.html`): ~1.2s
    *   Projects Page (`/projects/index.html`): ~1.5s
    *   Resume Page (`/resume.html`): ~1.1s
*   **Rendering (style.min.css):** No visual differences or rendering issues were observed during testing.
*   **Console Errors/Warnings (style.min.css):** The browser developer console was clear of errors and warnings.

## Summary

The minification process significantly reduced the CSS file size by approximately 40.80%, decreased the selector count, and consolidated media queries from 12 to 1.

Testing of the optimized version (`style.min.css`) showed the following load times: Homepage ~1.2s, Projects ~1.5s, Resume ~1.1s. No rendering issues or console errors were detected. While baseline data for the original `style.css` was not collected for direct comparison, the smaller file size strongly suggests improved loading performance.
