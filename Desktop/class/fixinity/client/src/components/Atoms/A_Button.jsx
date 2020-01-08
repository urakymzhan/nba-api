import React from 'react';

const A_Button = (props) => {

    return (
      <button
        className={props.className}
      >
        {props.value}
      </button>
    );
  };

  A_Button.propTypes = {
     //
  };

  export default A_Button;