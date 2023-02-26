import React from 'react';
import Home from './pages/Home/Home';
import SkillsComp from './pages/Skills/SkillsComp';
import './scss/app.scss';

const App: React.FC = () => {
  return (
    <div className='wrapper'>
      <Home />
      <SkillsComp />
    </div>
  );
}

export default App;
