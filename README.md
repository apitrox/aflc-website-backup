# America Family Law Center - Static Website Recreation

This project contains a recreated static HTML/CSS version of the America Family Law Center website, recovered from the Wayback Machine archive at `https://web.archive.org/web/20250427100723/https://americafamilylawcenter.org/`.

## Project Structure

```
aflc-website-backup/
├── index.html              # Clean homepage (ready to use)
├── css/                    # Stylesheets
│   ├── reset.css
│   ├── normalize.css
│   ├── skeleton.css
│   ├── style.css           # Main theme styles
│   └── flexslider.css      # Slider component styles
├── js/                     # JavaScript files
│   ├── flexslider-min.js   # Slider functionality
│   └── functions.js        # Custom site functions
├── images/                 # Downloaded images
│   ├── logo.png
│   ├── AFLC_white.png
│   ├── AFLC_Logo_BelowPost.png
│   ├── favicon.png
│   ├── slide3.png - slide7.png
│   ├── Civil-Legal-Aid-Diagram.png
│   ├── Justice-Gap.png
│   ├── Legal-Services-Affordability-Scale.png
│   ├── visitation.jpg
│   └── question-mark.jpg
├── download-pages.ps1      # Script to download more pages
├── raw_pages/              # (created by download script)
└── README.md               # This file
```

## Getting Started

### View the Homepage
Simply open `index.html` in a web browser to see the recreated homepage.

### Download Additional Pages
Run the PowerShell script to download more pages from the Wayback Machine:

```powershell
.\download-pages.ps1
```

This will download raw HTML files for:
- Mission
- Services
- Programs
- Topics
- FAQs
- Contact
- Donate
- Blog
- Spanish pages (Inicio, etc.)
- Topic pages (Child Custody, Child Support, Divorce, etc.)

## Cleaning Up Downloaded Pages

Downloaded pages from the Wayback Machine contain extra code that needs to be removed:

### 1. Remove Wayback Machine Toolbar
Delete everything between:
```html
<!-- BEGIN WAYBACK TOOLBAR INSERT -->
...
<!-- END WAYBACK TOOLBAR INSERT -->
```

### 2. Update URLs

Replace these patterns in the HTML:

| Find | Replace With |
|------|--------------|
| `https://web.archive.org/web/20250427100723im_/https://americafamilylawcenter.org/wp-content/uploads/` | `images/` |
| `https://web.archive.org/web/20250427100723cs_/https://americafamilylawcenter.org/wp-content/themes/aflc/` | `css/` |
| `https://web.archive.org/web/20250427100723js_/https://americafamilylawcenter.org/wp-content/themes/aflc/_/js/` | `js/` |
| `https://web.archive.org/web/20250427100723/https://americafamilylawcenter.org/` | `` (empty or page.html) |

### 3. Update Internal Links
Change WordPress-style links to static HTML:
- `/mission/` → `mission.html`
- `/services/` → `services.html`
- `/contact/` → `contact.html`

### 4. Remove WordPress-Specific Code
- Remove `data-src` attributes (lazy loading)
- Remove `lazyload` classes
- Remove WordPress tracking scripts

## Creating New Pages

Use `index.html` as a template. Copy the structure:
1. `<head>` section with CSS links
2. Mobile navigation
3. Header with logo and phone
4. Main navigation
5. Sidebar with contact form
6. Main content area
7. Footer

## Downloading Additional Images

If you find images referenced in pages that aren't downloaded, use this pattern:

```powershell
# For content images
Invoke-WebRequest -Uri "https://web.archive.org/web/20250427100723im_/https://americafamilylawcenter.org/wp-content/uploads/[YEAR]/[MONTH]/[filename]" -OutFile "images/[filename]"

# For theme images
Invoke-WebRequest -Uri "https://web.archive.org/web/20250427100723im_/https://americafamilylawcenter.org/wp-content/themes/aflc/_/img/[filename]" -OutFile "images/[filename]"
```

## Important Notes

1. **Form Functionality**: The contact form in `index.html` is currently non-functional. You'll need to:
   - Set up a backend server to handle form submissions, OR
   - Use a service like Formspree, Netlify Forms, or Google Forms

2. **Phone Number Switcher**: The location dropdown changes the displayed phone number via JavaScript.

3. **Google Translate**: The original site used GTranslate for translations. You can:
   - Manually create Spanish versions of pages
   - Integrate Google Translate widget
   - Use a translation service

4. **reCAPTCHA**: The original contact form used reCAPTCHA. If re-enabling, get new API keys from Google.

## Archive Snapshot Date
All content was retrieved from the Wayback Machine snapshot dated: **April 27, 2025**

## License
This content belongs to America Family Law Center. This recreation is for backup/recovery purposes only.
