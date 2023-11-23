import React from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <nav>
        <a href={'#'}>Home</a>
        <a href={'#'}>About</a>
        <a href={'#'}>Experience</a>
        <a href={'#'}>Contact</a>
      </nav>
      <header className="App-header">
        <section>
          <h1>Hello</h1>
          {/*<h2>Welcome to cmil.me</h2>*/}
          <p>I'm Clint Milner. Web Developer.</p>
          {/*<p>*/}
          {/*  <code>Built by &lt;Clint /&gt;</code>*/}
          {/*</p>*/}
        </section>
      </header>
    </div>
  )
}

export default App
