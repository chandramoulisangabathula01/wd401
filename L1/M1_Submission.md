### Scenario

You're assigned to a project that involves implementing a critical feature using a branching strategy inspired by GitFlow. Each developer creates feature branches, works on their assigned tasks, and then submits pull-requests for code review.

### Problem

You've been assigned to a project that involves enhancing a critical feature for a web application. The team places a strong emphasis on the pull-request workflow, with a focus on code reviews, merge conflict resolution, and the recent integration of CI/CD. As you navigate through the development task, you encounter challenges such as feedback during code reviews and discussions on effective merge conflict resolution. The team looks to you to demonstrate your understanding of these challenges and your ability to adapt to the added complexity of CI/CD integration.

### App used 

i have used the sporthive application which i did in wd301 capstone now i covered the problem statement in sporthive 

**You can see a pull request named as " Enhanced sign-in feature with better error handling"**  


### Title: Implement handleSubmit Function for User Sign-In

### **Description:**

This pull request implements the handleSubmit function for user sign-in. It includes handling code review feedback, resolving merge conflicts, and ensuring CI/CD integration.

### **Key Changes:**

**Initial Implementation:**

- Created handleSubmit function for user sign-in.
- Used fetch API to make POST requests.
- Stored auth token and user data in localStorage.

### **Code Review Feedback:**

- Added detailed error messages for incorrect credentials and server errors.
- Implemented Base64 encoding for user data.
- Created RoutePaths constant for route paths to avoid typos.

### **Merge Conflicts:**

- Resolved conflicts related to route paths by adopting a constant-based approach.

### ** CI/CD Integration:**

- Added unit tests for handleSubmit.
- Configured GitHub Actions for automated tests and linting.

### Detailed Code:

**Initial Code:**

```


const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
        const response = await fetch(`${API_ENDPOINT}/users/sign_in`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            throw new Error('Sign-in failed');
        }

        const data = await response.json();
        localStorage.setItem('authToken', data.auth_token);
        localStorage.setItem('userData', JSON.stringify(data.user));
        login();
        navigate("/landingpage");

    } catch (error) {
        console.error('Sign-in failed:', error);
    }
};

```

**Feedback code :** 

```
const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  try {
    // Feedback: Use environment variables for API_ENDPOINT to enhance security and flexibility.
    const response = await fetch(`${process.env.API_ENDPOINT}/organisations`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: organisationName, user_name: userName, email: userEmail, password: userPassword }),
    });

    if (!response.ok) {
      // Feedback: Provide more user-friendly error messages.
      throw new Error(`Sign-up failed. Please try again later.`);
    }
    console.log('Sign-up successful');

    const data = await response.json();
    localStorage.setItem('authToken', data.token);
    localStorage.setItem('userData', JSON.stringify(data.user));
    navigate("/dashboard");
  } catch (error) {
    // Feedback: Display a user-friendly error message in the UI.
    console.error('Sign-up failed:', error);
    setError('Sign-up failed. Please check your details and try again.');
  }
};
```

**Updated Code :**
```

// routes/index.ts

export const RoutePaths = {
    LandingPage: "/landingpage",
    Dashboard: "/dashboard"
};

```


```
// /src/pages/signin/SigninForm.tsx

import { RoutePaths } from './routes';

const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
        const response = await fetch(`${API_ENDPOINT}/users/sign_in`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            if (response.status === 401) {
                throw new Error('Incorrect email or password');
            } else {
                throw new Error('Sign-in failed due to server error');
            }
        }

        const data = await response.json();
        localStorage.setItem('authToken', data.auth_token);
        localStorage.setItem('userData', btoa(JSON.stringify(data.user)));
        login();
        navigate(RoutePaths.LandingPage);

    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error('Sign-in failed:', error.message);
            alert(error.message);
        } else {
            console.error('Sign-in failed:', error);
            alert('An unexpected error occurred.');
        }
    }
};

# Iterative Development Process Flowchart


```
![Screen Shot 2024-07-03 at 23 27 13](https://github.com/chandramoulisangabathula01/wd401/assets/127196627/71e5bd18-57d7-4d17-81b7-c9d2588ec95a)

# Simplified Guide to Resolving Merge Conflicts

When working with Git, merge conflicts can arise when Git cannot automatically merge changes from different branches. Here’s a simplified approach to resolve these conflicts:

- Identify Conflicts: Git will highlight conflicting sections in your files with special markers (<<<<<<<, =======, >>>>>>>). These show where changes from different branches diverge.

- Review and Edit: Open the conflicted files in your code editor. Manually edit these files to remove the conflict markers and decide which changes to keep or integrate.

- Save Changes: Once you’ve resolved the conflicts, save the files with your edits.

- Stage Resolved Files: Use git add <file> to stage the resolved files for the next commit.

- Commit Changes: After staging, commit the changes using git commit. Include a clear message explaining how you resolved the conflicts.

- Push the Merge: If you're merging into a remote branch, use git push to push the merged changes to the remote repository.


# commit and push the changes

```
git add YourComponent.tsx
git commit -m "Resolved merge conflict in handleSubmit function"
git push

```



