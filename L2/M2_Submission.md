## Problem Statement

 In your new role as a Web Developer, you're assigned to a project that involves optimizing the integration of JavaScript into a web application. The team emphasizes the importance of efficient JS bundling for enhanced application performance. As you embark on the development task, challenges related to bundling, code splitting, lazy loading, and the implementation of import maps surface. Your role is to address these challenges, showcasing your ability to optimize JS integration and explore advanced bundling techniques. The team is particularly interested in your practical application of concepts such as code splitting, lazy loading, and import maps to improve the application's overall performance.

---

## Configuring Webpack:

 webpack is the very useful tools where it used to  bundle JavaScript applications (supporting both ESM and CommonJS), and it can be extended to support many different assets such as images, fonts and stylesheets.

webpack config :

```js
const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
    lazyMod: './src/lazyMod.js',
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  modules: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};

```
---

## Bundling Techniques

### Lazy Loading

Lazy loading will reduce waiting to render content on a webpage until the user or the browser needs it. Lazy loading can help speed up webpage load times.

~~~js
const lazy1 = () => import('lazyMod1');
document.getElementById('lazy-button1').addEventListener('click', () => {
  lazy1().then(lazy => {
    lazy.default()
  });
});

~~~

### Code Splitting
* By using Code Splitting feature allows us to split code into various bundles which can then be loaded on demand or in parallel. 
* It can be used to achieve smaller bundles and control resource load prioritization.
* If it used correctly, can have a major impact on load time.

```js

document.getElementById('lazy-button').addEventListener('click', () => {
  import('styles').then(styles => {
    styles.default()
  });
  import('lazyMod').then(lazy => {
    lazy.default()
  });
});
console.log('Hello from index.js')


```

### Merits of Bundling Techniques :

* Faster Load Times: With code-splitting, your application's initial load time is significantly reduced.
    
* Optimized Network Usage: Loading only the required code means reduced bandwidth usage.
* Lazy loading allows you to use server resources more efficiently by loading only the resources you need.
* A quicker initial load time can be achieved by using lazy loading, which minimizes the amount of code that must be downloaded and parsed when the page first loads

--- 

## Import Maps:

Using importmap is particularly useful in projects where you want to streamline how modules are imported and managed within your web application, especially when dealing with complex dependencies or multiple entry points

Before implementaion: 

```js
// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

```
After implementaion: 

```js
// importMapSetup.js

const importMap = document.createElement('script');
importMap.type = 'importmap';
importMap.textContent = JSON.stringify({
  "imports": {
    "App.css": "./App.css",
    "FetchData": "./FetchData.js"
  }
});
document.head.appendChild(importMap);

```

```js
// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// Import maps setup
import './importMapSetup';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

```

### Benifits of using Import Maps :

Streamlined Dependency Handling:

* Import maps simplify how you declare dependencies in your project. This removes the complexity associated with setting up intricate bundling configurations.

Optimized Loading:

* Instead of combining all your code into one large file, import maps allow you to load individual modules as needed. This can significantly reduce the initial load time of your application.

Version Control:

* Import maps provide an effective way to manage different versions of modules. This ensures that your application consistently uses the specified version, avoiding conflicts and unexpected behaviors.


