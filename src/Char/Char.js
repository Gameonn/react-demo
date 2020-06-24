import React from 'react';

const Char = (props) => {
      const style = {
        display: 'inline-block',
        padding: '16px',
        margin: '16px',
        border: '1px solid black',
        textAlign: 'center'
      }
      return (
            <h5 style={style} onClick={props.deleteAction}>
              {props.character}
            </h5>
      );

}

export default Char;
