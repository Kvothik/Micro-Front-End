// import logo from './logo.svg';
// import './App.css';
// import { mfe1, mfe2, mfe3 } from './microfrontends';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
import React, { ReactComponentElement } from 'react';

import {
  Route,
  Routes ,
} from 'react-router-dom';

import { HomePage } from './components/home-page';
import { Layout } from './components/layout';
import { MicroFrontendContainer } from './components/micro-frontend-container';
import { mfe1, mfe2, mfe3 } from './microfrontends';

export const App = (): ReactComponentElement<any> => {
  return (
    <Routes >
      <Layout>
        <Route path="/">
          <HomePage />
        </Route>
        {
          mfe1.map(microfrontend => (
            <Route path={microfrontend.relativeUrl} key={microfrontend.divId}>
              <MicroFrontendContainer microfrontend={microfrontend} />
            </Route>
          ))
        }
      </Layout>
    </Routes >
  );
};

