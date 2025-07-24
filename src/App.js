import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import ParticlesBackground from './components/ParticlesBackground';
import './App.css';
import './components/NavBar.css';
import './components/Banner.css';
import './components/Skills.css';
import './components/Projects.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <ParticlesBackground />
        <NavBar />
        <Banner />
        <Skills />
        <Projects />
    </div>
  );
}

export default App;
