// import React from 'react';
// import ReactDOM from 'react-dom/client';

// // const site = (
// //   <div>
// //     <img src="../public/logo192.png" alt="logo" width="100px" height="100px" />
// //     <header>
// //       <h1>Fan facts about react</h1>
// //     </header>
// //     <ul>
// //       <li>first</li>
// //       <li>second</li>
// //       <li>third</li>
// //       <li>forth</li>
// //       <li>fifth</li>
// //     </ul>
// //   </div>
// // )

// function Page() {
//   return (
//     <div>
//       <img src="../public/logo192.png" alt="logo" width="100px" height="100px" />
//       <header>
//         <h1>Fan facts about react</h1>
//       </header>
//       <ul>
//         <li>first</li>
//         <li>second</li>
//         <li>third</li>
//         <li>forth</li>
//         <li>fifth</li>
//       </ul>
//     </div>
//   )
// }
  


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   // site
//   Page()
// );

import React from "react";
import ReactDOM from 'react-dom/client';
import './style.css'
import Header from "./comp/Header";
import Content from "./comp/Content";
import Footer from "./comp/Footer";

function Page() {
  return (
    <>
      <Header/>
      <Content/>
      <Footer/>  
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Page/>)