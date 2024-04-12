import Nav from 'react-bootstrap/Nav';

export const Navbar = () => {
  return (
    <Nav
      activeKey='/home'
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href='/home'>About Me</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey='link-1'>Coding</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey='link-2'>Art</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey='link-2'>Sport</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};
