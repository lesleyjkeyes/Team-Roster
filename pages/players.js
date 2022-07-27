import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button, Form } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { getAllPlayers } from '../.husky/api/playerData';
import PlayerCard from '../components/PlayerCard';

function Players() {
  const { user } = useAuth();
  const [players, setPlayers] = useState([]);
  const [searchTerm, setSearchTerm] = React.useState('');
  // const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

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
        <Button variant="dark">Add A New Player</Button>
      </Link>
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          value={searchTerm}
          onChange={handleChange}
        />
        <Button variant="dark">Search</Button>
      </Form>
      <div className="d-flex flex-wrap">
        {players.map((player) => (
          <PlayerCard key={player.firebaseKey} playerObj={player} onUpdate={getPlayers} />
        ))}
      </div>

    </div>
  );
}

export default Players;
