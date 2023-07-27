import React from 'react';

const Profile = () => {
  // example 1

  const isLoggedIn = true;

  // exxample2
  const items = ['apple', 'banana', 'orange'];

  const isAuthen = true;
  return (
    <>
      {/* exxample 1 */}
      {isLoggedIn ? <h2>Welcome User</h2> : <h1>Welcome Guest</h1>} <div></div>
      {/* example 2 */}
      <div>
        {items.length > 0 ? (
          <ul>
            {items.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        ) : (
          <p>No items to display</p>
        )}
      </div>
      {/* example 3 */}
      <div>
        {isAuthen && (
          <button onClick={() => console.log('Logout')}>Logout</button>
        )}
      </div>
    </>
  );
};

export default Profile;
