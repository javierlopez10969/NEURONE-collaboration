# Collaboration for NEURONE

## Install Instructions

### For Development

### For the backend 💻
<p align="center"><a target="_blank"><img src="https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_960_720.png" width="150"></a></p>

### Requiriments

* Npm
* Nodejs
* mongodb
* MongoDB TOOLS (Only for windows)


1. Open Server folder and run `npm install` (this is needed only once)
2. Now run `npm start`. Edit any files you need, they will be live-reloaded in your local web browser

### For the Frontend 👓
<p align="center"><a target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/768px-Vue.js_Logo_2.svg.png?20170919082558" width="150"></a></p>

### Requiriments

* Npm
* Nodejs
* Vue cli

1. Open th client folder and run `npm install` or `npm i`  (this is needed only once)
2. Now run `npm run serve`. Edit any files you need, they will be live-reloaded in your local web browser
3. When you are done, just abort the terminal (i.e. `CTRL+C`)

## Build as web Component

To build this vue-app as webcomponent and use it in any framewrok or web project you need to run :

npm run wc-build

Now copy the widget-btn-min.js and copy in your project. Import de script as this: 

### Setup the enviroments for your Web component : props

<!-- Include the propety without a value is equals to `true` -->
<widget-btn bookmarks chat=false ></widget-btn>


| Prop | Type | Default | Description |
|------|------|---------|-------------|
| chat| Boolean | true | Allows chat module|
| bookmarks| Boolean | true | Allows bookmarks module|
| activity| Boolean | true | Allows activity module|
| tasks| Boolean | true | Allows tasks module|
| settings| Boolean | true | Allows settings module|

Non prop attributes are mapped to the inner input element.


## Instructions for install dependencies 📖

#### Installing NPM 

Run the following command to install NPM on Linux distributions:

    $ sudo apt install npm

#### Installing Node

Run the following command to install NPM on Linux distributions:

    $ sudo apt install nodejs

#### Installing Vue Cli

Run the following command to install NPM on Linux distributions:

    $ npm install -g @vue/cli

#### Installing MongoDB

Run the following command to install NPM on Linux distributions:

    $ sudo apt install -y mongodb
