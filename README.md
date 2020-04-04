# Minimal Working Example for C++ -> Wasm + Webpack + React

I struggled finding a working example for using some WebAssembly compiled with
Emscripten in a basic Create React App (CRA).
This repository is mainly for myself to have a working setup to refer to.

This is based on a CRA application, so the first thing you want to do is most
probably run `yarn install`.

## C++ sources

A very simple `hello.cpp` file is located in `wasm`, it defines a function `func`
that performs an add over two integers, and output some text to stdout.

The code can be compiled to wasm by running `yarn build:wasm`.
Make sure `em++` is in your `$PATH` (please refer to Emscripten doc).
The command will emit the compiled files in `src/wasm` (`hello.js`, `hello.wasm`)
where they will be required in our application.

I used `em++` version 1.39.11 at the time of writing this example.
I've included some pre-built files in the `src/wasm` directory.

## CRA setup

Just using CRA doesn't quite work, so I used [craco](https://github.com/gsoft-inc/craco)
to override some of the basic configurations.
Here are the few steps I needed to take and why:
  - the js emitted by `em++` contains an importMeta. Because this is some kind
of experimental syntax, I added the webpack plugin
[`@open-wc/webpack-import-meta-loader`](https://www.npmjs.com/package/@open-wc/webpack-import-meta-loader)
to take care of the import.
  - the default EsLint configuration chokes on the js emitted by `em++`, I added
an ignorePatterns rule to the default configuration, so that compilation succeeds.
  - to make webpack properly handle wasm files, I added a custom rule to make it
process wasm files through file-loader, with type `javascript/auto`.
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
clicking the button again should display "Hi there" and "7" in the console log.

The small code in the app was very much inspired by
[this blog post](https://prestonrichey.com/blog/react-rust-wasm/), which achieve
something very similar to this repo, but using Rust instead of C++.
