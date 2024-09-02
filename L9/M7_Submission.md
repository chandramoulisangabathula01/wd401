


## Problem Statement
  
To complete this level, you are required to implement Error Logging & Debugging features in a React.js application. The goal is to enhance the application's stability, quickly identify issues, and resolve them efficiently. The key tools used in this implementation are Sentry for error tracking and React DevTools for debugging.

  * Error Tracking System Integration
  * Debugging Capabilities
  * Root Cause Analysis (RCA).
  * Conclusion

---

## Approach

I took My wd301 capstone project as an example to illustrate this problem statement.

GitHub repo I worked on : https://github.com/chandramoulisangabathula01/sporthive/tree/master

**Video Explination on M7** : https://youtu.be/15uUbppfSm8

I worked on this project and implemented all the Error Logging & Debugging.

--- 

## 1. Error Tracking System Integration

### Introduction to Sentry
  Sentry is a robust error tracking tool that helps monitor and fix crashes in real-time. It provides detailed error reports, including stack traces, error messages, and contextual data. Sentry can be configured to alert developers when critical errors occur, enabling quick response and resolution. 

### 1.1 Steps to Integrate Sentry:
  * ***Install Sentry:***
    * To integrate Sentry into your React project, start by installing the required Sentry packages using npm:
    
        ``` bash
          npm install @sentry/react @sentry/tracing
        
        ```
    * Initialize Sentry in the Application
      * Initialize Sentry in the main entry file of your application (e.g., main.tsx or App.tsx). Below is a sample configuration:
      
      ``` main.tsx
      import * as Sentry from "@sentry/react";

      Sentry.init({
        dsn: "https://0c91cb05c3ee7f61c5311b7754373bec@o4507853698105344.ingest.us.sentry.io/4507853702037504",
        integrations: [
          Sentry.browserTracingIntegration(),
          Sentry.replayIntegration(),
        ],
        // Tracing
        tracesSampleRate: 1.0, //  Capture 100% of the transactions
        // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
        tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
        // Session Replay
        replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
        replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
      });

      ```

  ###  1.2 Implement Error Boundaries

  Use Sentry's error boundaries to capture errors that occur in the component tree. Wrap key components with Sentry’s error boundary to ensure any errors are logged.
  
  ```Navbar.tsx

  const handleRuntimeError = () => {
    throw new Error("This is a test runtime error!");
  };

return (
  <div className="p-5">
            <div className="flex space-x-6 items-center">
              <button
                onClick={handleRuntimeError}
                className="inline-flex items-center gap-2 rounded-md bg-gray-800 py-3 px-5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                >
                Trigger Runtime Error
              </button>
              
            </div>
          </div>
);

  
  ```

  ### Customize Sentry Configuration

  Enhance Sentry's utility by adding custom tags, user information, and other relevant data for better error context.

  ### Configure Alerts

  In Sentry’s dashboard, set up alerts to notify the development team of critical issues via email, Slack, or other integrated services.

  ### 1.3 Testing the Integration
  
  * To ensure Sentry is capturing errors as expected:
    * Trigger an intentional error in the application.
    * Verify that the error appears in the Sentry dashboard with all relevant information.



## 2. Debugging Capabilities:
  
### Using React DevTools

React DevTools provides a comprehensive suite of tools to inspect the component hierarchy, examine props and state, and debug application logic.

### Inspecting Components

  * Open React DevTools in the browser’s developer tools.
  * Navigate through the component tree to inspect the state and props of components


### Setting Breakpoints

  * Use the Sources tab in the developer tools to set breakpoints in your JavaScript code.
  * Step through the code execution to observe the flow and inspect variables at each step.

  
## Debugging a Bug Example

### Bug Description

The application had an issue where a button click did not trigger the expected API call, resulting in missing data display.

### Steps Taken to Debug

* Reproduce the Issue: Reproduce the bug by navigating to the affected component and clicking the button.
* Inspect with React DevTools: Use React DevTools to inspect the component handling the button click.
* Set Breakpoints: Set breakpoints in the event handler and step through to observe the execution flow.
* Check Network Requests: Confirm that the expected API call is not made by inspecting the Network tab

## 3. Root Cause Analysis (RCA)

* Root Cause: The event handler was not bound correctly, resulting in an undefined this context.

* Impact: The missing API call prevented data display, affecting user experience.

* Resolution: Correct the binding issue and verify that the handler works as intended.

* Preventive Measures:

    * Implement unit tests for event handlers.
    * Perform code reviews focused on common binding issues.

## Conclusion:

Integrating error tracking and debugging capabilities significantly enhances a React.js application's stability and maintainability. By following the steps outlined in this documentation, developers can efficiently identify, track, and resolve issues, leading to a more robust and reliable application.




