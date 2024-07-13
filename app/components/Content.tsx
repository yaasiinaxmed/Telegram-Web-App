import React from 'react';
import Game from './Game';

const Content: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen p-4 gap-4">
      <img src="./hero.png" alt="Hero" className="w-[60%]" />
      <Game />
    </div>
  );
};

export default Content;