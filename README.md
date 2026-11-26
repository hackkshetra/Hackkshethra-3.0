# HackKshetra Website

This project is a React-based website for HackKshetra, featuring a modern landing page, animated sections, and 3D visuals.

## Live website

https://hackkshetra.github.io/Hackkshethra-3.0/

## Download the project

### Option 1: Clone using Git
```bash
git clone <repository-url>
cd HackKshetra
```

### Option 2: Download ZIP
- Go to the GitHub repository page
- Click the green "Code" button
- Select "Download ZIP"
- Extract the folder on your computer

## Requirements

Before running the project, make sure you have installed:

- Node.js (recommended version 18 or newer)
- npm

## Install dependencies

Open a terminal in the project folder and run:

```bash
npm install
```

## Run the website locally

```bash
npm start
```

This will start the app in development mode. Open the browser and visit:

```text
http://localhost:3000
```

## Build for production

To create a production build:

```bash
npm run build
```

The build files will be generated in the `build/` folder.

## Deploy to GitHub Pages

The included GitHub Actions workflow builds and deploys the site whenever code is pushed to the `main` or `master` branch.

1. Push this project to a GitHub repository.
2. In the repository, open **Settings → Pages** and set the source to **GitHub Actions**.
3. Push to `main` or `master` (or manually run the **Deploy to GitHub Pages** workflow from the Actions tab).

The workflow configures the correct asset and route base for both project sites (`https://<owner>.github.io/<repository>/`) and user sites (`https://<owner>.github.io/`). Direct links to app pages are supported.

## Queries

For event queries, email [hack_kshetra@vvce.ac.in](mailto:hack_kshetra@vvce.ac.in)
or contact the student coordinators on the [Organizing Team page](https://hackkshetra.github.io/Hackkshethra-3.0/team).

## Useful notes

- If you face dependency issues, try deleting `node_modules` and `package-lock.json`, then run `npm install` again.
- If you are using an older Node version, upgrade it first.

## Project structure

```text
HackKshetra/
├── public/
├── src/
├── package.json
├── README.md
└── build/
```

If you want, I can also make this README more professional with screenshots and project description sections.
