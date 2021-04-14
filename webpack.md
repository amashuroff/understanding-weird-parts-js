## What is webpack?

- webpack is a thing called bundler, that bundles up all different types of files for usage in the browser
- before it bundles up files, it can be very useful for compiling and transforming them

### Webpack loaders

- it's a key to handle all different types of files besides javascript in a project, like a css loader that will bundle up all different css files into a single one

### Cache busting and Plugins

#### Cache

- we bundle up the project, and run it in the browser. Assume we have changed some parts of the project and re-bundled it. The thing is that browser maybe has cached some of the files, thus we may not see the changes applied, since it is going to load the old (cached file)

- Webpack busts cache, or prevents caching, by appending a random string (hash) to the end of the file (in the middle, or somewhere)
- What is more important that webpack makes the hash string based on the content in the file, so, if nothing has changed, here you go, you can cache the file

#### Plugins

- Useful PLUG-INS that can customize the build of the project in a variety of ways

- for example WebpackHTML plugin, generates the HTML for us (or from provided template), and can be especially useful, when we have a content hash string in our (main.js file, that changes after every build)
