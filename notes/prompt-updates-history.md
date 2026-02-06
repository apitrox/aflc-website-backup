

For the `texaslegalaid-website` application website project make the following changes:
- On the `Home` page, in the `About` section, remove the subtopics "The Justice Gap" and "Get In Touch", which is also the content shown in the image provided. 

---

For the `texaslegalaid-website` application website project make the following changes:
- On the `Home` page, remove the `Start Your Request` button. 

---

For the `texaslegalaid-website` application website project make the following changes:
- On the `Home` page, in the About Texas Legal Aid section, for the team photo `../images/TLA_Staff_Photo.png` do not resize or crop the photo, make the placeholder for the photo the same dimension ratio as the photo. 

---

For the `texaslegalaid-website` application website project make the following changes:
- Attached is an image of the Provider Portal Dashboard page.
- Remove the "Register Your Organization" button from the yellow banner.
- The yellow banner that reads: "" is to be on top of every portal page, except the login page
- Remove the dark blue banner in its entirety, on the portal Dashboard and any other provider portal pages it may be on.
- Add the logo (see `TLA_Logo_White.png`) to the left of the page title and organization name on all portal pages.
- Some of the links on the left of the Dashboard page do not work properly. Fix them, test them. These same links should be on every provider portal page. Test/fix them on every provider portal page to be sure they work properly. 

---

For the `texaslegalaid-website` application website project make the following changes:
- In the footer, replace the log with the same logo that is in the hero section on the Home page, see attached images, that is a circle logo with a white interior background.
- Be sure the footer of every page identical to the footer on the Home page, except `../portal/..` pages which do not have a footer area. 

---

/clear
For the `texaslegalaid-website` application website project make the following changes:
- Prevent the Wayback Machine, or `https://web.archive.org/` or `https://archive.org/`, from crawling, searching, reading, archiving, saving or indexing the site (this includes all pages on the site) 

---

/compact

For the `texaslegalaid-website` application website project make the following changes:
-  See attached image(s) for referrence.
- On the `../apply-online.html` page, when the user answers Public Benefits, No, No, then Continue takes the user to the Household Information page asking for household size and household income. Household size is a selectable list from 1 to 20 and household income must be an integer from 0 to 400,000.
- Next to the household size label, put a help icon (like other help icons in our application) with a tooltip that reads "This is the total number of people, adults and children, who live in your household. If one of the people who live in the household pays child support for any child/ren that do not live in the household, also include that child/ren.".
- Next to the household income label, put a help icon (like other help icons in our application) with a tooltip that reads "This is the total amount of income earned on average, from all people who live in your household. This is gross income, before deducting any taxes, withholdings, etc.".
- After the user has entered the household size and household income, calculate their poverty percent using current year (or latest year if current year is not available) HHS poverty numbers. Display the poverty number as a percent, and rounded to the nearest whole percent. Recalculate whenever one of the numbers is changed. The label shall be "Poverty percent: " and the number shall be displayed like 104%. Use poverty guidelines for the 48 Continguous States or assume the person lives in Texas. Use this API endpoint ``https://aspe.hhs.gov/topics/poverty-economic-mobility/poverty-guidelines/api/[YEAR]/[STATE]/[HOUSEHOLD_SIZE]`` If you don't get valid data returned using the current year, then use the previous year, particularly if it is during the first couple months of the current year. Then, divide the user's household income by the amount returned by the api call (which is 100% poverty level), multiply by 100, round to the nearest whole number, and this is our percent poverty level. Display this number and remember it in memory. 

---

/compact

