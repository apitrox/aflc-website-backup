
# AFLC (America Family Law Center) Backup Website  
  
- This is `aflc-website-backup`, a website.  
- This file provides guidance to Claude Code (claude.ai/code) to work with code in this repository.  
  
---  
  
## Project Changes  
  
Changes to make to `aflc-website-backup` project website:  
<!-- - Write content for the `../topics/affordable-family-law.html` page, replacing "Write content for this page". Write only a couple paragraphs. Write in a similar quantity and style as on `../topics/child-custody-legal-aid.html` and `../topics/child-visitation.html`. Do not give legal advice. Do not make predictions. To not make promises. Do not write something unless you know it is accurate. Just write about why people often cannot afford an attorney for family law matters. -->
<!-- - Review and update each of the pages in the `../topics/..` folder by checking, and updating if necessary, the spacing before and after text paragraphs and also before and after each images, to be 18 pixels of white space (basically a blank line). Do not put extra space between bulleted, numbered or starred lists, put them at 1.15 line spacing.  -->
<!-- - Review each of the pages in the `../topics/..` folder by checking the Content Area of each page for image placeholders/links where the image is missing, and for each of these delete the image placeholder. -->
<!-- - Review and update the `../services.html` page to update the spacing before and after text paragraphs and also before and after each images, to be 18 pixels of white space (basically a blank line). Do not put extra space between bulleted, numbered or starred lists, put them at 1.15 line spacing. -->
<!-- - Rollback the last change you made to the footer area, all other changes remain. -->
  
---  
  
## No Bot Access  
  
- Do not allow bots to index or crawl any pages on this website, especially the Wayback Machine, and be sure to enforce this regardless of which domain name may be used to access the site (other domain names may be set up to point to this site). If the Wayback Machine attempts to crawl or access any page on this site block it or serve up a blank page.  
- Whenever new pages are added to the site or existing pages modified, be sure this restriction is applied.  
  
---  
  
## SEO Implementation  
  
- Semantic HTML5 structure  
- XML sitemap generation, updated as appropriate whenever there is an update to the site  
- robots.txt configuration  
- All pages are to be set to NoIndex and to block all bots, especially the Wayback Marchine  
- Do NOT allow the Wayback Machine to scan, read or crawl any pages  
  
---  
  
## Language Tottle Area  
  
The Language Toggle Area of a page to be an area between the Content Area and the Call To Action Section. The Language Tottle Area is highlighted in Yellow on the image `Language-Toggle-Area.png`. The Language Toggle Area contains the text "English  |  Español" with 40px above (below the Content Area text) and 10px below (above the horizontal rule line). Every page in the project has a Language Toggle Area. The Language Toggle Area is used to toggle between the English language version and Spanish language version of the same page. When on the English language version the word "Español" will be a hyperlink to the Spanish language version of the page and the word "English" will be plain text, when on the Spanish language version the word "English" will be a hyperlink to the English language version of the page and the word "Español" will be plain text. The URL of the Spanish language version of each page will be exactly the same as the English language version except that the Spanish language version will end with "-es". For example, for an English language page with URL "..my-page.html", the Spanish lanugage version of that page will be "..my-page-es.html".  
  
---  
  
## Spanish Language Pages  
  
For each and every English language page in the site there is a corresponding Spanish language page named `[pageurl]-es.html`. Whenever the Content Area of the English language page has a change you must also update the corresponding Spanish language page to keep it in sync. External hyperlinks are the same on both the English and Spanish language pages. Internal hyperlinks (links to pages on this site) will vary as internal hyperlinks on a Spanish language page will link to the internal Spanish language page and internal hyperlinks on an Enlish language page will link to the internal English language page - a user will use the Language Toggle to switch from English to Spanish. The Language Toggle on the Spanish language page will hyperlink to the corresponding English language page. The Language Toggle on the English language page will hyperlink to the corresponding Spanish language page.  
  
---  
  
## Call To Action Section  
  
The Call To Action Section of a page is located just above the Footer Area. The Call To Action Section is highlighted in Yellow on the image `Call-To-Action-Section.png`. The images and text in the Call To Action Section is static, with the exception that the phone number is dynamic and is based on the selected location (each location has a different phone number). The top of the Call To Action Section is a horizontal rule. At the bottom of the Call To Action Section is the start of the Footer Area. Every Call To Action Section has the same spacing, font style, image, etc. Every page in the project has a Call To Action Section.  
  
---  
  
## Permissions  
  
- `..\.claude\settings.json` - contains Claude Code permissions for file operations, load these permissions at the beginning of each conversation for use throughout the conversation.  
  
---  
  
## Testing  
  
- Test your code changes before completing the task and fix any problems you find.  
  
---  
  
## GitHub  
  
- The git repository for this project `aflc-website-backup` is at `https://github.com/apitrox/aflc-website-backup`.  
- Pull from GitHub before making any code changes.  
- Commit and Push to GitHub after finishing code changes.  
- Work directly on the `main` branch.  
- You have all permissions needed to Pull, Commit and Push without prompting.  
  
---  
  
## Guidelines  
  
- Ask me any clarifying questions you may have. Give me multiple-choice options for answers whenever possible. If you do not know something that you need, ask me even if during execution of the implementation plan or updates.  
- Before making any changes, create an implementation plan and then execute the plan. Do not ask me to review or approve the plan, just proceed with the plan.  
- Use multiple agents whenever practical to do so.  
- Use best coding practices to create efficient, maintainable, organized, consistent programming code.  
- Each web page is to be created as a separate .html file in this project.  
  
---  
  
## Wrapup  
  
When complete:  
- promptly display that the process is complete and give me a step-by-step summary of what was done  
- delete any temporary files you created while doing the work  
