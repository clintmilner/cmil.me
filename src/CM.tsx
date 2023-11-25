import React from 'react'
import './styles.css'

const $Title$ = () => {
  return (
    <div className={'app'}>
      {/*<header>*/}
      {/*  <code dangerouslySetInnerHTML={{ __html: `&lt;CM /&gt;` }} />{' '}*/}
      {/*</header>*/}
      <section className={'hero'}>
        <h1>Hello</h1>
        <small>I'm Clint Milner. Web Developer.</small>
      </section>
      <div className={'content'}>
        {/*<aside>*/}
        {/*  <nav>*/}
        {/*    <a href={'#'}>Hello </a>*/}
        {/*    <a href={'#'}>About Me </a>*/}
        {/*    <a href={'#'}>Experience </a>*/}
        {/*    <a href={'#'}>Contact </a>*/}
        {/*  </nav>*/}
        {/*</aside>*/}

        {/*<main>*/}
        {/*  <section className={'about-me'}>about me</section>*/}
        {/*  <section className={'experience'}>experience</section>*/}
        {/*  <section className={'contact'}>contact</section>*/}
        {/*</main>*/}
      </div>
      <footer>
        <p>Spread the Love</p>
        <code dangerouslySetInnerHTML={{ __html: `{...♥️}` }} />
      </footer>
    </div>
  )
}

export default $Title$