For the `texaslegalaid-website` application website project make the following changes:
-  See any attached image(s) or file(s) for reference.
- create a `../not-eligible-resources.html` page using the attached file as the content for this page, Household Information page, insert another line/link under HHS Poverty Guidelines that reads "TAJF 2025 Financial Income Guidelines" and links to `https://teajf.org/grants/docs/2024/2025%20TAJF%20REV%20Income%20Guideline%20chart%202025.pdf 

---

For the `texaslegalaid-website` application website project make the following changes:
-  See any attached image(s) or file(s) for reference.
- On the `../apply-online.html` page, Household Information page, in the blue informational area, insert another line above "Annual household income: " for "Household size: "
- On the `../apply-online.html` page, Household Information page, insert another entry field below "What is your household income?" with the prompt "What year is this information for?*" and having a dropdown of years from the current year (default) to year 2021, and a tooltip that reads "Select the year for which the information you provided above (size and income) is for, which should be the latest year of information that is available to you."
- On the `../apply-online.html` page, Household Information page, in the blue informational area, insert another line below "Annual household income: " for "Year: " and this being the year the user selected.
- Whenever calling the Poverty level API, the year that is provided is to be the year of the information specified by the user.
- Also update the equivalent blue informational area on the Contact Info page that contains Household Information to match the changes make to the blue informational area on the Household Information page. The blue informational area is to be [the same] on all Household Information pages and is to be the same on all Contact Info pages. 

---

For the `texaslegalaid-website` application website project make the following changes:
-  See any attached image(s) or file(s) for reference.
- On the `../apply-online.html` page, on the Contact Info page just above the buttons navigation buttons, insert a blue informational area, the exact same as the blue informational area that is on the Household Information page just above the buttons on that page. If the user has gone through the Household Information page to get to the Contact Info page then the values of "Annual household income" and "Poverty percent" will be carried forward from the Household Information page to the Contact Info page, if not then the section will still be displayed on the Contact Info page but without values. 

---

For the `texaslegalaid-website` application website project make the following changes:
-  See any attached image(s) or file(s) for reference.
- On the `../apply-online.html` page, if the user selects "Elder Law", then take the user to a new page asking about retirement funds of a deceased person. If the user answers "Yes" they are taken to a new page asking about veteran status, if the user answers "No" they are taken to a new page asking about pension or 401(k).
- If the user selects "Yes" to the veteran status question, they are prompted with a second question with 5 options. Selecting any one of the first 3 options and Continue will take the user to the Household Information page, and from there if their Poverty Level is at or below 200% to the Contact Info page, else if over 200% to the Not Eligible page.  If the user selects "Yes" to the 4th option "...over 18" another question will be displayed on the same page as show in an attached image. If the user selects the 5th option, "Other", and Continue they will be taken to the Not Eligible page.
- If the user answers the "...over 18" response and then answers "Yes" to the dependent question, the user will be taken to the Household Information page and from there be directed to the Contact Info page if their Poverty Level is at or below 200% or to the Not Eligible page if above 200%. If the user answers "No" to the dependent question then on Continue they will be taken to the Not Eligible page.
- If the user answers "Yes" to the question of pension or 401(k), then on Continue they will be taken to the Contact Info page. If the user answers "No" to the question of pension or 401(k), then they will be prompted with another question on the same page asking about physical violence (see attached image). 
- If the user answers "Yes" to the physical violence question then on Continue they will be taken to the Contact Info page. If the user answers "No" to the physical violence question then on Continue they will be take to a new page and asked if they are 60 years of age or older (see attached image). 
- If the user answers "Yes" to the age 60 years or older question then on Continue they will be taken to the Contact Info page.  If the user answers "No" to the age 60 years or older question then on Continue they will be taken to the Not Eligible page.  

---

For the `texaslegalaid-website` application website project make the following changes:
-  Update the document/file named `../general-application-page-flow.md` by generating a complete page flow of the online application that starts with the `../apply-online.html` page. This should be similar to a flow chart document containing every logic condition. Questions or page names can be abbreviated or nicknamed, but must be consistent. This document will be updated whenever the online application is updated. 

---

For the `texaslegalaid-website` application website project make the following changes:
- create a new card on the `/legal-aid-laws.html` page in the Resources section linked to `https://www.texasbar.com/AM/Template.cfm?Section=articles&Template=/CM/HTMLDisplay.cfm&ContentID=56925`. With the titled "The State of Access to Justice in Texas" and description "While much has been accomplished, much remains to be done. by Hankinson & Reasoner"

---

For the `texaslegalaid-website` application website project make the following changes:
-  See any attached image(s) or file(s) for reference.
- On the `../apply-online.html` intake application, for the Housing & Debt, make the following changes:
- If the user selects identity_theft, next take the user to the Household Informaton page and if the user's Poverty level is at or below 125% take them to the Contact Info page, else if above 125% take them to the Not Eligible page. 
- If the user selects Early Termination and then "Yes" to sexual assault question, next take the user to the Household Informaton page and if the user's Poverty level is at or below 187.5% take them to the Contact Info page, else if above 187.5% take them to the Not Eligible page.
- If the user gets to the Housing Age 60+ question, and responds "Yes" that they are 60+, next take the user to the Household Informaton page and if the user's Poverty level is at or below 125% take them to the Contact Info page, else if above 125% take them to the Not Eligible page. 
- If the user gets to the housing_veteran_type question, and responds and responds with either veteran, spouse or dependent_under_18, next take the user to the Household Informaton page and if the user's Poverty level is at or below 200% take them to the Contact Info page, else if above 200% take them to the Not Eligible page. 
- If the user selects that they are a dependent_over_18 and guardianship is "Yes", then then before directing the user to the Contact Info page display the Household Informaton page and if the user's Poverty level is at or below 125% take them to the Contact Info page, else if above 125% take them to the Not Eligible page. 

---

For the `texaslegalaid-website` application website project make the following changes:
- Our primary objective is to replicate the Texas Family Help Link online intake application located on the Texas Law Help at `https://texaslawhelp.org/family-help-link` onto the Texas Legal Aid website at `https://texaslegalaid.org/family-help-link.html`. 
- See any attached image(s) or file(s) for reference with this conversation. 
- Attached are a couple images from our Texas Legal Aid application, from beginning steps of the online intake application. Then there are several images from the online Texas Law Help application asking for children, parties, and other contact information, culminating by telling the user that there are no matching organizations. Build pages in our Texas Legal Aid online application to replicate the pages and page flow in the Texas Law Help online application. 

---
