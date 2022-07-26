import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { viewTeamDetails } from '../../.husky/api/mergedData';
import { getTeamPlayers } from '../../.husky/api/teamData';
import PlayerCard from '../../components/PlayerCard';

export default function ViewTeam() {
  const [teamDetails, setTeamDetails] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    viewTeamDetails(firebaseKey).then(setTeamDetails);
  }, [firebaseKey]);

  const [players, setPlayers] = useState([]);

  useEffect(() => {
    getTeamPlayers(firebaseKey).then((setPlayers));
  }, [firebaseKey]);

  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="text-white ms-5 details">
        <h5>
          {teamDetails.teamName}
        </h5>
      </div>
      <div className="d-flex flex-wrap">
        {players.map((player) => (
          <PlayerCard key={player.firebaseKey} playerObj={player} />
        ))}
      </div>
    </div>
  );
}
