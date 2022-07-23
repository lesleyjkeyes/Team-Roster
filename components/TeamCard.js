import PropTypes from 'prop-types';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function TeamCard({ teamObj }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={teamObj.imageUrl} alt={teamObj.name} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>{teamObj.name}</Card.Title>

        <Link href={`/team/edit/${teamObj.firebaseKey}`} passHref>
          <Button variant="info">EDIT</Button>
        </Link>
        <Button variant="danger">Delete</Button>
      </Card.Body>
    </Card>
  );
}

TeamCard.propTypes = {
  teamObj: PropTypes.shape({
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  // onUpdate: PropTypes.func.isRequired,
};
