# Contributing Guide

> All contributions and Pull Requests (PRs) are welcome!

## Opportunities to Contribute

### Submit a question, issue, or suggestion

- [How to create a Github Issue](https://help.github.com/articles/creating-an-issue/)
- [Link to this project's Issues section.](https://github.com/nepajs/nepa-tech-website/issues)
- Feel free to provide comments or triage on any existing issues!

### Add more tests (unit, integration, e2e, etc....)

This project uses [`jest`] (https://facebook.github.io/jest/) and [`enzyme`](https://github.com/airbnb/enzyme) for testing.

This project uses a [Continuous Integration](https://en.wikipedia.org/wiki/Continuous_integration) pipeline; therefore, tests are the lifeblood to ensure that bugs don't fall through the cracks.

### Work on an Issue

1 - [Find an issue](https://github.com/nepajs/nepa-tech-website/issues) that needs assistance

2 - Let us know if you're working on a particular issue

3 - Follow our [Code of Conduct](CODE-OF-CONDUCT.md) and [Technical Guidelines](#technical-guidelines) to start working on an issue

4 - If you need any help, feel free to contact comment on the issue you're working on

5 - (Optional) Check out this video series: [How to Contribute to an Open Source Project on Github](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github) by Kent C. Dodds

Make sure all the tests are passing (`yarn test`) before pushing your changes; otherwise, they will be rejected automatically!

### Add or improve our documentation

You can never have too much documentation!

### Add new features

Before working on anything that would require signifcant effort, make sure to discuss the feature over Github Issues first!

## How to Download and Contribute

### Set up your system

- [Node.js](https://nodejs.org/en/download) (recommended v6.0 and above)
- [Yarn](https://yarnpkg.com/en/docs/install)
- A terminal interface (such as [Git Bash](https://git-scm.com/downloads) for Windows users)

### Install

Make your own copy of the project:

- [How to "Fork" a copy of this repository](https://help.github.com/articles/fork-a-repo/)

>Note: Replace `<USERNAME>` with your Github username

- `$ git clone git@github.com:<USERNAME>/nepa-tech-website.git nepa-tech-website`
- `$ cd nepa-tech-website`

Install the dependencies, and run the project:

- `$ yarn`
- `$ yarn start`

### Contribute

Before making changes, create a new branch:

- `$ git checkout -b <NAME-OF-NEW-BRANCH>`

Now, change all the things!

- This project's entry point is `src/index.js`
- [About committing changes to the repository](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository)

Before "pushing" your final changes, "pull" in others' changes first

- `$ git remote add upstream git@github.com:nepajs/nepa-tech-website.git`
- `$ git pull --rebase upstream master`
- [Handle any merge conflicts](https://help.github.com/articles/resolving-merge-conflicts-after-a-git-rebase/)

Make sure all your tests are passing before pushing your changes to the repository

- `$ yarn test`
- A failed test will cause your changes to be rejected! Make sure everything is in working order before you proceed from here

Push your changes, and make a Pull Request (PR)!

- `$ git push origin <NAME-OF-NEW-BRANCH>`
- [How to make a Pull Request using Github's interface](https://help.github.com/articles/creating-a-pull-request/)

[More on making your first PR.](https://yourfirstpr.github.io/)

[More on branch management.](https://github.com/Kunena/Kunena-Forum/wiki/Create-a-new-branch-with-git-and-manage-branches)

## Technical Guidelines

### Style Guide

Don't worry about the style guide.

[The `prettier` library](https://github.com/prettier/prettier) will autoformat your code upon every commit

Current settings: [Airbnb Syntax](https://github.com/airbnb/javascript) (`"prettier --write"`)

If you have any suggestions, feel free to submit an Issue!

### Branch Management

TBD

### Deployment Management

TBD

### CSS Guide

TBD
