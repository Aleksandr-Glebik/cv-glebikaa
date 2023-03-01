import React from 'react';
import Home from './pages/Home/Home';
import SkillsComp from './pages/Skills/SkillsComp';
import About from './pages/About/About';
import Contacts from './pages/Contacts/Contacts';
import Projects from './pages/Projects/Projects';
import Languages from './pages/Languages/Languages';
import './scss/app.scss';

const App: React.FC = () => {
  return (
    <div className='wrapper'>
      <Home />
      <SkillsComp />
      <About />
      <Contacts />
      <Projects />
      <Languages />
    </div>
  );
}

export default App;
