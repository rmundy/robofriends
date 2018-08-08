import * as React from 'react';

export const Scroll: React.SFC = (props) => {
  return (
    <div style={{overflowY: 'auto', border: '1px solid black', height: '800px'}}>
      {props.children}
    </div>
  )
}