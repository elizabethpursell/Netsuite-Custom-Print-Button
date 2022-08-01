# Netsuite-Custom-Print-Button
## Project Overview
### Purpose
This custom print button uses NetSuite's Advanced PDF/HTML Template feature to generate a shipping placard PDF based on data fields. The placard is used to keep track of the recipients of pallets and establishes a reliable organization strategy for production.
### Features
- Custom Print Button
- PDF Template
### Prerequisites
- SuiteScript/JavaScript
  - Modules: N/url, N/currentRecord, N/record, N/render
  - SuiteScript Types: Client Script, User Event Script, Suitelet
  - API Version: 2.x
  - JSDoc Tags
- Advanced PDF/HTML Templates
  - Languages: HTML, FreeMarker, XML, CSS
## Project Setup
### Uploading to NetSuite
- **Adding a SuiteScript to the File Cabinet:** navigate Customization>Scripting>Scripts>New; next to the "Script File" dropdown, press the plus sign to upload a new SuiteScript file; select the NetSuite folder that you want to store the SuiteScript files in; under "Select File," press the "Choose File" button; select the SuiteScript file that you want to upload and press open; save and press the blue "Create Script Record" button; name the file, input a relevant ID, and save
## File Descriptions
### placard_button_es.js
- **Programming Languages:** JavaScript, SuiteScript 2.0
- **SuiteScript Type:** User Event Script, beforeLoad
- **Description:** creates the custom print placard button for all Item Fulfillment records
- **Catering the Code to Your NetSuite:**
    - Applying to Different Record Type: change the JSDoc tag from "itemfulfillment" to the relevant record type
    - Changing the Button Label: find the function "context.form.addButton" and change the parameter "label" to the new label, keeping the new name in quotation marks
    - Calling a Different Client Script: find the function "context.form.clientScriptModulePath" and specify the path where your client script file is stored
- **Deploying SuiteScript:** go to the SuiteScript file; press the "Deploy Script" button; enter a name and relevant ID; change the status to "Testing"; under "Execute As Role," choose "Administrator" so that the code will get full access to NetSuite and will not create any permissions errors; under "Applies To," select the record type that you want the button to appear on (I used Item Fulfillment); once the code has been tested, change the status to "Released" and select who can use the button under the "Audience" subtab (selecting "All Roles" will make all users able to use it)
### placard_button_click_cs.js
- **Programming Languages:** JavaScript, SuiteScript 2.0
- **SuiteScript Type:** Client Script, pageInit and onButtonClick
- **Description:** calls the suitelet to render and generate the PDF when the button is pressed
- **Catering the Code to Your NetSuite:**
    - Applying to Different Record Type: change the JSDoc tag from "itemfulfillment" to the relevant record type
    - Calling a Different Suitelet: find the line "var suiteletURL = url.resolveScript" and change the scriptId and deploymentId to the information associated with the desired suitelet
- **Deploying SuiteScript:** go to the SuiteScript file; press the "Deploy Script" button; enter a name and relevant ID; change the status to "Testing"; under "Applies To," select the record type that you want the button to appear on (I used Item Fulfillment); once the code has been tested, change the status to "Released" and select who can use the button under the "Audience" subtab (selecting "All Roles" will make all users able to use it)
### placard_button_suitelet.js
- **Programming Languages:** JavaScript, SuiteScript 2.0
- **SuiteScript Type:** Suitelet, onRequest
- **Description:** generates and renders PDF using current record data fields
- **Catering the Code to Your NetSuite:**
    - Applying to Different Record Type: change the JSDoc tag from "itemfulfillment" to the relevant record type; change the saved searches to search under the correct record type; whenever there is a record load instance (record.load), change the record type to the correct one
    - Changing the Saved Search IDs: whenever there is a search load instance (search.load), change the parameter "id" to the correct search ID
    - Calling a Different Suitelet: find the function "redirect.toSuitelet" and change the scriptId and deploymentId to the information associated with the desired suitelet
- **Deploying SuiteScript:** go to the SuiteScript file; press the "Deploy Script" button; enter a name and relevant ID; change the status to "Testing"; under "Execute As Role," choose "Administrator" so that the code will get full access to NetSuite and will not create any permissions errors; once the code has been tested, change the status to "Released" and select who can use the button under the "Audience" subtab (selecting "All Roles" will make all users able to use it)
## Creating the PDF Template
- **Opening New Template:** open Advanced PDF/HTML Templates by navigating Customization>Forms>Advanced PDF/HTML Templates; find a template that can be the foundation to the new template (I used a Packing Slip type) and press "Customize"
- **Customizing With HTML:** enable "Source Code" in the top right of the new template; use this HTML code as a base; use FreeMarker to take data from records that were added to the template; use the name that is specified in the "templateName" parameter when the record was added to the template in spec_suitelet_render (ex. renderer.addSearchResults or renderer.addRecord); if data is getting pulled directly from record use the format {templateName.fieldName}; if data is getting pulled from sublist use the format {templateName.sublistName.fieldName}; press save when edits are completed
- **Customizing With Advanced PDF/HTML Template Features:** disable "Source Code" in the top right of the new template; use the textbox, table, fields, and other tools to modify the template
## References
### Images
- **Example PDF:** [shippingplacard_example.pdf](https://github.com/elizabethpursell/Netsuite-Custom-Print-Button/files/9203264/shippingplacard_example.pdf)
### Helpful Links
- **SuiteScript 2.0:** https://docs.oracle.com/cd/E60665_01/netsuitecs_gs/NSAPI/NSAPI.pdf
- **SuiteScript Modules:** https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/set_1502135122.html
- **HTML:** https://www.w3schools.com/Tags/default.asp
- **XML:** https://bfo.com/products/report/docs/userguide.pdf
- **FreeMarker:** https://freemarker.apache.org/docs/index.html
- **CSS:** https://www.w3schools.com/cssref/
## Extra Tips
- Choose to execute as the administrator role when deploying the SuiteScripts to make sure everyone has full permissions
- Go back to the script deployments to check that their status is "Released" and that their audience includes all roles
