
## Vue-Instagram (WIP!!)

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/built-with-swag.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-vue.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/makes-people-smile.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/winter-is-coming.svg)](https://forthebadge.com)

An application having some features similar to that of Instagram built on top of Vue.js

Access Live Application - https://vue-instagram.herokuapp.com/

## Instructions To Run:

### Traditional way:

``` npm install ```

``` cd src ```

``` vue serve ```

### Docker way:

```bash
$ docker build -t vue-instagram:local .
$ docker run -d -p 8888:80 --name vue-instagram vue-instagram:local
```

Then the app is exposed on your host using port `8888`.

To tear down the app:

```
$ docker stop vue-instagram
$ docker rm vue-instagram
```

## Application Features:
* Uploading files with the FileReader API
* Editing images with Instagram-like filters using the CSSGram library
* Enable drag-scrolling through elements with the vue-dragscroll library


![Alt Text](https://github.com/divyanshu-rawat/Vue-Instagram/blob/master/Assets/gif_one.gif)


![Alt Text](https://github.com/divyanshu-rawat/Vue-Instagram/blob/master/Assets/gif_two.gif)
