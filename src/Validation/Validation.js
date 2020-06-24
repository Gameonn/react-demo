import React from 'react';

const Validation = (props) => {

      return (
            <div>
              <h3>{
                (props.inputTextLength<=5) ? 'Text too short' : 'Text long enough'
              }</h3>
            </div>
      );

}

export default Validation;
