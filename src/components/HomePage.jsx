// const HomePage = () => {
//   return (
//     <>
//       <div>
//         <h1>Home Page</h1>
//       </div>

//       <p>this is some stuff</p>
//     </>
//   );
// };
// export default HomePage;

// HomePage.js
import React from 'react';
import Products from "./Products"; // Import Products Component

const HomePage = () => {
  return (
    <>
      <div>
        <h1>Home Page</h1>
      </div>
      <p>this is some stuff</p>
      <Products /> {/* Add Products Component here */}
    </>
  );
};

export default HomePage;