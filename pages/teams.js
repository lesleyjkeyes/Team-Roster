import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { getAllTeams } from '../.husky/api/teamData';
import TeamCard from '../components/TeamCard';

function Teams() {
  const [teams, setTeams] = useState([]);

  const { user } = useAuth();

  const getTeams = () => {
    getAllTeams(user.uid).then(setTeams);
  };

  useEffect(() => {
    getTeams();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="text-center my-4">
      <Link href="/team/new" passHref>
        <Button>Add A New Team</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {teams.map((team) => (
          <TeamCard key={team.firebaseKey} teamObj={team} onUpdate={getTeams} />
        ))}
      </div>

    </div>
  );
}

export default Teams;
