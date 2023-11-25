# TrendBlend

TrendBlend is a news aggregator application built with React + Vite + TypeScript as a take-home challenge for [Innoscripta](https://www.innoscripta.com/de/en).

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the App](#running-the-app)
  - [Production](#production)
  - [Development Mode](#development-mode)
- [Testing](#testing)
- [Built With](#built-with)
- [Data Sources](#data-sources)
- [Acknowledgements](#acknowledgements)
- [What's Next?](#what-next)

## Getting Started

Project is a React + TypeScript + Vite project, and it uses packages like React Query, Axios for data fetching and NextUI as a component library and TailwindCSS as its styling solution.

## Prerequisites

This application requires Node.js version 18+. 20+. to work then if you want to run it in your local machine, you need to install Node.js first.

## Installation

Follow the following prompts in order to install application dependencies.

```bash
# Close the application
git clone mostafa-mojtahedi.bundle

# Change directory to repo
cd mostafa-mojtahedi

# Install dependencies
npm install
```

## Running the App

### Production 
You can run the application on your local machine in production mode using a Docker Container or `serve`.

#### Docker Container
For running the application in a Docker Container and Production mode, first, you should have Docker Engine on your system, you can run `docker version` to check if you have Docker Engine installed or not, Then you can follow the following prompts for building and running the application.

```bash
# Change directory to project root directory
cd mostafa-mojtahedi

# Build app's docker image 
docker build -t trend-blend:latest .

# Run image
docker run --rm -p 3000:8080 trend-blend:latest
```

Now you can navigate to [`http://localhost:3000`](http://localhost:3000) to see the application.

As an alternative approach you can use `docker-compose` file for building and running the application.

```bash
# Change directory to project root directory
cd mostafa-mojtahedi

# Build and Run the application 
docker compose up --build
```

Now you can navigate to [`http://localhost:3000`](http://localhost:3000) to see the application.


#### Using `serve`

Follow the following instructions to run the app using `serve`.

```bash
# Install serve
npm i -g serve

# Build the application
npm run build

# Run the application
serve -s dist -p 3000
```

Now you can navigate to [`http://localhost:3000`](http://localhost:3000) to see the application.

### Development Mode
To run the application in development mode on your local machine, after installing the dependencies you can use the below prompt to run the app.

```bash
npm run dev
```

## Testing

There are unit tests available in the project, for running them you can use the below command.

```bash
npm run test
```

## Built With

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [NextUI](https://nextui.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [React Query](https://tanstack.com/query/latest/)
- [Axios](https://axios-http.com/)
- [React Hook Form](https://react-hook-form.com/)
- [usehooks-ts](https://usehooks-ts.com/)
- [react-tailwindcss-datepicker](https://react-tailwindcss-datepicker.vercel.app/)

## Data Sources

- [NewsAPI](https://newsapi.org/)
- [New York Times API](https://developer.nytimes.com/)
- [The Guardian API](https://open-platform.theguardian.com/documentation/)

## Acknowledgements

This project is aggregating news from different public APIs and there could be lots of improvements in data layer of the application. 

One of the important points of the application was that `NewsAPI` free subscription doesn't provide more than 100 results, so the pagination for application could not move more than 10 pages.

## What Next?

There are a lot of improvements possible for this project. Some of them are:
- [ ] Implement E2E (End to End) tests for testing application flows.
- [ ] Implement integration and unit tests for UI and logical components.
- [ ] Configuring Error Boundary and use Error Tracking tools like Sentry.
- [ ] Implement a better infrastructure for working with react-hook-form and using better approaches for integrating react-hook-form and NextUI.
- [ ] Implement pagination mechanism for Explore page.
- [ ] Add other Data Sources.

---

### See also

- 📚 [React Documentation](https://react.dev/) for in-depth information about React.
- 📘 [Vite Documentation](https://vitejs.dev/guide/) for detailed Vite usage and configuration.
- 📘 [TypeScript Documentation](https://www.typescriptlang.org/docs/) for TypeScript-related documentation.

### You may also enjoy

- 🛠️ [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) for code linting and formatting.

---
