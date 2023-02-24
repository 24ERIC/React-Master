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









// import React, { Component } from 'react';
// import AppBar from '@material-ui/core/AppBar';

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <AppBar color="primary" position="static">
//           <h1>My header</h1>
//         </AppBar>

//       </div>
//     );
//   }
// }
// export default App;














import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography'


class App extends Component {
  render() {
    return (
      <div>
        <AppBar color="primary" position="static">
          <Toolbar>
            <TypoGraphy variant="title"
              color="inherit"
            >
              My header
           </TypoGraphy>
          </Toolbar>
        </AppBar>

      </div>
    );
  }
}
export default App;