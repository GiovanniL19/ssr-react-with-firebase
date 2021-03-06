# Server Side Rendering for React with Firebase
A boilerplate for Server Side Rendering React applications with Firebase functionality

# Getting Started
```
$ yarn install
```

Before you can serve the app, you need to create a ```firebase-config.js``` file and add your firebase project config json. For example:
```
export const config = {
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: ''
}
```

Once you have your config you can go to ```server.js``` and change ```ref('sites/live')``` accordingly.

Now you can run the server via: ```yarn serve```

# How to add paths?
Go to ```src/client/Routes``` and add your new page. The code should look like this:
```
{
    path: '/page',
    component: Page,
    data: data //Data comes from the routes parameter.
}
```
# Styling
Styling is done with ```.scss```. You can see an example in ```styles/main.scss```

# Local Fonts
Local fonts are stored in ```assets/fonts/```