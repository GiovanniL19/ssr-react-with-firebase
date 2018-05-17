# SSR React with Firebase
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

# TODO:
- Add styling boilerplate
- Add hot reloading
