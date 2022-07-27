import PropTypes from 'prop-types';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import { deleteTeamPlayers } from '../.husky/api/mergedData';
import { getTeamPlayers } from '../.husky/api/teamData';

export default function TeamCard({ teamObj, onUpdate }) {
  const [toggle, setToggle] = useState(false);

  const deleteThisTeam = () => {
    if (window.confirm(`Delete ${teamObj.teamName}?`)) {
      getTeamPlayers(teamObj.firebaseKey).then(() => {
        deleteTeamPlayers(teamObj.firebaseKey).then(() => onUpdate());
      });
    }
  };
  const handleToggle = () => {
    if (toggle === false) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={teamObj.imageUrl} alt={teamObj.teamName} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>{teamObj.teamName}</Card.Title>
        <Link href={`/team/${teamObj.firebaseKey}`} passHref>
          <Button variant="dark" style={{ margin: '5px' }}>Info</Button>
        </Link>
        <Link href={`/team/edit/${teamObj.firebaseKey}`} passHref>
          <Button variant="dark">Edit</Button>
        </Link>
        <Button variant="danger" style={{ margin: '5px' }} onClick={deleteThisTeam}>Delete</Button>
        <label className="switch">
          <input type="checkbox" onClick={handleToggle} />
          <span className="slider round" />
        </label>
        <h6>
          {toggle === false ? 'Public' : 'Private'}
        </h6>
      </Card.Body>
    </Card>
  );
}

TeamCard.propTypes = {
  teamObj: PropTypes.shape({
    imageUrl: PropTypes.string,
    teamName: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
