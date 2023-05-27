# Note: How to deploy an API on GCP (Google Cloud Platform)

## 1.0) Initialize Hosting

### 1.1) Run Command
`firebase init hosting`
* Project: Use an existing - Make sure it is set to Blaze Plan.

Press enter for the following
* public directory: `public`
* rewrite all urls to /index.html: `No`
* automatic builds and deploys with GitHub: `No`

### 1.2) Clean up
Remove the following
* public/index.html 
* public/404.html`

<br>
<br>

## 2.0) Initialize Functions
> Note: !important >> Functions is the API. Functions cannot see outside its own directory.

### 2.1) Run command
`firebase init functions`
* Javascript: `Yes`
* ES lint: `No`
* Install dependecnes: `Yes`

<br>

### Main Directory

#### 2.2-Main) .gitignore
> Note: I have only one in the main directory, delete the one inside fuctions. #DRY

```
functions/node_modules
functions/.env
.DS_Store
```

#### 2.3-Main) firebase.json
Open firebase.json, add code below. 
```
"rewrites": [{
    "source": "**",
    "function": "api"
}],
```

Sample how it would appear on firebase.jsohn
```
  "hosting": {
    "public": "public",
    "rewrites": [{
      "source": "**",
      "function": "api"
  }],
```

<br>

### Functions Directory

### 2.4-functions) packages.json

Add the following

`"type": "module"`

### 2.5-functions) Express, Cors and others
Beyond Express and Cors I install `dotenv` and `mongodb`

`npm install express cors dotenv mongodb`


### 2.6-functions) index.js
Top: Replace `require` with the following
`import functions from "firebase-functions"`

Bottom: Add the following.
`export const api = functions.https.onRequest( app );`

Note: Export a cloud function stating whenever a request comes in send to our Express app

<br>
<br>

### Sample Code
```
import functions from "firebase-functions";
import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use (cors());

app.get('/test1', (req, res) => res.send('Test 21 Cloud function'));
app.get('/test2', (req, res) => res.send('Test 2 Cloud function'));

export const api = functions.https.onRequest( app );

```

<br>

## 3.0) Test and Deploy
Emulate: `firebase emulators:start`

Deploy: `firebase deploy`
