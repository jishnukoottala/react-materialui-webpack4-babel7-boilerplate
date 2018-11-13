# React - Creating a boilerplate from scratch
### React-16.6,React-Router-Dom-4.3,Material-UI 3.4, Webpack 4.25, Babel-7.1


There are many more boilerplates in the world, but this one differs by its simplicity and focus on what it needs
This is a step by step guide to create a simple React Application which routes to different pages on user interaction.

Create a folder with name of your project, open command prompt
```shell 
npm init
```

 1. Installing webpack and webpack dev-server
 ```shell 
npm i webpack webpack-dev-server -save
```

2. Install webpack cli
```shell
npm install webpack-cli -D
```

3. Install Babel
Babel is needed to convert the ES6 code and JSX code to traditional old javascript, inorder to make it run across all the browsers
```shell
npm install --save-dev babel-loader @babel/core @babel/plugin-proposal-class-properties
```

4. Install React
```shell
npm i react react-dom react-router-dom –save
```

5. Install Material-UI
Material-UI is a popular framework that implements Google's Material Design using React Components
```sh
npm install @material-ui/core
```
6. Configuration file
Create a new file named ``` webpack.config.js ```

7. Install dotenv
dotenv is a module which takes environment variables from .env file into process.env.
``` npm install dotenv dotenv-webpack --save-dev```

8. Install css loaders for webpack as a dev dependency
``` npm i css-loader style-loader --save-dev ```

9. Install loaders for sass to process sass files as a dev dependency
 ``` npm i sass-loader node-sass --save-dev ```
10. Install babel presets
```sh 
npm install @babel/preset-env @babel/preset-react --save-dev
```
11. Create ```.bablerc``` configuration file in the root of your project

```json

{

"presets": [

"@babel/preset-env",

"@babel/preset-react"

],

"plugins": [

"@babel/plugin-proposal-class-properties"

]

  

}
```

12. Create an HTML file ``` index.html ``` in public folder
```
<!DOCTYPE  html>

<html>

<head>

<meta  charset="UTF-8">

<meta  name="viewport"  content="width=device-width, initial-scale=1">

<title>My React App</title>

</head>

<body>

<div  id="app"></div>

<script  src="/bundle.js"></script>

</body>

</html>
```
13.  Create entry point for react application (```app.js```) and render the top level component in app div in the html
```javascript
import  React, { Component } from  'react'

import {render} from  'react-dom';

export  default  class  App  extends  Component {

render() {

return (
		<div>
			<h1>Welcome to React</h1>
		</div>
		)
		}
}

render(<App  />, document.getElementById('app'));
```

14. Create all the configurations in the webpack config file
```javascript
require('dotenv').config()

var  path  =  require('path');

const  Dotenv  =  require('dotenv-webpack')
const  webpack  =  require('webpack');


module.exports  =  env=>{

const  isProduction  =  env  &&  env.production  !==  undefined

 
const  plugins  = [

new  Dotenv(),
new  webpack.HotModuleReplacementPlugin()
]

  return {

			entry:  './src/app.js',

			mode:isProduction?'production':'development',

			output: {

			path:  path.resolve(__dirname, 'public'),

			filename:  'bundle.js'

			},

			module: {

				rules: [{

				loader:  'babel-loader',

				test: /\.js$/,

				exclude: /node_modules/

					}, 
			
			{	test: /\.css$/,

				use: [

					'style-loader',

					'css-loader', //translates css into commonJS

					'sass-loader'  // compile Sass to CSS using node sass by default

					]

				}]

},
			devtool:  isProduction?'none':'cheap-module-eval-source-map',
			devServer: {

				contentBase:  path.join(__dirname, 'public'),

				historyApiFallback:  true  // this prevents the default browser full page refresh 		on form submission and link change
				port:8000,
				hot:  true, //enable hot module replacement feature
					}, //end of dev-server configuration

			plugins:plugins

			}

  

}
```

15.  Specify scripts in ```package.json ``` file
```javascript 
"scripts": {

"build": "webpack",

"start": "webpack-dev-server --open"

}
```
If all these steps are completed, the part 1 is completed, a basic skeleton of our react app is ready
you can run ``` npm run start``` which will open up our application in localhost:8000

### Part 2

#### Styling
1. Install webfontloader to self host custom fonts 
``` npm install webfontloader --save ```

2. Create a separate folder styles in root of the project and create ``` main.scss``` file
3. in ```index.js``` file import the desired font from google fonts, or any other library

```
import  WebFont  from  'webfontloader';
import  './styles/main.scss';
  
WebFont.load({

google: {

families: ['Niramit:300,400,500,600,700', 'sans-serif']

}

});
```

4.  Make a small modification in ```webpack.config.js``` to load scss files, as in this project I am going to use scss
```javascript 
test: /\.scss$/,

use: [

'style-loader',

'css-loader', //translates css into commonJS

'sass-loader'  // compile Sass to CSS using node sass by default

] 

```

Now comes the interesting part, we have to setup the material ui framework
5. Install Material -UI Framework
```
npm install @material-ui/core --save 
```

6. Install Material UI Icons library
``` 
npm install @material-ui/icons --save
```
Now its time to organize our project, React.js follows an atomic design approach, therefore we split everything into components
Lets take a pratical scenario for example, we are designing a web application for 'Alphoqua' , this web app needs a header and a Footer.
We need a header design first, we copy it form material-ui App Bar, 
7. Create a ``` Header.js``` component in the component folder and import it in ```app.js```
//put the image appbar 1 here

The default theme look sober and boring, why don't we create a theme by ourselves, it is posible in Material-UI
8. create a file to configure all the theme variables in a separate file in ```theme.js``` in config folder
```javascript 	
import { createMuiTheme } from  '@material-ui/core/es/styles'

  
  

const  theme  =  createMuiTheme({

				palette: {

				primary: {

				// light: will be calculated from palette.primary.main,

				main:  '#4a148c',

				dark:  '#12005e',

				// contrastText: will be calculated to contrast with palette.primary.main

				},

					secondary: {

					light:  '#c7a4ff',

					main:  '#9575cd',

					// dark: will be calculated from palette.secondary.main,

					contrastText:  '#000000',

						},

					// error: will use the default color

					},

  

		typography: {

				// Use any custom font instead of the default Roboto font.

				fontFamily: [

					'Niramit',

					'Arial',

					].join(','),

					},

});


export  default  theme;
```

