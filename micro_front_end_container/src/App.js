// import React, { useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { createBrowserHistory } from "history";
// import MicroFrontend from "./MicroFrontend";

// // import "./App.css";

// // const defaultHistory = createBrowserHistory();

// // const {
// //   mfe1_HOST: mfe1,
// //   mfe2_HOST: mfe2,
// // } = process.env;

// // function Header() {
// //   return (
// //     <div className="banner">
// //       <h1 className="banner-title">&#128571; Cats and Dogs &#128021;</h1>
// //       <h4>Random pics of cats and dogs</h4>
// //     </div>
// //   );
// // }

// // function Dogs({ history }) {
// //   return <MicroFrontend history={history} host={mfe1} name="Dogs" />;
// // }

// // function Cats({ history }) {
// //   return <MicroFrontend history={history} host={mfe2} name="Cats" />;
// // }


// // function Home({ history }) {
// //   const [input, setInput] = useState("");

// //   const handleOnClick = () => {
// //     history.push(`/cat/${input}`);
// //   };

// //   return (
// //     <div>
      
// //     </div>
// //   );
// // }

// // function App() {
// //   return (
// //     <BrowserRouter>
// //       <React.Fragment>
// //         <Routes>
// //           <Route exact path="/" component={Home} />
// //         </Routes>
// //       </React.Fragment>
// //     </BrowserRouter>
// //   );
// // }

// // export default App;

// import logo from './logo.svg';
// import './App.css';
// import MicroFrontend from "./MicroFrontend";

// const {
//   mfe1_HOST: mfe1,
//   mfe2_HOST: mfe2,
// } = process.env;

// function Dogs({ history }) {
//   return <MicroFrontend history={history} host={mfe1} name="Dogs" />;
// }

// function Cats({ history }) {
//   return <MicroFrontend history={history} host={mfe2} name="Cats" />;
// }

// function App() {
//   return (
//     <><div className="App">
//       <header className="App-header">
//         <a
//         >
//           This is MFE3!
//         </a>
//       </header>
//     </div><Dogs /></>
//   );
// }

// export default App;
