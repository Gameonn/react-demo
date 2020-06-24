import React from 'react';

const UserInput = (props) => {
      const inputStyle = {
        border: '2px solid red',
        borderRadius: '10px'
      }
      return (
            <div>
              <input style={inputStyle} type="text" onChange={props.changed} value={props.username}/>
            </div>
      );

}

export default UserInput;
