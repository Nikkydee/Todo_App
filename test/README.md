# Todo App

> This repository contains the automated UI and API task provided in the assessment.


## Built With

- JavaScript
- Cypress
- GitHub
- HTML Extra Reporter


### Prerequisites

- Have an IDE installed on your computer to be able to view the code locally preferrably VSCode.
- Node.js v18+

### Setup
- Open a command line terminal (Git bash preferrably) and navigate to a directory where you would like to save the working directory using cd.
- Clone the repository with
```bash
git clone https://github.com/Nikkydee/Todo_App.git
```
- Once in the repository change driectory to the test folder by running `cd test`
- Create a file and name it `.env`. The content of this file is sent with submission document.
- To get the curent working tree
```bash
 git fetch --all
 ```
  then checkout to `main` branch with
  ```bash
  git checkout main
  ```
- Install dependecies by running
```bash
 npm install
 ```
### Running UI tests locally 
To start the test run the following command:
```bash
npm run cy-chrome
```
or for firefox browser
```bash
npm run cy-firefox
```
### Running API tests locally 
To start the test run the following command:
```bash
npm run test-api
```

## Author

👤 **Adenike Olapetan**

- GitHub: [@Nikkydee](https://github.com/Nikkydee)
- LinkedIn: [@Adenike](https://www.linkedin.com/in/adenikeolapetan/)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- [Cypress](https://www.cypress.io/)
- [Node.js](https://nodejs.org/)
- [NPM](https://www.npmjs.com/)
- [Visual Studio Code](https://code.visualstudio.com/)

## 📝 License

This project is [MIT](../LICENSE) licensed.