import React from 'react';

import StyledCard from './__css__/Card';

function Card ({name, email, catchPhrase}) {
  return (
    <StyledCard>
      <img src='https://api.adorable.io/avatars/150/email.png'/>
      <span>{catchPhrase}</span>
      <span>{name}</span>
      <span>{email}</span>
    </StyledCard>
  )
}

export default Card;