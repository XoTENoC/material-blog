# Material Blog

Here is one of my templates for a basic website with a blog and gallery. This template is free to use and will keep evoling over time. This template uses google material design. The docs for this repo can be found at material.io.

## Installation

Node js is need for this template.

### **Packages that are need for this template**
First install the **Material Ui**
```Bash
// with npm
npm install @material-ui/core
```

Next needed is webpack dev server and the link to the Npm page [here](https://www.npmjs.com/package/webpack-dev-server)

```bash
npm install webpack-dev-server --save-dev
```
Here are the rest of the dependancies including the two above all these can be found on the npm website for how to install. and the code below is in the package.json file.

```json
"devDependencies": {
    "@babel/core": "^7.9.0",
    "@babel/preset-env": "^7.9.0",
    "autoprefixer": "^9.7.4",
    "babel-loader": "^8.1.0",
    "css-loader": "^3.4.2",
    "extract-loader": "^5.0.1",
    "file-loader": "^6.0.0",
    "postcss-loader": "^3.0.0",
    "sass": "^1.26.3",
    "sass-loader": "^8.0.2",
    "webpack": "^4.42.0",
    "webpack-cli": "^3.3.11",
    "webpack-dev-server": "^3.11.0"
  }
```

## Usage

At the moment the the template isn't fully completed yet, as it is not fully commemted out yet and to create blog posts you have to manulay add them but other that that everything can be edited in the HTML and SCSS.

## Plans

I plan on using docker to the create a rest api to manage and the post for the blog and the photos for the gallery. I want to create a whole backend for the website so the use of the template and make all the changes they what with an easy simple login to the back end and create blog posts with a graphical interface.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](./LICENCE)