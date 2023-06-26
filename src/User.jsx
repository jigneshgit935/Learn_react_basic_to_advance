import React from 'react';

const User = () => {
  return (
    <>
      <div>
        <h1>Hello Jsx</h1>
        <p>Description</p>
        {2 * 2}
      </div>
    </>
  );

  //   return React.createElement(
  //     'h1',
  //     null,
  //     'Hello JSX!!',
  //     React.createElement('p', null, 'Description!!')
  //   );
};

export default User;
