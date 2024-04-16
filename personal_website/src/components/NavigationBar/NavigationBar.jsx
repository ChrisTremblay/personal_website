import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import './NavigationBar.css';
import { Logo } from '../Logo/Logo';

export const NavigationBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand='lg' className='bg-body-tertiary'>
        <Container>
          <Navbar.Brand href='#home'>
            <Logo
              strokeColor={'#dfdfdf'}
              viewBox={1100}
              height={40}
              width={40}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav
              className='me-auto'
              activeKey='/home'
              onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            >
              <Nav.Item>
                <Nav.Link eventKey='#coding'>Coding</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='#art'>Art</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='#sport'>Sport</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
