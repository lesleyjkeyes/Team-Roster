/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Image from 'next/dist/client/image';
import Link from 'next/link';
import {
  Navbar, Container, Nav, Button,
} from 'react-bootstrap';
import { signOut } from '../utils/auth';
import logo from './images/trueAmerican.jpg';

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="orange" variant="dark">
      <Container>
        <Link passHref href="/">
          <Image
            src={logo}
            width={75}
            height={75}
          />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <Link passHref href="/players">
              <Nav.Link>Players</Nav.Link>
            </Link>
            <Link passHref href="/teams">
              <Nav.Link>Teams</Nav.Link>
            </Link>
            <Link passHref href="/player/new">
              <Nav.Link>Add New Player</Nav.Link>
            </Link>
            <Link passHref href="/team/new">
              <Nav.Link>Add New Team</Nav.Link>
            </Link>
            <Link passHref href="/profile">
              <Nav.Link>Profile</Nav.Link>
            </Link>
            <Button variant="dark" onClick={signOut}>Sign Out</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
