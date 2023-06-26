import React from 'react';

const UserCard = (props) => {
  //   const { name, age, email } = props;

  console.log(props);
  return (
    <div>
      <h1>
        {' '}
        Name: <br />
        {props.name}
      </h1>

      {/* <h3>Name: {name}</h3>
      <p>Age: {age}</p>
      <p>Email: {email}</p> */}
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
