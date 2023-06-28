# Forkfacts Version 2 Introduction

Version 2 of this project is key to improving the previous website so that consumers can have a better information-gathering experience. In order to create this website, there are other different github projects
that are responsible for their own thing and generate artifacts used by this project.

# Getting Started

## Pre-requisites

### NPM is Required

- You must have `npm` installed on your machine. Run `sudo npm install -g npm` on Linux or Mac to install `npm`. To learn more,
  follow [`npm documentation`](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

### Version of NodeJS Required

- You must have `Nodejs 18.0.0 above` installed on your machine. To install the latest version of Nodejs follow this link [`nodejs documentation`](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions).

## Steps to run the project

### Clone project

```shell
git clone https://github.com/forkfacts/forkfacts-v2
```

**Note - Do you use multiple Github SSH Keys locally?**  
Before you run the `git clone` command, please do not forget the following steps:

- Update the github domain in your `git clone command`. For example, based on your `~/.ssh/config`, your clone command may be  
  `git clone https://github.com/forkfacts/forkfacts-v2`.
- Ensure that your SSH keys are available to your SSH Agent running locally.
  - Run `ssh-add -l` to see if keys are listed in the output. If not, follow the next step.
  - Run `ssh-add ~/.ssh/<path_of_your_ssh_private_key>` to add the keys for your SSH Agent.
  - Run `ssh-add -l` to see ensure your SSH keys are available to your SSH Agent.

### Install Dependencies

```shell
cd forkfacts-v2 && npm install or npm i
```

### Run the project

##### Development

- Run `npm run develop or npm start` to start gatsby project locally. It internally runs `gatsby develop` command. Your project will start
  on http://localhost:8000

##### Production

- Run `npm run build` to create production build.
- Run `gatsby serve` to start production build locally. It will start project on http://localhost:9000/

#### Running The App on Capacitor

To run the app on android studio or excode locally, you must ensure you have the env variable key that will be pointing at server.url in the capacitor.config.ts file is set for capacitor to be able to use it.

1. Add the env GATSBY_APP_URL
2. Run the development server using `npm run start:develop`
3. Run `npm run sync && npm run open:android for android `
4. Run `npm run sync && npm run open:ios for ios `

## Generating Icons

To generate icons from SVG images downloaded from the project Figma design, use the following command:

```
npm run svgr

```

This will use the @svgr/cli package to generate TypeScript files for the SVG icons in the src/images/icons directory. The generated files will be placed in the src/DesignIcons directory. The --replace-attr-values '#000=currentColor' option replaces any #000 fill values with the currentColor value, which allows the icons to inherit the color of their parent element.

## Release

We are using a version of [6 weeks cycle](https://3.basecamp-help.com/article/35-the-six-week-cycle). However, we may not
always run for 6 weeks depending upon the time and bandwidth available. But we do run a cycle. We prioritize what we can
do in a cycle, and create a milestone. All our milestones are available [here](https://github.com/forkfacts/forkfacts/milestones).

We try to keep the name of milestone from the list of herbs available [here](https://www.britannica.com/topic/list-of-herbs-and-spices-2024392)

We are using [GitFlow](https://nvie.com/posts/a-successful-git-branching-model/) to release the project. The feature branches
are worked upon based on the `sub branches`. The code reviews (PRs) are opened against `develop` branch. Once a PR
is merged, it goes into the `sub branches` branch.

From time to time, we open a PR from `sub branches` to `main` branch. Currently, we do not wait for a cycle to complete
in order to merge to `main`. We prefer to merge to `main` (hence a release) as soon as we are happy with the quality of work.

## How You Should Commit Your Code

1. You can Assign yourself an **unassigned** ticket from the list of `🥑 High` priority.
2. Create a feature branch based on latest `main` branch. We are using Semantic Release for automated releases. So, please refer to
   [commit message format](https://semantic-release.gitbook.io/semantic-release/#commit-message-format) guidelines to indicate the nature of change.
   Read [Github Docs](https://docs.github.com/en/github/writing-on-github/working-with-advanced-formatting/autolinked-references-and-urls)
   on how to reference issues in commits and in pull requests.
3. The commit format is expected to look like this: `[your name]_[ticket id]_[task title]`. Example (`git commit -m "ayomiku_#3efhet3_commit_your_change_task"`).
4. Early on (with your first commit push itself),then you can create a draft pull requests to ensure builds are running and there are no merge
   conflicts. This can save a lot of time in the integration later. Also, with each PR, chromatic builds are connected to generate
   updated storybook components. This can be of tremendous help during the code review.
5. Once you are done with the work, assign your PR to a reviewer.

```
var element = document.getElementById('ff-page-slug');
var jsonData = JSON.parse(element.getAttribute('data-json'));

```

## Setting up environment variables

To run this project, you'll need to set up some environment variables. These variables are used to connect to various APIs and services used in the project.

1. Copy the contents of the `.env.sample` file to a new file called `.env` using the following command:

   ```
   npm run build:env:dev
   ```

   This command will copy all the keys and their default values from `.env.sample` to `.env` and `.env.development`.

2. Open the `.env` and `.env.development` files and replace the default values with the appropriate values for your local environment.

3. Save the `.env` and `.env.development` files.

With the environment variables set up, you're ready to run the project!

**After you done that successfully, reach out to the project owner for the key values**

## These are basic rules that must be respected in this project.

1. There should not be any errors on the console.
2. No use of @ts-ignore in the .tsx files.
3. No console.log allowed in the code except in the development mode when you are debugging an issue. No information should be displayed on the browser console.
4. Do not include a blank or inactive file in the project.

## Supporters

“This project is tested with BrowserStack.”
