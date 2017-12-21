import React from 'react';

import Styles from './Card.css';

function Card ({name, email, catchPhrase}) {
  return (
    <div className={Styles.Card}>
      <img src='https://api.adorable.io/avatars/150/email.png'/>
      <span>{catchPhrase}</span>
      <span>{name}</span>
      <span>{email}</span>
    </div>
  )
}

export default Card;
