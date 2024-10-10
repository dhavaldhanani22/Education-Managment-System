import React from 'react';

const Error = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8d7da', 
    color: '#721c24', 
    fontSize: '2em',
    fontWeight: 'bold',
  };

  return (
    <div style={containerStyle}>
      <div>
        {/* <p>Oops! Something went wrong.</p>
        <p>404 Page Not Found</p> */}
      </div>
    </div>
  );
};

export default Error;
