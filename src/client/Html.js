export default ({ body, helmet }) => `
<!DOCTYPE html>
<html ${helmet.htmlAttributes.toString()}>
    <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
        <link rel="stylesheet" href="/styles/main.css">
    </head>
    <body ${helmet.bodyAttributes.toString()}>
        <div id="app">${body}</div>
    </body>
</html>`