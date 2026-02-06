# AFLC (America Family Law Center) Backup Website  
  
- This is `aflc-website-backup`, a website.  
- This website is to be a replica/backup of the AFLC website on the Wayback Machine, the source website.  
- This file provides guidance to Claude Code (claude.ai/code) to work with code in this repository.  
  
---  
  
## Project Changes  
  
Changes to make to `aflc-website-backup` project website:  
<!-- - Rebuild/replicate the FAQs page of our website from `https://web.archive.org/web/20250709154805/https://americafamilylawcenter.org/faqs/`.  -->
<!-- - Rebuild/replicate the Contact page of our website from `https://web.archive.org/web/20250709154805/https://americafamilylawcenter.org/contact/`.  -->
- Rebuild/replicate the Topics page of our website from `https://web.archive.org/web/20250525043431/https://americafamilylawcenter.org/topics/`.  
- Rebuild/replicate the multi-dimensional menu for Topics with each of the 43 different topics listed in alphabetical order, gray background. Included in the project repository is an image of the Topics multi-dimensional menu with only 7 items, named `AFLC-topics-menu-7.png`, another image with 39 menu items in gray named `AFLC-topics-menu-39-gray.png`, and another with 39 menu items in red named `AFLC-topics-menu-39-red.png`.
- Rebuild/replicate the individual Topic pages listed on the main Topics page, here are links to most of them:
   - `https://web.archive.org/web/20250714063341/https://americafamilylawcenter.org/adjudicate-parentage-in-texas-steps-to-adjudicate-parentage/`  
   - `https://web.archive.org/web/20250427092922/https://americafamilylawcenter.org/adoption/`  
   - `https://web.archive.org/web/20170705163854/https://americafamilylawcenter.org/family-topics/child-custody-lawyers/`  
   - `https://web.archive.org/web/20250427091449/https://americafamilylawcenter.org/child-custody-legal-aid/`  
   - `https://web.archive.org/web/20250714051756/https://americafamilylawcenter.org/child-support/`  
   - `https://web.archive.org/web/20250525043020/https://americafamilylawcenter.org/child-support-collection/`  
   - `https://web.archive.org/web/20250427101753/https://americafamilylawcenter.org/child-support-enforcement/`  
   - `https://web.archive.org/web/20170705170721/https://americafamilylawcenter.org/family-topics/child-visitation/`  
   - `https://web.archive.org/web/20250714064103/https://americafamilylawcenter.org/co-parenting/`  
   - `https://web.archive.org/web/20250427093901/https://americafamilylawcenter.org/conservatorship/`  
   - `https://web.archive.org/web/20250427095530/https://americafamilylawcenter.org/custodial-parent/`  
   - `https://web.archive.org/web/20250525044540/https://americafamilylawcenter.org/divorce/`  
   - `https://web.archive.org/web/20250623084941/https://americafamilylawcenter.org/divorce-attorneys/`  
   - `https://web.archive.org/web/20250525041312/https://americafamilylawcenter.org/divorce-lawyers/`  
   - `https://web.archive.org/web/20250714051315/https://americafamilylawcenter.org/dna-paternity-testing/`  
   - `https://web.archive.org/web/20250709154652/https://americafamilylawcenter.org/family-law/`  
   - `https://web.archive.org/web/20250714063654/https://americafamilylawcenter.org/family-law-center/`  
   - `https://web.archive.org/web/20250326035956/https://americafamilylawcenter.org/guardianship/`  
   - `https://web.archive.org/web/20250714063936/https://americafamilylawcenter.org/joint-custody/`  
   - `https://web.archive.org/web/20250425030617/https://americafamilylawcenter.org/law-help/`  
   - `https://web.archive.org/web/20250427103654/https://americafamilylawcenter.org/legal-aid/`  
   - `https://web.archive.org/web/20250714060358/https://americafamilylawcenter.org/limited-scope-representation/`  
   - `https://web.archive.org/web/20250714062603/https://americafamilylawcenter.org/mediation/`  
   - `https://web.archive.org/web/20250326050218/https://americafamilylawcenter.org/obligee/`  
   - `https://web.archive.org/web/20250425024204/https://americafamilylawcenter.org/obligor/`  
   - `https://web.archive.org/web/20250623095458/https://americafamilylawcenter.org/parenting-plans/`  
   - `https://web.archive.org/web/20250623092339/https://americafamilylawcenter.org/parental-rights/`  
   - `https://web.archive.org/web/20250326035607/https://americafamilylawcenter.org/pro-bono-attorney/`  
   - `https://web.archive.org/web/20250326045644/https://americafamilylawcenter.org/pro-bono-lawyers/`  
   - `https://web.archive.org/web/20250714064831/https://americafamilylawcenter.org/property-division/`  
   - `https://web.archive.org/web/20250714054145/https://americafamilylawcenter.org/protective-order/`  
   - `https://web.archive.org/web/20250525054458/https://americafamilylawcenter.org/restraining-order/`  
   - `https://web.archive.org/web/20250714063522/https://americafamilylawcenter.org/shared-parenting/`  
   - `https://web.archive.org/web/20250425025614/https://americafamilylawcenter.org/spousal-support/`  
   - `https://web.archive.org/web/20250714054721/https://americafamilylawcenter.org/visitation/`  
   - `https://web.archive.org/web/20250714061506/https://americafamilylawcenter.org/visitation-assistance/`  
   - `https://web.archive.org/web/20250525052023/https://americafamilylawcenter.org/visitation-enforcement/`  
   - `https://web.archive.org/web/20250326043107/https://americafamilylawcenter.org/visitation-lawyers/`  
   - `https://web.archive.org/web/20250714062530/https://americafamilylawcenter.org/visitation-rights/`  

- When accessing pages from the Wayback Machine at web.archive.org, you may have to pause extensively between each page load because the Wayback Machine seems to throttle or prohibit access with too frequent requests. You also often have to wait a long time for pages and images to load, be patient. Build one page at a time.  
- Build any new web page as a separate HTML file in this project.  
- For each of the individual topic pages, put the HTML file for that page in a folder/director named `topics`. For example, `https://americafamilylawcenter.org/topics/child-support/`.  
- Copy images to the `images` folder, trying not to create duplicate copies of an image but instead reusing the same image when appropriate.  
- If an image is missing or cannot be accessed, leave an empty spot for it and we will get images to fill in later.  
- When replicating a web page from the Wayback Machine, make it identical to what is on the Wayback Machine except to remove the Wayback Machine code and for our website use all HTML/CSS/JavaScript.  
- For links to pages that do not yet exist, leave the links empty and we will create the page and update the link later.  
  
---  
  
## SEO Implementation  
  
- Semantic HTML5 structure  
- XML sitemap generation, updated as appropriate whenever there is an update to the site  
- robots.txt configuration  
- All pages are to be set to NoIndex and to block all bots, especially the Wayback Marchine  
- Do NOT allow the Wayback Machine to scan, read or crawl any pages  
  
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