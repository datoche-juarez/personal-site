// import logo from './logo.svg';
// import './App.css';

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

// export default App;



import React from "react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Home } from './Home.jsx';
import { About } from './About.jsx';
import  Contact  from './Contact.jsx';
import { NoMatch } from './NoMatch.jsx';
import { Layout } from './components/Layout.jsx';
import { NavigationBar } from './components/NavigationBar.js';
import { Jumbotron } from './components/Jumbotron.js';

function App() {
  return (
    <React.Fragment>
      <Router>
      <NavigationBar />
      <Jumbotron />
        <Layout>
          <Switch>
            <Route exact path= "/" component= {Home} />
            <Route path= "/about" component= {About} />
            <Route path= "/contact" component= {Contact} />
            <Route component= {NoMatch} />
          </Switch>
          </Layout>
        </Router>
    </React.Fragment>
  );
}

export default App;
