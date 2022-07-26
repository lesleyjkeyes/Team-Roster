import PropTypes from 'prop-types';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function TeamCard({ teamObj }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={teamObj.imageUrl} alt={teamObj.teamName} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>{teamObj.teamName}</Card.Title>

        <Link href={`/team/edit/${teamObj.firebaseKey}`} passHref>
          <Button variant="primary">Edit</Button>
        </Link>
        <Button variant="danger">Delete</Button>
        <Link href={`/team/${teamObj.firebaseKey}`} passHref>
          <Button variant="info">Info</Button>
        </Link>
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
  // onUpdate: PropTypes.func.isRequired,
};
