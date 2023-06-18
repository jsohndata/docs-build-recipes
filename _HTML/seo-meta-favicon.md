# Social Media and Favicon in Head Tag

## React.js (/public/index.html)
* Combine prexisiting code such as `favicon`, `view port`, etc
* I put meta realated assets such as favicon in `/meta` for clearn organization purpose. Therefore, I have update my `manifest.json` to match the new URI.

```
<!DOCTYPE html>
<html lang="en">
 <head>
    <meta charset="utf-8" />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/meta/logo192.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />

    <!-- Favicon-->
    <link rel="icon" href="%PUBLIC_URL%/meta/favicon.ico" />
    <!-- Meta: General -->
    <meta name="title"              content="_TITLE" />
    <meta name="description"        content="_DESCRIPTION" />
    <!-- Meta: Facebook -->
    <meta property="og:title"       content="_TITLE" />
    <meta property="og:description" content="_DESCRIPTION" />
    <meta property="og:image"       content="_URL_IMG" />
    <meta property="og:url"         content="_URL_SITE" />
    <meta property="og:type"        content="website" />
    <!-- Meta: Twitter -->
    <meta property="twitter:title"  content="_TITLE">    
    <meta property="twitter:description" content="_DESCRIPTION" />
    <meta property="twitter:image"  content="_URL_IMG" />
    <meta property="twitter:url"    content="_URL_SITE" />
    <meta property="twitter:card"   content="summary_large_image" />
    
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/meta/manifest.json" />
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <title>_TITLE</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
  </body>
</html>


```

<br>

## HTML

```
<!-- _TITLE: Title of the site -->
<!-- _DESCRIPTION: Description of the site -->
<!-- _URL_IMG: Recommend Size 1200x630 px -->
<!-- _URL_SITE: URL to the site -->
<!-- _URL_FAVICON: URL of favicon -->

<!-- Favicon-->
<link rel="shortcut icon" href="_URL_FAVICON" />
<!-- Meta: General -->
<meta name="title"              content="_TITLE" />
<meta name="description"        content="_DESCRIPTION" />
<!-- Meta: Facebook -->a
<meta property="og:title"       content="_TITLE" />
<meta property="og:description" content="_DESCRIPTION" />
<meta property="og:image"       content="_URL_IMG" />
<meta property="og:url"         content="_URL_SITE" />
<meta property="og:type"        content="website" />
<!-- Meta: Twitter -->
<meta property="twitter:title"  content="_TITLE">    
<meta property="twitter:description" content="_DESCRIPTION" />
<meta property="twitter:image"  content="_URL_IMG" />
<meta property="twitter:url"    content="_URL_SITE" />
<meta property="twitter:card"   content="summary_large_image" />

<title>_TITLE</title>
```
