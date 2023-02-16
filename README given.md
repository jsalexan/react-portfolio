# 20 React: React Portfolio

## Your Task

Being a web developer means being part of a community. You’ll need a place not only to share your projects while you're applying for jobs or working as a freelancer but also to share your work with other developers and collaborate on projects.

Your task is to create a portfolio using your new React skills, which will help set you apart from other developers whose portfolios don’t use the latest technologies. 

You’ll deploy this application to GitHub Pages. Follow the instructions in the Git Guide or consult the [Create React App Docs on GitHub Pages](https://create-react-app.dev/docs/deployment/#github-pages) to create a build that you can deploy.

**Important**: Be sure to push your codebase to the default branch in GitHub -- NOT your built and deployed code. Ensure this happens by using the `gh-pages` branch to host the deployed application's build.

## User Story

```md
AS AN employer looking for candidates with experience building single-page applications
I WANT to view a potential employee's deployed React portfolio of work samples
SO THAT I can assess whether they're a good candidate for an open position
```

## Acceptance Criteria

```md
GIVEN a single-page application portfolio for a web developer
WHEN I load the portfolio
THEN I am presented with a page containing a header, a section for content, and a footer
WHEN I view the header
THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
WHEN I view the navigation titles
THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
WHEN I click on a navigation title
THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted
WHEN I load the portfolio the first time
THEN the About Me title and section are selected by default
WHEN I am presented with the About Me section
THEN I see a recent photo or avatar of the developer and a short bio about them
WHEN I am presented with the Portfolio section
THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repositories
WHEN I am presented with the Contact section
THEN I see a contact form with fields for a name, an email address, and a message
WHEN I move my cursor out of one of the form fields without entering text
THEN I receive a notification that this field is required
WHEN I enter text into the email address field
THEN I receive a notification if I have entered an invalid email address
WHEN I am presented with the Resume section
THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
WHEN I view the footer
THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter)
```

## Mock-Up

The following animation shows the web application's appearance and functionality:

![User clicks through About Me, Portfolio, Resume, and Contact sections on the webpage and enters information on Contact page.](./Assets/20-react-homework-demo-01.gif)

## Getting Started

You’ll use `create-react-app` to build your portfolio, which will include the following:

* A single `Header` component that appears on multiple pages

* A single `Navigation` component within the header that will be used to conditionally render the different sections of your portfolio

* A single `Project` component that will be used multiple times in the Portfolio section

* A single `Footer` component that appears on multiple pages

**Note**: Because this application doesn’t include a back end or connect to an API, the contact form doesn't need to save this information right now. You'll add back-end functionality in the next few weeks. In the meantime, consider including your email address and phone number on the Contact page.

### Projects

For each project that is featured in your portfolio, include the following:

* An image of the deployed application (either a short animated GIF or screenshot)

* The title of the project

* A link to the deployed application

* A link to the corresponding GitHub repository

### Design

As with the previous portfolio Challenge, remember that "good" design is subjective; however, your site should look polished. Here are a few guidelines on what that means:

* Use mobile-first design.

* Choose a color palette that distinguishes your site from the default Bootstrap theme and unstyled HTML sites. Refer to resources like [Coolors](https://coolors.co/) or another color scheme generator to help you create something that will stand out.

* Ensure that the font size is large enough to read and that the colors don't cause eye strain.

* Consider using animations and React component libraries. Note that this will not affect your grade, but it might impact how potential employers gauge your knowledge.

## Grading Requirements

> **Note**: If a Challenge assignment submission is marked as “0”, it is considered incomplete and will not count towards your graduation requirements. Examples of incomplete submissions include the following:
>
> * A repository that has no code
>
> * A repository that includes a unique name but nothing else
>
> * A repository that includes only a README file but nothing else
>
> * A repository that only includes starter code

This Challenge is graded based on the following criteria:

### Technical Acceptance Criteria: 40%

* Satisfies all of the preceding acceptance criteria plus the following:

    * Application must use React to render content.

    * Application has a single `Header` component that appears on multiple pages, with a `Navigation` component within it that’s used to conditionally render About Me, Portfolio, Contact, and Resume sections.

    * Application has a single `Project` component that’s used multiple times in the Portfolio section.

    * Application has a single `Footer` component that appears on multiple pages.

    * Application must be deployed to GitHub Pages.

### Deployment: 32%

* Application deployed at live URL.

* Application loads with no errors.

* Application GitHub URL submitted.

* GitHub repository contains application code.

### Application Quality: 15%

* User experience is intuitive and easy to navigate.

* User interface style is clean and polished.

* Application uses a color scheme other than the default Bootstrap color palette.

### Repository Quality: 13%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains high-quality README file with description, screenshot, and link to deployed application.

## Review

You are required to submit BOTH of the following for review:

* The URL of the functional, deployed application.

* The URL of the GitHub repository, with a unique name and a README that describes the project.

- - -
© 2022 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.



# Deploy React App to GitHub Pages

At this point in the course, you have spent some time immersed in React and have even created some React apps of your own. React can seem confusing at first, but the good news is that `create-react-app` gives you the tools to build applications from scratch. This guide will show you how to deploy your React app to GitHub Pages while preserving the file structure of your source files. 

Here are a few details to prepare you for this activity:

* The script you'll use is outlined in the `package.json` file for the React app. You will see it listed under the `scripts` section of the `package.json` for the `build` key-value pair.

* This command will output to a `/build` directory. This includes a `/build/static` directory that will contain all the required JavaScript and CSS files.

* Every file in this folder contains a unique hash of the file contents. The hash tells the browser how to download a fresh copy of the application every time you build it.

Now that we understand a little bit about what this command will do, let's put it into action and get the React app ready for GitHub Pages!

# Prepare the Repo

## Add Homepage to package.json

First we need to open the `package.json` file for the client and add an entry called `homepage`. The value of `homepage` should have `{username}` as your GitHub username, and `{repo-name}` as the name of the GitHub repository you created: 

```
https://{username}.github.io/{repo-name}
```

Your updated `package.json` should look something like this:

```text
{
  "name": "my-app",
  "version": "0.1.0",
  "private": true,
  "homepage": "https://myusername.github.io/my-app",
```

## Install gh-pages and Add Deploy Scripts

To publish your app, you need to install the `gh-pages` npm package. Additionally, you'll need to add a few more scripts to `package.json`. Start by simply adding the `gh-pages` dependency:

```sh
npm i gh-pages
```
**Note:** You will see another package manager called `yarn` suggested by `create-react-app`. `yarn` is very similar to `npm`, but for the sake of consistency we will stick with `npm`.

Now lets add the `predeploy` and `deploy` scripts to `package.json`. 

```text
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
```

# Deploy the Site

Now is the time to deploy the React app to GitHub Pages. To do this, run the following command:

```sh
npm run deploy
```

# Check Project Settings

Go to the GitHub project settings by clicking the link shown in the following image:

![In GitHub, the Settings tab is underlined in red.](./Images/01-repo-settings.png)

Check that your source branch is `gh-pages`, as shown in the following image:

![In the Settings tab of GitHub Pages, gh-pages is set as the Source.](./Images/02-ready.png)

**Note:** Keep in mind that your page may take a minute or two to deploy. At first, the notification will appear in a blue color while being published.

Finally, let's refresh the page to make sure that the page has been published. This notification will appear in green, as shown in the following image:

![In GitHub Pages, a green notification states, "Your site is published", followed by a link to the site.](./Images/04-published.png)

Click on the URL to check that everything looks good.

## Reflection

You have successfully deployed your React application to GitHub Pages with just a few simple steps. While doing so, you learned about how the React deploy scripts work and how to prepare your repos for a `gh-page` deployment.

---
© 2022 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.