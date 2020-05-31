# express-in-5

## prerequisites
Installed node:

if you don't already have the node installed,
install the latest LTS version for your OS:
[https://nodejs.org/en/download/](https://nodejs.org/en/download/)

note: this may take more than 5 minutes


### 1: Setup npm
``` $ mkdir app-in-5 ```

``` $ cd app-in-5 ```

``` $ npm init -y ```

### 2:  Install express
``` $ npm install express --save```

### 3:  Import express middleware
Create the server.js file
```javascript
// server.js
const express = require('express');
const server = express();

```

### 4: Add a JSON route handler 
whenever a client accesses '/json' we will return a JSON with the message "hello world"
```javascript
// server.js
...
server.get("/json", (req, res) => {
   res.json({ message: "Hello world" });
});
```

### 5: Add a HTML route handler  
whenever a client accesses '/' we will return the index.html file
```javascript
// server.js
...
server.get("/", (req, res) => {
   res.sendFile(__dirname + '/index.html');
});
```
Create index.html in same level as server.js
```html
<!DOCTYPE html>
<html lang="en">
 <head>
   <title>Node Workshop</title>
 </head>
 <body>
     <h1 style="color: blue;">
        Experss in 5 minutes
     </h1>
     <p>HELLO WORLD</p>
 </body>
</html>
```

### 6: Start server
```javascript
// server.js
...
const port = 4000;

server.listen(port, () => {
    console.log(`Server listening at ${port}`);
});
```

```
$ npm start
```

### 7: Test
access http://localhost:4000 in iyour browser

or test via curl:
```
# on another terminal

$ curl http://localhost:4000/json
{"message":"Hello world"}

$ curl http://localhost:4000
<!-- index.html --> ...
```
