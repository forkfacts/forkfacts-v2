# Forkfacts Version 2 Introduction

This project is home for consumer facing website version 2. In order to create this website, there are other different github projects
that are responsible for their own thing and generate artifacts used by this project.

# Getting Started

## Pre-requisites

- You must have `npm` installed on your machine. Run `sudo npm install -g npm` on Linux or Mac to install `npm`. To learn more,
  follow [`npm documentation`](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).
- You must have the latest version of the node installed on your machine. To install the latest version visits [`Node documentation`](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions).

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

## How Storybook Works on the Project and with Gatsby.

> This setup is not necessary for this project, it has already been added in the project..

### How to Install Storybook with Gatsby

- Run `npx sb init --builder webpack5` to install storybook.

### Storybook Configuration with Gatsby

- Add the following code below to main.js file and preview.js inside the .storybook folder created when you initialized storybook on your project.`

* Copy and paste on main.js:
  ```
  webpackFinal: async config => {
  // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
  config.module.rules[0].exclude = [/node_modules\/(?!(gatsby|gatsby-script)\/)/]
     // Remove core-js to prevent issues with Storybook
     config.module.rules[0].exclude= [/core-js/]
     // Use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
     config.module.rules[0].use[0].options.plugins.push(
       require.resolve("babel-plugin-remove-graphql-queries")
     )
     config.resolve.mainFields=["browser", "module", "main"]
     return config
  }
  ```
* Copy and paste preview.js:

  ```
  import { action } from "@storybook/addon-actions"
  // Gatsby's Link overrides:
  // Gatsby Link calls the `enqueue` & `hovering` methods on the global variable **_loader.
  // This global object isn't set in storybook context, requiring you to override it to empty functions (no-op),
  // so Gatsby Link doesn't throw errors.
  global._**loader = {
  enqueue: () => {},
  hovering: () => {},
  }
  // This global variable prevents the "**BASE_PATH** is not defined" error inside Storybook.
  global.**BASE_PATH** = "/"
  // Navigating through a gatsby app using gatsby-link or any other gatsby component will use the `___navigate` method.
  // In Storybook, it makes more sense to log an action than doing an actual navigate. Check out the actions addon docs for more info: https://storybook.js.org/docs/react/essentials/actions
  window.\_\_\_navigate = pathname => {
  action("NavigateTo:")(pathname)

  ```

- To understand more, visit storybook setup with gatsby [Gatsby Storybook Installation Page](https://www.gatsbyjs.com/docs/how-to/testing/visual-testing-with-storybook/).
- To understand how to setup storybook with React [Storybook Installation Page](https://storybook.js.org/docs/react/get-started/install)

### How Run to storybook.

##### Development

- Run `npm run storybook` to start storybook. It will run on http://localhost:6006/. in order to run this command).

##### Production

- Run `npm run build-storybook` to create production build.

### How to use Storybook Component Controls Addon.

**Storybook Controls gives you a graphical UI to interact with a component's arguments dynamically without needing to code. It creates an addon panel next to your component examples ("stories"), so you can edit them live. Controls do not require any modification to your components**.

To use the Controls addon, you need to write your stories using args. Storybook will automatically generate UI controls based on your args and what it can infer about your component. Still, you can configure the controls further using argTypes, see below.

#### Choosing the control type

By default, Storybook will choose a control for each arg based on the initial value of the arg. It works well with certain types of args, such as boolean values or free-text strings, but in other cases, you want a more restricted control.

## How You Should Commit Your Code

1. You can Assign yourself an **unassigned** ticket from the list of `🥑 High` priority.
2. Create a feature branch based on latest `main` branch. We are using Semantic Release for automated releases. So, please refer to
   [commit message format](https://semantic-release.gitbook.io/semantic-release/#commit-message-format) guidelines to indicate the nature of change.
   Read [Github Docs](https://docs.github.com/en/github/writing-on-github/working-with-advanced-formatting/autolinked-references-and-urls)
   on how to reference issues in commits and in pull requests.
3. The commit format should look like this: `[your name]_[ticket id]_[task title]`.Example (`git commit -m "ayomiku_#3efhet3_commit_your_change_task"`).
4. Early on (with your first commit push itself),then you can create a draft pull requests to ensure builds are running and there are no merge
   conflicts. This can save a lot of time in the integration later. Also, with each PR, chromatic builds are connected to generate
   updated storybook components. This can be of tremendous help during the code review.
5. Once you are done with the work, assign your PR to a reviewer.
