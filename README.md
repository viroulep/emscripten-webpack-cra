# Minimal Working Example for C++ -> Wasm + Webpack + React

I struggled finding a working example for using some WebAssembly compiled with
Emscripten in a basic Create React App (CRA).
This repository is mainly for myself to have a working setup to refer to.

This is based on a CRA application, so the first thing you want to do is most
probably run `yarn install`.

## C++ sources

A very simple `hello.cpp` file is located in `wasm`, it propvides some basic examples:
  - a function `myadd` which simply add two integers, and output some text to stdout.
  - a class `Point` which is binded as a js object
  - a function `accumulatePoints` which adds the coordinates of each point in a
  vector, and return a point with the accumulated coordinates.

The purpose of this is simply to illustrate that you can use user-defined classes
and some function from the STL.

The code can be compiled to wasm by running `yarn build:wasm`.
Make sure `em++` is in your `$PATH` (please refer to Emscripten doc).
The command will emit the compiled files in `src/wasm` (`hello.mjs`, `hello.wasm`)
where they will be required in our application.

I used `em++` version 3.1.21 at the time of writing this example.
I've included some pre-built files in the `src/wasm` directory.

## CRA setup

Unlike the previous version of this repository (see [this tag](https://github.com/viroulep/emscripten-webpack-cra/releases/tag/em1.39-webpack4-react16)),
I could actually make this work without having to use craco thanks
to the awesome demo presented [here](https://github.com/bobbiec/react-wasm-demo/).

Here are the few steps I needed to take and why:
  - the js emitted by `em++` contains an importMeta. Emscripten now supports `-s USE_ES6_IMPORT_META=0` to prevent this.
  - the default EsLint configuration chokes on the js emitted by `em++`, I added
an ignorePatterns rule to the default configuration, so that compilation succeeds.
  - since this now uses webpack 5, it seems loading wasm files "just works" and
that no craco nor webpack loader tricks are needed.
  - by default the js emitted by `em++` will use a locateFile function which is
oblivious to any webpack settings. I solved this by overriding the `locateFile`
function when loading the module in the app. By returning the result of a `require`
function, the js wrapper is able to find the appropriate wasm file, as packed
by webpack (see `src/App.js`).

## Running the thing

It's a standard CRA app, so using `yarn start` will work just fine.
You can also try the "production" build using `yarn build`.
In both cases it will try first to compile the `hello.cpp` file to WASM.

I've added `serve` as a dev dependency, so running `yarn serve:build` should
build the app and serve it.

The default app's behavior is to show a button to load the wasm, when loaded
clicking the button again should display "Hi there", then "3",
then "Accumulation worked" in the console log.

Although the example has changed quite a bit, it should be mentioned that all
this was initially very much inspired by
[this blog post](https://prestonrichey.com/blog/react-rust-wasm/), which achieve
something very similar to this repo, but using Rust instead of C++.
