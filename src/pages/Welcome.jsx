import React from 'react'
import './welcome.css'

const Welcome = () => {
  return (
     <div className='welcome'>
      <h1>Välkommen till Todo-appen!</h1>
      <p>Här kan du hantera dina uppgifter och få saker gjorda.</p>
      <p>Starta med att skapa din egen lista.</p>
      <div className='welcome-img'>
        <img src="https://as2.ftcdn.net/v2/jpg/04/59/86/27/1000_F_459862700_blwVQ5me7hzE64Rfe40hX1yycwipwRw1.jpg" alt="Girl in a jacket" ></img>
      </div>
    </div>
    
  )
}

export default Welcome