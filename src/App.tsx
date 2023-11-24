import React from 'react'
import './App.css'
// https://main.ds369j9rpttlk.amplifyapp.com/
function App() {
  return (
    <div className="App">
      <nav>
        {/*<a href={'#'}>Home</a>*/}
        {/*<a href={'#'}>About</a>*/}
        {/*<a href={'#'}>Experience</a>*/}
        {/*<a href={'#'}>Contact</a>*/}
        {/*<code>Built by &lt;Clint /&gt;</code>*/}
        <code
          aria-label={'spread the love'}
          dangerouslySetInnerHTML={{ __html: `{...♥️}` }}
        />
      </nav>
      <header className="App-header">
        <section>
          <h1>Hello</h1>
          {/*<h2>Welcome to cmil.me</h2>*/}
          <p>I'm Clint Milner. Web Developer.</p>
          {/*<p>*/}

          {/*</p>*/}
        </section>
      </header>
    </div>
  )
}

export default App
