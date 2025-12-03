# Header & Footer Components System

This project uses a component-based approach to include the same header and footer across all pages.

## Files Created

1. **header.html** - Contains the top navigation and main header
2. **footer.html** - Contains the footer and WhatsApp button
3. **js/layout.js** - JavaScript that loads the header and footer
4. **js/script.js** - Main JavaScript for site functionality
5. **page-template.html** - Template for creating new pages

## How It Works

The `js/layout.js` file uses the Fetch API to load `header.html` and `footer.html` into placeholder divs on each page.

## Using on Existing Pages

To add the header and footer to any page:

1. Add these placeholder divs in your HTML:
```html
<body>
    <!-- Header Placeholder -->
    <div id="header-placeholder"></div>

    <!-- Your page content here -->

    <!-- Footer Placeholder -->
    <div id="footer-placeholder"></div>

    <script src="js/layout.js"></script>
    <script src="js/script.js" defer></script>
</body>
```

2. Make sure the page includes the Font Awesome and Google Fonts links in the `<head>`:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"/>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Rubik:wght@600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="css/style.css">
```

## Creating New Pages

1. Copy `page-template.html`
2. Rename it to your new page name (e.g., `about.html`)
3. Update the title in the `<head>` section
4. Add your content between the header and footer placeholders
5. That's it! The header and footer will load automatically

## For Subfolders (e.g., pages/about.html)

If your page is in a subfolder, adjust the paths in the script:

```html
<script>
// Adjust paths for subfolder
document.addEventListener('DOMContentLoaded', function() {
    loadComponent('header-placeholder', '../header.html');
    loadComponent('footer-placeholder', '../footer.html');
});
</script>
<script src="../js/layout.js"></script>
<script src="../js/script.js" defer></script>
```

Or update the CSS and image paths to use `../` for parent directory.

## Editing the Header or Footer

To change the header or footer across ALL pages:
1. Edit `header.html` or `footer.html`
2. Save the file
3. Refresh any page - changes appear everywhere!

## Important Notes

- **Local Testing**: Due to browser security (CORS), you need to run a local server to test this. You can't just open the HTML files directly.
  - Use VS Code Live Server extension, or
  - Use Python: `python -m http.server 8000`
  - Use Node.js: `npx serve`

- **Production**: This works perfectly on any web server (Apache, Nginx, etc.)

## Benefits

✅ Edit header/footer once, updates everywhere
✅ Consistent navigation across all pages
✅ Easier maintenance
✅ Smaller individual page files
✅ Easy to add new pages
