import React from 'react';
import Image from 'next/image';
import { Button } from 'react-bootstrap';
import { signIn } from '../utils/auth';
import logo from './images/trueAmerican.jpg';

function Signin() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <Image src={logo} alt="True American" />
      <Button type="button" variant="dark" size="lg" className="copy-btn" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Signin;
