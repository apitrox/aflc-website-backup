# AFLC Website Download Script
# This script downloads pages from the Wayback Machine archive

$BaseWaybackUrl = "https://web.archive.org/web/20250427100723"
$BaseArchiveUrl = "$BaseWaybackUrl/https://americafamilylawcenter.org"

# Function to download a page
function Download-Page {
    param (
        [string]$PagePath,
        [string]$OutputFile
    )
    
    $Url = "$BaseArchiveUrl/$PagePath"
    Write-Host "Downloading: $Url"
    
    try {
        Invoke-WebRequest -Uri $Url -OutFile $OutputFile -UseBasicParsing
        Write-Host "  Saved to: $OutputFile" -ForegroundColor Green
    }
    catch {
        Write-Host "  ERROR: Failed to download $PagePath" -ForegroundColor Red
        Write-Host "  $($_.Exception.Message)" -ForegroundColor Red
    }
}

# Function to download an image
function Download-Image {
    param (
        [string]$ImagePath,
        [string]$OutputFile
    )
    
    $Url = "${BaseWaybackUrl}im_/https://americafamilylawcenter.org/$ImagePath"
    Write-Host "Downloading image: $ImagePath"
    
    try {
        Invoke-WebRequest -Uri $Url -OutFile $OutputFile
        Write-Host "  Saved to: $OutputFile" -ForegroundColor Green
    }
    catch {
        Write-Host "  ERROR: Failed to download image" -ForegroundColor Red
    }
}

# Main pages to download
$Pages = @(
    @{ Path = "mission/"; Output = "raw_pages/mission.html" },
    @{ Path = "services/"; Output = "raw_pages/services.html" },
    @{ Path = "programs/"; Output = "raw_pages/programs.html" },
    @{ Path = "topics/"; Output = "raw_pages/topics.html" },
    @{ Path = "faqs/"; Output = "raw_pages/faqs.html" },
    @{ Path = "contact/"; Output = "raw_pages/contact.html" },
    @{ Path = "donate/"; Output = "raw_pages/donate.html" },
    @{ Path = "blog/"; Output = "raw_pages/blog.html" },
    @{ Path = "inicio/"; Output = "raw_pages/inicio.html" },
    @{ Path = "child-custody/"; Output = "raw_pages/child-custody.html" },
    @{ Path = "child-support/"; Output = "raw_pages/child-support.html" },
    @{ Path = "divorce/"; Output = "raw_pages/divorce.html" },
    @{ Path = "visitation/"; Output = "raw_pages/visitation.html" },
    @{ Path = "family-law/"; Output = "raw_pages/family-law.html" },
    @{ Path = "affordable-family-law/"; Output = "raw_pages/affordable-family-law.html" },
    @{ Path = "adjudicate-parentage-in-texas-steps-to-adjudicate-parentage/"; Output = "raw_pages/adjudicate-parentage.html" }
)

# Create output directory
New-Item -ItemType Directory -Force -Path "raw_pages" | Out-Null

Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "AFLC Website Archive Downloader" -ForegroundColor Cyan
Write-Host "========================================`n" -ForegroundColor Cyan

# Download pages
Write-Host "Downloading pages..." -ForegroundColor Yellow
foreach ($page in $Pages) {
    Download-Page -PagePath $page.Path -OutputFile $page.Output
    Start-Sleep -Milliseconds 500  # Be polite to the archive
}

Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "Download complete!" -ForegroundColor Green
Write-Host "========================================`n" -ForegroundColor Cyan

Write-Host @"

NEXT STEPS:
-----------
1. The raw HTML files have been saved to the 'raw_pages' folder
2. Each file contains Wayback Machine wrapper code that needs to be removed
3. You need to:
   - Remove the Wayback Machine toolbar code (everything between BEGIN WAYBACK TOOLBAR and END WAYBACK TOOLBAR)
   - Update image URLs from web.archive.org paths to local 'images/' paths
   - Update CSS/JS links to local paths
   - Update internal links to .html files

TIPS FOR CLEANING UP PAGES:
---------------------------
1. Remove lines containing 'archive.org' or '__wm.'
2. Replace 'https://web.archive.org/web/20250427100723im_/https://americafamilylawcenter.org/' with ''
3. Replace 'https://web.archive.org/web/20250427100723/https://americafamilylawcenter.org/' with ''
4. Update href=".../" to href="....html"

"@
