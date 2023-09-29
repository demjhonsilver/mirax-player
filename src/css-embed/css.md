
You can add to your `index.css` or `app.css` or any imported css stylesheet files.

You can rename and set many class names based on the total embed videos :
ex.

`my-tiktok` or `any-tik` or `my-name-tiktok` 

you must also declare in your component:

 `videoClass: 'my-tiktok',`

You can resize the max-width or width or float anywhere.

for Angular CSS: proceed to last part:

```css
/* app.css  or index.css or any */

.embed-tiktok {
  display: inline-flex;
  position: relative;
  width: 100%;
  max-width: 370px;
  max-height: 560; 
  float: left;
}

.embed-twitter {
  display: inline-flex;
  position: relative;
  width: 100%;
  max-width: 300px;
  float: left;
}
.embed-youtube {
  position: relative;
  display: inline-flex;
  width: 100%;
  max-width: 640px;
  max-height: 360; /* Allow the height to adjust proportionally */
  float: left;
}
.embed-facebook {
  display: inline-flex;
  position: relative;
  width: 100%;
  max-width: 318px;
  max-height: auto; /* Allow the height to adjust proportionally */
  float: left;
}

.embed-facebook2 {
  display: inline-flex;
  position: relative;
  width: 100%;
  max-width: 318px;
  max-height: auto; /* Allow the height to adjust proportionally */
  float: left;
}

.embed-vimeo {
  display: inline-flex;
/* You can assign any css properties */
}

.embed-dailymotion {
  display: inline-flex;
/* You can assign any css properties */
}
```

CSS for Angular:

-------

```css
/* example/component.css */

::ng-deep .embed-tiktok {
  display: inline-flex;
  position: relative;
  width: 100%;
  max-width: 370px;
  max-height: 560; 
  float: left;
}

::ng-deep .embed-twitter {
  display: inline-flex;
  position: relative;
  width: 100%;
  max-width: 300px;
  float: left;
}
::ng-deep .embed-youtube {
  position: relative;
  display: inline-flex;
  width: 100%;
  max-width: 640px;
  max-height: 360; /* Allow the height to adjust proportionally */
  float: left;
}
::ng-deep .embed-facebook {
  display: inline-flex;
  position: relative;
  width: 100%;
  max-width: 318px;
  max-height: auto; /* Allow the height to adjust proportionally */
  float: left;
}

::ng-deep .embed-facebook2 {
  display: inline-flex;
  position: relative;
  width: 100%;
  max-width: 318px;
  max-height: auto; /* Allow the height to adjust proportionally */
  float: left;
}

::ng-deep .embed-vimeo {
  display: inline-flex;
/* You can assign any css properties */
}

::ng-deep .embed-dailymotion {
  display: inline-flex;
/* You can assign any css properties */
}
```

