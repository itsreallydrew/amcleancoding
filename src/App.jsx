import './App.css';
import { Route } from 'react-router';
import LandingPage from './components/LandingPage/LandingPage';
import Skills from './components/Skills/Skills'
import { Link } from 'react-router-dom';
import Projects from './components/Projects/Projects'
import SocialLinks from './components/SocialLinks/SocialLinks'
import Nav from './components/Nav/Nav';
import logo from './assets/personal-logo-no-bkgd.png'
import About from './components/About';

function App() {
  return (
    <div className='App'>
      <header>
      <Link to='/' >
      <img className='logo' src={logo} alt="" />
      </Link>
      <Nav />
      </header>
      <main>
      <Route exact path='/projects' component={Projects} />
      <Route exact path='/skills' component={Skills} />
      <Route exact path='/social-links' component={SocialLinks} />
      <Route exact path='/about' component={About} />
      <Route exact path='/' component={LandingPage}/>
      </main>
    </div>
  );
}

export default App;
