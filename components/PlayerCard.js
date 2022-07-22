import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function PlayerCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Name</Card.Title>
        <Card.Text>
          Position:
        </Card.Text>
        <Button variant="success">Edit</Button>
        <Button variant="danger">Delete</Button>
      </Card.Body>
    </Card>
  );
}
