# Note: How to deploy an API on GCP (Google Cloud Platform)

## 1) Initialize Hosting

### 1.1) Run Command
`firebase init hosting`
* Project: Use an existing - Make sure it is set to Blaze Plan.

Press enter for the following
* public directory: public
* rewrite all urls to /index.html: No
* automatic builds and deploys with GitHub: No

### 1.2) Clean up
Remove the following
* public/index.html 
* public/404.html`

<br>

## 2) Functions
Note: Functions DIR is just the API. Functions cannot see outside its own directory.

### 2.1) Run command
`firebase init functions`
* Javascript: Yes
* ES lint: No
* Install dependecnes: Yes

### 2.2) .gitignore
```
functions/node_modules
functions/.env
.DS_Store
```

### 2.3) firebase.json

Open firebase.json, add code below. I generally put it below "hosting"
```
"rewrites": [{
    "source": "**",
    "function": "api"
}],
```

### 2.4) functions > packages.json

Add the following

`"type": "module"`

### 2.5) functions > Express, Cors and others
Beyond Express and Cors I install `dotenv` and `mongodb`

`cd functions && npm install express cors dotenv mongodb`



### 2.6) functions > index.js
Top: Replace `require` with the following
`import functions from "firebase-functions"`

Bottom: Add the following.
`export const api = functions.https.onRequest( app );`

Note: Export a cloud function stating whenever a request comes in send to our Express app

<br>

### Sample Code
```
import functions from "firebase-functions";
import express from "express";
import cors from "cors";

const app = express();
app.use ( cors() );

app.get('/test1', (req, res) => res.send('Test 21 Cloud function'));
app.get('/test2', (req, res) => res.send('Test 2 Cloud function'));

export const api = functions.https.onRequest( app );

```

<br>

## 3.0) Test and Deploy
emulate: `firebase emulators:start`

Deploy: `firebase deploy`
