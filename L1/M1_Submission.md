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
```



