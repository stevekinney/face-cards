import React from 'react';

import Card from './Card';

function CardList({ users }) {
  return (
    <div>
      {users.map(({ name, email, company, id }) => {
        return (
          <Card catchPhrase={company.catchPhrase} email={email} name={name} />
        );
      })}
    </div>
  );
}

export default CardList;
