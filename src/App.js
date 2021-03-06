import React, { useState } from 'react';
import './App.css';
// this just loads stuff to load the wasm
import hello from './wasm/hello';

const Loaded = ({ wasm }) => <button onClick={() => console.log(wasm.func(1,6))}>Click me</button>;

const Unloaded = ({ loading, loadWasm }) => {
  return loading ? (
    <div>Loading...</div>
  ) : (
    <button onClick={loadWasm}>Load library</button>
  );
};

const App = () => {
  const [loading, setLoading] = useState(false);
  const [wasm, setWasm] = useState(null);
  const loadWasm = async () => {
    try {
      setLoading(true);
      const wasm = hello({
        onRuntimeInitialized: () => {
          setWasm(wasm);
        },
        // This overrides the default path used by the wasm/hello.js wrapper
        locateFile: () => require("./wasm/hello.wasm"),
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        {wasm ? (
          <Loaded wasm={wasm} />
        ) : (
          <Unloaded loading={loading} loadWasm={loadWasm} />
        )}
      </header>
    </div>
  );
};

export default App;
