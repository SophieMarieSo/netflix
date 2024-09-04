import React, { useState } from 'react';
import { Button, Container, Form, Image, Nav, Navbar } from 'react-bootstrap';
import { Outlet, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function AppLayout() {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  return (
    <div>
      <Navbar expand='lg' bg='black' data-bs-theme='dark'>
        <Container fluid>
          <Navbar.Brand href='/'>
            <Image
              width={70}
              height={40}
              src='https://www.liderlogo.es/wp-content/uploads/2022/12/pasted-image-0-6-1024x576.png'
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav
              className='me-auto my-2 my-lg-0'
              style={{ maxHeight: '100px' }}
            >
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='/movies'>Movies</Nav.Link>
            </Nav>
            <Form
              className='d-flex'
              onSubmit={(e) => {
                e.preventDefault();
                navigate(`/movies?q=${keyword}`);
                setKeyword('');
              }}
            >
              <Form.Control
                type='search'
                placeholder='Search'
                className='me-2'
                aria-label='Search'
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />

              <Button variant='outline-danger' type='submit'>
                <FontAwesomeIcon icon={faSearch} />
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
}
