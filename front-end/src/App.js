import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

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


//Components for different tools
import Tool_Videocall from './components/tools/Tool_Videocall';
import Tool_Notepad from './components/tools/Tool_Notepad';
import Tool_Codepad from './components/tools/Tool_Codepad';
import Tool_Notevideo from './components/tools/Tool_Notevideo';
import Tool_Codevideo from './components/tools/Tool_Codevideo';
import Tool_Powerhouse from './components/tools/Tool_Powerhouse';
import Error from './components/Error';

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

            <Route path="/videocall" component={Videocall} exact/>
            <Route path="/notepad" component={Notepad} exact/>
            <Route path="/codepad" component={Codepad} exact/>
            <Route path="/note-video" component={NoteVideo} exact/>
            <Route path="/code-video" component={CodeVideo} exact/>
            <Route path="/powerhouse" component={Powerhouse} exact/>


            <Route path="/tools/videocall/:roomID" component={Tool_Videocall} />
            <Route path="/tools/notepad/:roomID" component={Tool_Notepad} />
            <Route path="/tools/codepad/:roomID" component={Tool_Codepad} />
            <Route path="/tools/note-video/:roomID" component={Tool_Notevideo} />
            <Route path="/tools/code-video/:roomID" component={Tool_Codevideo} />
            <Route path="/tools/powerhouse/:roomID" component={Tool_Powerhouse} />

            <Route  path="/error" component={Error} exact/>
            <Route component={Error}>
              <Redirect to="/error"></Redirect>
            </Route>
          </Switch>
          <Footer/>
        </Router>
      </DataContext>
    </div>
  );
}

export default App;
