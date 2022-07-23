import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { getAllPlayers } from '../.husky/api/playerData';
import PlayerCard from '../components/PlayerCard';

function Home() {
  const [players, setPlayers] = useState([]);

  const { user } = useAuth();

  const getPlayers = () => {
    getAllPlayers(user.uid).then(setPlayers);
  };

  useEffect(() => {
    getPlayers();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="text-center my-4">
      <Link href="/player/new" passHref>
        <Button>Add A New Player</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {players.map((player) => (
          <PlayerCard key={player.firebaseKey} playerObj={player} onUpdate={getPlayers} />
        ))}
      </div>

    </div>
  );
}

export default Home;
