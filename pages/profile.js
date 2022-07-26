import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useAuth } from '../utils/context/authContext';
import { signOut } from '../utils/auth';

function BasicExample() {
  const { user } = useAuth();
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{user.displayName}</Card.Title>
        <Card.Text>
          Email: {user.email}
        </Card.Text>
        <Button type="button" variant="dark" onClick={signOut}>Sign Out</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
