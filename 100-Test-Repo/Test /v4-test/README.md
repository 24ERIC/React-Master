# v1 - single redirect page
```bash
    # create new app
    npx create-react-app

    # redirect
    npm i react-router-dom

    # + /components/Home.jsx
    
    # 👨‍💻 App.js
```

# v2 - redirect multiple page
```bash
    # + /components/Blogs.jsx

    # + /components/Contact.jsx
    
    # + /components/Layout.jsx
    
    # + /components/NoPage.jsx
    
    # 👨‍💻 App.js
```

# v3 - add material ui
```bash
    # install material ui
    # npm install @material-ui/core     # i guess this is not good
    npm install @mui/material @emotion/react @emotion/styled 
    # npm install @mui/material @mui/styled-engine-sc styled-components
    # npm install @fontsource/roboto
    # npm install @mui/icons-material

    # 👨‍💻 /public/index
    # add it inside <head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />

    # 👨‍💻 NoPage.jsx
    # use button
```