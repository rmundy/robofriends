import * as React from 'react';
import { ICardProps } from './CardProps';

const Card: React.SFC<ICardProps> = ({email, id, name, userName}) => {
return (
  <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
    <img alt='photo' src={`https://robohash.org/${userName}${id}?200x200`} />
    <div>
      <h2>{userName}</h2>
      <p>{id}</p>
      <p>{name}</p>
      <p>{email}</p>
    </div>
  </div>
)
}

export default Card;
