
# AFLC (America Family Law Center) Backup Website  
  
- This is `aflc-website-backup`, a website.  
- This website is to be a replica/backup of the AFLC website on the Wayback Machine, the source website.  
- This file provides guidance to Claude Code (claude.ai/code) to work with code in this repository.  
  
---  
  
## Project Changes  
  
Changes to make to `aflc-website-backup` project website:  
- We are defining the Content Area of a page to be the content below the Family Law Articles section and above the Call To Action section, which is immediately above the footer area and is shown in the image `Call-To-Action-Section.png`.  
- When replicating page content or the Content Area of a page, we are replicating only the Content area of the page. Entirely replace the Content Area of the target page with the Content Area of the source page, but do not change anything else on the target page.  
- When replicating page content or the Content Area of a page, the page content shall never use links to a Wayback Machine page. The first portion of any such links that starts with `https://web.archive.org/web/..`, shall be removed and therefore using the second portion of the link.  
- When replicating page content or the Content Area of a page, the images are probably already in our project files, use the image if it is already in our project files and do not create a duplicate image file.  
- When replicating page content, the source content may have a pipe "|" character on its own paragraph. We do not want to replicate this pipe character paragraph. It was used to create additional spacing between paragraphs. Instead, add the amount of space the pipe character paragraph creates but without the pipe character paragraph. Regardless, be sure there is the equivalent of at least one blank line between each content/text paragraph, you may use the Home page at `../index.html` as an example.  
- When replicating page content or the Content Area of a page, replicate images and styling and be sure the image sizes, placement, text wrapping, and text styling is replicated to match the source; however, it is recommended that you fix obvious display or formatting type errors. Notwithstanding, on the target page always use site standards such as H1, H2, H3, etc. without editing those standards.  
- When using `..web.archive.org..` as a source, it can take a long time for a page to load, you must be patient and wait for the page to finish loading before reading/copying content.  
<!-- - Replicate only the Content Area from the page `https://web.archive.org/web/20250813122902/https://americafamilylawcenter.org/child-custody/` to the Content Area on the `../posts/child-custody.html` page in our project files/repository.   -->
<!-- - Replicate only the Content Area from the page `https://web.archive.org/web/20250623101121/https://americafamilylawcenter.org/divorce-checklist-for-parent/` to the Content Area on the `../posts/divorce-checklist-for-parent.html` page in our project files/repository.   -->
- Replicate the Content Area from each of these source pages to the Content Area of the corresponding target page, which is located in our project files/repository. 
  - from source page `https://web.archive.org/web/20250709154822/https://americafamilylawcenter.org/unemployed-and-cant-pay-child-support/`, to target page `../posts/unemployed-and-cant-pay-child-support.html`
  - from source page `https://web.archive.org/web/20250714061430/https://americafamilylawcenter.org/shelter-in-place-due-to-covid-19-visitation/`, to target page `../posts/shelter-in-place-due-to-covid-19-visitation.html`
  - from source page `https://web.archive.org/web/20250326050035/https://americafamilylawcenter.org/visitation-schedules-and-school-cancellation-due-to-covid-19/`, to target page `../posts/visitation-schedules-and-school-cancellation-due-to-covid-19.html`
  <!-- - from source page `https://web.archive.org/web/20250714063306/https://americafamilylawcenter.org/third-round-stimulus-checks-and-child-support/`, to target page `../posts/third-round-stimulus-checks-and-child-support.html` -->
  <!-- - from source page `https://web.archive.org/web/20250714053503/https://americafamilylawcenter.org/what-factors-effect-your-stimulus-check-back-child-support/`, to target page `../posts/what-factors-effect-your-stimulus-check-back-child-support.html` -->
<!-- - Update paragraph spacing on the `../posts/astroworld-festival-ends-in-injuries.html` page to have the equivalent of at least one blank line between each content/text paragraph, you may use the Home page at `../index.html` as an example.   -->
<!-- - For each post page `../posts/..` remove the posted date from the page. The Posted date should be displayed on the listing page at `../blog.html`, but not on individual post pages.   -->
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


<!-- `https://web.archive.org/web/20250709154749/https://americafamilylawcenter.org/` -->
<!-- `https://web.archive.org/web/20250714053349/https://americafamilylawcenter.org/mission/` -->
<!-- `https://web.archive.org/web/20250427095429/https://americafamilylawcenter.org/services/` -->
<!-- `https://web.archive.org/web/20250709154805/https://americafamilylawcenter.org/faqs/` -->
<!-- `https://web.archive.org/web/20250709154805/https://americafamilylawcenter.org/contact/` -->
<!-- - Rebuild/replicate the Topics page of our website from `https://web.archive.org/web/20250525043431/https://americafamilylawcenter.org/topics/`.  -->
<!-- - Rebuild/replicate the multi-dimensional menu for Topics with each of the 43 different topics listed in alphabetical order, gray background. Included in the project repository is an image of the Topics multi-dimensional menu with only 7 items, named `AFLC-topics-menu-7.png`, another image with 39 menu items in gray named `AFLC-topics-menu-39-gray.png`, and another with 39 menu items in red named `AFLC-topics-menu-39-red.png`.  -->

