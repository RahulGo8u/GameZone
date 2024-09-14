// app/page.tsx (or wherever you want the links)
import React from 'react';
import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Welcome to GameZone</h1>
      <Link href="/game/game1">Play Game 1</Link><br/>
      <Link href="/game/game2">Play Game 2</Link>
    </div>
  );
};

export default HomePage;
