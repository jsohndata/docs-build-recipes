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
{
  "hosting": {
    "public": "public",
    "rewrites": [{
      "source": "**",
      "function": "api"
  }],
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ]
  },
```

<br>

### Functions Directory

### 2.4-functions) packages.json

Add the following

`"type": "module"`

### 2.5-functions) Express, Cors and others
Beyond Express and Cors I install `dotenv` and `mongodb`

`cd functions && npm install express cors dotenv mongodb`


### 2.6-functions) index.js
Top: Replace `require` with the following
`import functions from "firebase-functions"`

Bottom: Add the following.
`export const api = functions.https.onRequest( app );`

<br>
<br>

### 2.7-functions) CD to main directory
Once all setup is done, CD back to the main directory.
>⚠️ !! IMPORTANT >> Perform all git commands from the main directory not functions

<br>
<br>

### Sample Express Code
```
import functions from 'firebase-functions';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());
const rootUri = process.cwd();

/* Root and 404 */
app.get("/", (req,res) => {
  res.status(200).send("I am gRoot");
});

app.get("*", (req,res) => {
  res.status(404).send("404 Not Found");
});

export const api = functions.https.onRequest(app);

```

<br>

## 3.0) Test and Deploy
Emulate: `firebase emulators:start`

Deploy: `firebase deploy`
