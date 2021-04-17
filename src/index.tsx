import React from 'https://esm.sh/react@17.0.1';
import ReactDom from 'https://esm.sh/react-dom@17.0.1';

function App() {
  return (
    <div>Helle, Deno Land!</div>
  )
}

// @ts-ignore
ReactDom.render(<App />, document.getElementById('root'));
