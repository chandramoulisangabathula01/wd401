## Problem Statement
  
  Enhance the software development workflow by integrating automated testing and continuous integration tools to improve code quality and streamline deployment processes.

    *Unit Testing:
    
    *Integration Testing:
    
    *Continuous Integration:
---

## Approach
I have taken My wd301 capstone project as an example to showcase this problem statement , 

For unit testing i used jest, its not the first time to use the jest for testing i have already experienced working with it in wd201 and wd301. So i tried to integrate in Sporthive to unit testing but unfortunately it's failing again and again 
so to not to stop their i worked on e2e testing where as it worked out very well after some good understanding

first i used Wsl -linux then tried to implement jest and cypress both failed so then i moved to windows after that cypress is working in windows but i am unable to work with jest so for now i would explain importance and advantages of jest 

## jest
### advantages:
  
  1.Jest runs tests in parallel and only tests what’s changed, making it fast. It also has features like snapshot testing and built-in code coverage.

  2.It’s simple to set up and has a clear, straightforward syntax that makes writing tests easy.

  3.Jest works seamlessly with React, making it easy to test individual components, including their rendering, props, state changes, and interactions.

  4.Jest’s built-in mocking capabilities are helpful for isolating and testing React components without needing external dependencies.

  5.Jest is widely adopted in the React community, meaning there are abundant resources, plugins, and community support.

  
---

## Code Coverage

Code coverage tools measure how well our tests exercise our code. Key metrics include:

  * **Function Coverage:** Checks if all functions have been called.
  * **Statement Coverage:** Measures how many lines of code have been executed.
  * **Branch Coverage:** Ensures all paths in control structures (like if statements) have been tested.
  * **Condition Coverage:** Tests each boolean condition for both true and false.
  * **Line Coverage:** Shows how many lines of code have been executed.
    
These metrics help ensure our tests cover all important parts of your code.


## Cypress :

Cypress end-to-end (e2e) testing involves testing your entire application from the perspective of a user. It verifies that all components and functionalities work together as expected in a real-world scenario. 
create tests for your modern web applications, debug them visually, and automatically run them in your continuous integration builds.

### Advantages:

  * **Real Browser Testing:** Runs tests directly in the browser, providing accurate results.
  * **Automatic Waiting:** Automatically waits for elements to appear and for commands to complete, reducing the need for manual delays.
  * **Easy Debugging:** Provides detailed error messages and snapshots of your application at the time of failure.
  * **End-to-End Scenarios:** Covers scenarios that a typical user would encounter, from logging in and performing actions to logging out.


##  Configuration of Testing Framework

  1. Install Cypress in project:

        * npm install cypress --save-dev

  2. Open Cypress

        * npx cypress open

  3. cypress.config.js

``` cypress.config.js

    import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:5173",
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});

```

4. write test :

``` signupForm.cy.ts
  describe('Signup Form Behavior', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/signup');
  });

  it('should display the signup form elements correctly', () => {
    cy.get('form').should('be.visible');
    cy.get('input[name="userEmail"]').should('be.visible');
    cy.get('input[name="userPassword"]').should('be.visible');
    cy.get('button[type="submit"]').should('be.visible');
  });

```     

Basically first i run it in wsl then cypress didn't supported so i switched to windows then everything is smooth and when i open with chrome its not working then i shifted to my default firefox then its working excellent


## Proof of my Cypress tests worked:

### signupspec.cy.ts

![signup](images/signup.png)

### matchspec.cy.ts

![matches](images/matches.png)

### articlespec.cy.ts

![articles](images/articles.png)

### teamspec.cy.ts

![teams](images/teams.png)

### userspec.cy.ts

![userinfo](images/user.png)

## when test failed in cypress app :

![signUpFail](images/signupfailed.png)

![cypress_fail](images/cypress_run_fail.png)


## Github Actions :

GitHub Actions is a CI/CD (Continuous Integration/Continuous Deployment) service provided by GitHub that allows you to automate workflows directly within your GitHub repository.

** Automation Platform: ** Enables automation of various tasks, including building, testing, and deploying code.

** Workflow Automation: ** Defines workflows that are triggered by events, such as code pushes, pull requests, or scheduled times.

** Seamless Integration: ** GitHub Actions is built right into GitHub, so it’s incredibly easy to set up and start using. It’s like having everything in one place without needing to juggle multiple tools.


### config of github Actions :

![action_yml](images/action_yml.png)

### lets see some fails

![some_fails_then_no_upload](images/git_action_fail.png)


![final_fail](images/git_action_fail_final.png)


Then try to fixed that issues these issues wasn't found in cypress open or run because of timeout session , but when i tried to run in actions then I found its because of delay so i increased time to stop this error to occur .


## Passing test in Actions:

![git_action_pass](images/git_action_pass.png)

![git_process](images/git_process.png)




