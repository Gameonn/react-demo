import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
        return (
            <div className="UserOutput">
              <p>
                Donec aliquet ex quis arcu commodo lobortis. {props.username} username vitae tristique massa. Curabitur id rhoncus ex.
              </p>
              <p>
                Praesent convallis nulla congue, lobortis arcu ac, dignissim nunc.
              </p>

            </div>
      );

}

export default UserOutput;
