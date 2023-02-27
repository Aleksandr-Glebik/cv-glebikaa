import React from 'react';
import Home from './pages/Home/Home';
import SkillsComp from './pages/Skills/SkillsComp';
import About from './pages/About/About';
import './scss/app.scss';

const App: React.FC = () => {
  return (
    <div className='wrapper'>
      <Home />
      <SkillsComp />
      <About />
    </div>
  );
}

export default App;
