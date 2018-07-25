import * as React from 'react';
import { IHelloProps } from './HelloProps';

const Hello = (props: IHelloProps) => {
  return (
      <div className="f1 tc">
        <h1>{props.greeting}</h1>
      </div>
    )
}

export default Hello;