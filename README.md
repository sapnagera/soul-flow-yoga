# Soul Flow Yoga

Soul Flow Yoga is a personal learning project: a responsive yoga studio website built with React and TypeScript. I created it to practise frontend development and deploying a website to Microsoft Azure.

**Live site:** https://nice-moss-08af67210.7.azurestaticapps.net

## What I built

- A single-page website with home, about, classes, and contact sections
- Reusable React components styled for different screen sizes
- A contact form interface for practising React state and form handling
- An automated deployment workflow using GitHub Actions and Azure Static Web Apps

## Technologies

- React and TypeScript
- Vite
- CSS
- GitHub Actions
- Microsoft Azure Static Web Apps

## Run locally

1. Clone or download this repository.
2. Open a terminal in the project folder.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the local address shown in the terminal.

## Build

Run `npm run build` to create a production build in the `dist` folder.

## Deployment

The GitHub Actions workflow builds and deploys the site to Azure Static Web Apps when you push changes to the `main` branch. The Azure deployment token is stored as a GitHub Actions secret.

## Project status

This is a learning and portfolio project. The contact form currently shows a confirmation message but does not send the entered information to a server.
