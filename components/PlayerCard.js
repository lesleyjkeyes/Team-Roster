import PropTypes from 'prop-types';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { deleteSinglePlayer } from '../.husky/api/playerData';

export default function PlayerCard({ playerObj, onUpdate }) {
  const deleteThisPlayer = () => {
    if (window.confirm(`Delete ${playerObj.name}?`)) {
      deleteSinglePlayer(playerObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={playerObj.imageUrl} alt={playerObj.name} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>{playerObj.name}</Card.Title>
        <Card.Text>
          Position: {playerObj.position}
        </Card.Text>
        <Link href={`/player/edit/${playerObj.firebaseKey}`} passHref>
          <Button variant="info" style={{ margin: '5px' }}>EDIT</Button>
        </Link>
        <Button variant="danger" style={{ margin: '5px' }} onClick={deleteThisPlayer}>Delete</Button>
      </Card.Body>
    </Card>
  );
}

PlayerCard.propTypes = {
  playerObj: PropTypes.shape({
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    position: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
