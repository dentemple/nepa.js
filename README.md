# ✨ Website for NEPA TEch ✨[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

> For Developers & Entrepreneurs in Northeastern Pennsylvania. All PRs welcome <3

[Link to our website.](https://chauffer-rodney-82363.netlify.com/)

[Link to our Slack channel](nepatech.slack.com).

Join our next [Meetup](https://www.meetup.com/NEPATechMeetup/)!

## How to Contribute

For a more detailed list of ideas and advice, check out our [Contributing Guide](CONTRIBUTING.md).

## Code of Conduct

[Read our Code of Conduct Guide here.](CODE-OF-CONDUCT.md)

## Installation

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

Push your changes, and make a Pull Request (PR)!

- `$ git push origin <NAME-OF-NEW-BRANCH>`
- [How to make a Pull Request using Github's interface](https://help.github.com/articles/creating-a-pull-request/)

[More on making your first PR.](https://yourfirstpr.github.io/)

[More on branch management.](https://github.com/Kunena/Kunena-Forum/wiki/Create-a-new-branch-with-git-and-manage-branches)

## Technology

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) (CRA).

CRA provides [a very thorough user guide](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md) for performing common tasks.

## Additional libraries that have been added

### Collaboration Tools

Auto-formats your code on commit:

- [Prettier](https://github.com/prettier/prettier) - "Because friends don't let friends argue about semicolons"

### Project Dependencies

Syntatic sugar for a feature that's new to React v16:

- [react-aux](https://www.npmjs.com/package/react-aux)

A CSS-in-JS alternative (CRA already works with CSS modules out-of-the-box)

- [styled-components](https://www.styled-components.com/)

## Continuous Integration

Changes to `master` will be deployed automatically to a live dev environment.

[Link to live dev environment.](https://chauffer-rodney-82363.netlify.com/)

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE.txt)
