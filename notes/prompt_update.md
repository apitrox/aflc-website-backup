<!-- - We have a WordPress website that we want to recreate an an HTML website.  However, the wordpress files were accidentally deleted and we cannot access it. We can access the website on the WaybackMachine  at `https://web.archive.org/web/20250427100723/https://americafamilylawcenter.org/`. Again, make it identical to what is on the Wayback Machine except to remove the Wayback Machine code and our website is HTML/CSS/JavaScript.  -->
<!-- - Next rebuild the Services page of our website using https://web.archive.org/web/20250427095429/https://americafamilylawcenter.org/services/ Again, make it identical to what is on the Wayback Machine except to remove the Wayback Machine code and our website is HTML/CSS/JavaScript.  -->
<!-- - Next rebuild the Mission page of our website using `https://web.archive.org/web/20250326040551/https://americafamilylawcenter.org/mission/`. Again, make it identical to what is on the Wayback Machine except to remove the Wayback Machine code and our website is HTML/CSS/JavaScript.  -->
<!-- - Next rebuild the Mission page of our website using `https://web.archive.org/web/20250714053114/https://americafamilylawcenter.org/programs/`. Again, make it identical to what is on the Wayback Machine except to remove the Wayback Machine code and our website is HTML/CSS/JavaScript.  -->


For the `aflc-website-backup` website project make the following changes: 
- Next rebuild the Blog page of our website using `https://web.archive.org/web/20250714063415/https://americafamilylawcenter.org/category/en-post/` as a separate HTML file in this project. Again, make it identical to what is on the Wayback Machine except to remove the Wayback Machine code and our website is HTML/CSS/JavaScript.  
---
General Rules:  
1. Guidelines  
    - Ask me any clarifying questions you may have. Give me multiple-choice options for answers whenever possible. If you do not know something that you need, ask me even if during execution of the implementation plan or updates.  
    - Before making any changes, create an implementation plan and then execute the plan. Do not ask me to review or approve the plan, just proceed with the plan.
    - Use multiple agents whenever practical to do so.  
2. Permissions  
    - `..\.claude\settings.json` contains Claude Code permissions for file operations, load these permissions at the beginning of each conversation for use throughout the conversation.  
3. GitHub  
    - The git repository for this project `aflc-website-backup` is at `https://github.com/apitrox/aflc-website-backup`.  
    - Pull from GitHub before making any code changes.  
    - Commit and Push to GitHub after finishing code changes.  
    - Work directly on the `main` branch.  
4. SEO Implementation  
    - Semantic HTML5 structure  
    - XML sitemap generation, updated as appropriate whenever there is an update to the site  
    - robots.txt configuration  
    - All pages are to be set to NoIndex and to block all bots, especially the Wayback Marchine  
    - Do NOT allow the Wayback Machine to scan, read or crawl any pages  
5. Testing  
    - Test your code changes before completing the task and fix any problems you find.  
6. Wrapup  
    - When complete, promptly display that the process is complete and give me a step-by-step summary of what was done.  
    - When complete, delete any temporary files you created while doing the work.  