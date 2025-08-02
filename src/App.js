import './App.css';
import {NavBar} from './components/NavBar';
import {Banner} from './components/Banner';
import {Skills} from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Experience } from './components/Experience'; // YENİ: Experience bileşenini import ettik

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Experience /> {/* YENİ: Experience bileşenini buraya ekledik */}
      <Contact />
    </div>
  );
}

export default App;