<!--
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
 -->

<!-- 
   - `https://web.archive.org/web/20250427104842/https://americafamilylawcenter.org/school-records-denied-access/`  
   - `https://web.archive.org/web/20250714054450/https://americafamilylawcenter.org/astroworld-festival-ends-in-injuries/`  
   - `https://web.archive.org/web/20250813122902/https://americafamilylawcenter.org/child-custody/`  
   - `https://web.archive.org/web/20250623101121/https://americafamilylawcenter.org/divorce-checklist-for-parent/`  
   - `https://web.archive.org/web/20250714063306/https://americafamilylawcenter.org/third-round-stimulus-checks-and-child-support/`  
   - `https://web.archive.org/web/20250714053503/https://americafamilylawcenter.org/what-factors-effect-your-stimulus-check-back-child-support/`  
   - `https://web.archive.org/web/20250709154822/https://americafamilylawcenter.org/unemployed-and-cant-pay-child-support/`  
   - `https://web.archive.org/web/20250714061430/https://americafamilylawcenter.org/shelter-in-place-due-to-covid-19-visitation/`  
   - `https://web.archive.org/web/20250326050035/https://americafamilylawcenter.org/visitation-schedules-and-school-cancellation-due-to-covid-19/`  
   - `https://web.archive.org/web/20250709154815/https://americafamilylawcenter.org/what-can-be-done-about-parental-alienation/`  
   - `https://web.archive.org/web/20250427102548/https://americafamilylawcenter.org/help-need-protective-order-family-domestic-violence/`  
   - `https://web.archive.org/web/20250326041631/https://americafamilylawcenter.org/family-law-pro-bono-lawyer/`  
   - `https://web.archive.org/web/20250326044336/https://americafamilylawcenter.org/denied-visitation-rights/`  
   - `https://web.archive.org/web/20250714054527/https://americafamilylawcenter.org/filing-for-divorce-in-texas-legal-documents-needed-for-divorce/`  
   - `https://web.archive.org/web/20250326033406/https://americafamilylawcenter.org/when-can-you-deny-visitation-to-the-non-custodial-parent-in-texas/`  
   - `https://web.archive.org/web/20250427093027/https://americafamilylawcenter.org/child-visitation-when-a-parent-has-been-displaced-from-his-or-her-home/`  
   - `https://web.archive.org/web/20250427110710/https://americafamilylawcenter.org/child-visitation-after-the-hurricane/`  
   - `https://web.archive.org/web/20250714054115/https://americafamilylawcenter.org/parenting-plan-in-texas-custody/`  
   - `https://web.archive.org/web/20250525044033/https://americafamilylawcenter.org/determining-child-custody-texas/`  
   - `https://web.archive.org/web/20250525035801/https://americafamilylawcenter.org/child-support-modification-in-texas/`  
   - `https://web.archive.org/web/20250207052317/https://americafamilylawcenter.org/how-to-establish-visitation-in-texas-with-your-children/`  
   - `https://web.archive.org/web/20250427105113/https://americafamilylawcenter.org/abbbott-signs-radical-welfare-law-in-texas/`  
   - `https://web.archive.org/web/20250326044529/https://americafamilylawcenter.org/understanding-fathers-rights-in-texas/`  
   - `https://web.archive.org/web/20250326043142/https://americafamilylawcenter.org/texas-child-protective-services-investigating/`  
   - `https://web.archive.org/web/20250326045752/https://americafamilylawcenter.org/becoming-a-guardian-texas-adult-children-parents/`  
   - `https://web.archive.org/web/20250326044256/https://americafamilylawcenter.org/deported-immigration-children-documents/`  
   - `https://web.archive.org/web/20250427093729/https://americafamilylawcenter.org/parental-rights-texas/`  
   - `https://web.archive.org/web/20250525043925/https://americafamilylawcenter.org/visitation-rights-texas-possession-access/`  
   - `https://web.archive.org/web/20250326035315/https://americafamilylawcenter.org/no-fault-divorce-in-texas-what-you-need-to-know/`  
   - `https://web.archive.org/web/20250525044621/https://americafamilylawcenter.org/child-custody-out-of-state-moves-possession-and-access-texas/`  
   - `https://web.archive.org/web/20250427110449/https://americafamilylawcenter.org/teaching-children-responsibility-building-values/`  
   - `https://web.archive.org/web/20250326050110/https://americafamilylawcenter.org/texas-adjudicate-parentage-action/`  
 -->

<!--
- You will be updating the blog listing page at `../blog.html`, and the individual blog post at `../posts/child-custody.html`.
- Update the blog listing page by removing the 2 highlighted paragraphs shown in the image `child-custody-blog-post-listing.png` in our project and apply the image `images/blog/child-custody-post.jpg` making it the same size as other images on the page and updating the Read More link and posted date to be formatted the same as other post listings.  
- Then update the `../posts/child-custody.html` page with the same image in the same manner.  
 -->