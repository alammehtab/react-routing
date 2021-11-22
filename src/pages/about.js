import * as React from 'react'
import {Link} from 'react-router-dom'

function About() {
  return (
    <>
      <main>
        <h2>Welcome to the ABOUT page!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default About
