import React from 'react';
import { Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
    return (
        <Container>
            <Image
                src='https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg'
                rounded
            />
            <h1 style={{ textAlign: 'center' }}>Page Is Not Founded😥</h1>
            <div style={{ textAlign: 'center', marginTop: 16 }}>
                <Link to='/' style={{ fontWeight: 'bold' }}>
                    Go To Home Page
                </Link>
            </div>
        </Container>
    );
}
