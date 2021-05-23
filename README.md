# Pandemic Tracker Application
A COVID-19 tracker application to keep track of incidence from past for different districts in Germany

## Tools used

* Yarn and npm
* env-cmd `(npm install -g env-cmd)`
* React 17 + Typescript
* Bootstrap
* Jest and Enzyme
* React Router
* Chart.js

## Setup Project

Run the following to setup using yarn:
```
git clone https://github.com/bhaskargogs/pandemic-affected-tracker.git
yarn install
```

Run the following to setup using npm:
```
git clone https://github.com/bhaskargogs/pandemic-affected-tracker.git
npm install
```

# Setup Environment

Create two files for Development `.env.development` and `.env.production` inside `config/` folder which should have the following content:

An example for `.env.development`:

```
REACT_APP_API_URL=http://localhost:3000
REACT_APP_RKI_API_ENDPOINT=https://api.corona-zahlen.org/districts
REACT_APP_RKI_HISTORY=history/incidence
```

# Tests

Run the following to run unit tests:

```
npm run test
```
or

```
yarn test
```

# Running the application in development

```
npm start
```

or

```
yarn start
```

You can now access the application using the following link:

[https://localhost:3000](https://localhost:3000)

# Running in production

```
npm build:serve
```

or

```
yarn build:serve
```

You can now access the application using the following link:

[https://localhost:5000](https://localhost:5000)