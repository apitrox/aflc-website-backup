# AFLC (America Family Law Center) Backup Website  
  
- This is `aflc-website-backup`, a website.  
- This website is to be a replica/backup of the AFLC website on the Wayback Machine, the source website.  
- This file provides guidance to Claude Code (claude.ai/code) to work with code in this repository.  
  
---  
  
## Project Changes  
  
Changes to make to `aflc-website-backup` project website:  
- Rebuild/replicate the FAQs page of our website from `https://web.archive.org/web/20250709154805/https://americafamilylawcenter.org/faqs/`.  
- Build any new web page as a separate HTML file in this project.  
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