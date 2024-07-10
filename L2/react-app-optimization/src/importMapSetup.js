const importMap = document.createElement('script');
importMap.type = 'importmap';
importMap.textContent = JSON.stringify({
  "imports": {
    "FetchData": "/src/FetchData.js",
    "styles": "/src/App.css"
  }
});
document.head.appendChild(importMap);
