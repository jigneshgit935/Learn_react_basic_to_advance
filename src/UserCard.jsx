import React from 'react';

const UserCard = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h2>Age: {props.age}</h2>
    </div>
  );
};

export default UserCard;

// We can use both Format

// import React from 'react';

// const UserCard = ({ name, age }) => {
//   return (
//     <div>
//       <h1>Name: {name}</h1>
//       <h2>Age: {age}</h2>
//     </div>
//   );
// };

// export default UserCard;
