import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Fixed Components
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import DataContext from './context/DataContext';

//Home page components
import Caraousel from './components/home/Caraousel';
import Options from './components/home/Options';
import Sidebar from './components/home/Sidebar';

//Components for initiating tools
import Notepad from './components/initiators/Notepad';
import Codepad from './components/initiators/Codepad';
import Videocall from './components/initiators/Videocall';
import NoteVideo from './components/initiators/NoteVideo';
import CodeVideo from './components/initiators/CodeVideo';
import Powerhouse from './components/initiators/Powerhouse';

function App() {
  return (
    <div className="App">
      <DataContext>
        <Router>
          <Navbar/>
          <div style={{marginTop: "56px"}}></div>
          <Switch>
            <Route path="/" exact>
              <Caraousel/>
              <div className="pt-5 ml-5 mr-3 mb-5">
                  <div className="row mx-0">
                  <Options/>
                  <Sidebar/>
                  </div>
              </div>
            </Route>
            <Route path="/videocall" component={Videocall} />
            <Route path="/notepad" component={Notepad} />
            <Route path="/codepad" component={Codepad} />
            <Route path="/note-video" component={NoteVideo} />
            <Route path="/code-video" component={CodeVideo} />
            <Route path="/powerhouse" component={Powerhouse} />
          </Switch>
          <Footer/>
        </Router>
      </DataContext>
    </div>
  );
}

export default App;
