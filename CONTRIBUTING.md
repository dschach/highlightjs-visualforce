# Contributing Code

## Setup

To build highlightjs-visualforce, you'll need the latest long term support (LTS) release of Node and npm.
We recommend nvm to manage multiple active Node versions.

Start by cloning the source from GitHub:

    $ git clone https://github.com/highlightjs/highlightjs-visualforce.git

Next, install the dependencies using `npm`:

    $ npm i

## Test

To execute the tests, open a terminal and type:

    $ npm t

## Build the distribution

To generate the `dist` file, we need to clone the [highlight.js](https://github.com/highlightjs/highlight.js) main repository:

    $ git clone https://github.com/highlightjs/highlight.js
    $ cd highlight.js

Then, install the dependencies:

    $ npm i

Create an `extra` directory and clone the [highlightjs-visualforce](https://github.com/highlightjs/highlightjs-visualforce) repository in it:

    $ mkdir extra
    $ cd extra
    $ git clone https://github.com/highlightjs/highlightjs-visualforce
    $ cd ..

Now we are ready to generate the `dist` file.
Open a terminal and type:

    $ node  --stack-size=65500  ./tools/build.js -t cdn

The generated file will be available in both `build/languages/visualforce.min.js` and `extra/visualforce/dist/visualforce.min.js`.
