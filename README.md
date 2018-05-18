# SURF (Server using React and Firebase)
Server Side Rendering React project with Firebase


# Getting Started
```
$ yarn install
$ yarn serve
```

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