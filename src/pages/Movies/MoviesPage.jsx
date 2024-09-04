import React from 'react';
import { Alert, Col, Container, Row, Spinner } from 'react-bootstrap';
import { useSearchMovieQuery } from '../../hooks/useSearchMovie';
import { useSearchParams } from 'react-router-dom';
import MovieCard from '../../common/MovieCard/MovieCard';

// 경로
// navbar 직접클릭 -> popularMovie를 보여줌
// keyword 입력 -> keyword와 관련된 영화를 보여줌
export default function MoviesPage() {
  const [query, setQuery] = useSearchParams();
  const keyword = query.get('q');
  const { data, isLoading, isError, error } = useSearchMovieQuery(keyword);

  if (isLoading) {
    <Spinner animation='border' />;
  }

  if (isError) {
    <Alert variant={'danger'}>{error.message}</Alert>;
  }

  return (
    <Container>
      <Row>
        <Col lg={4} xs={12}>
          filter
        </Col>
        <Col lg={8} xs={12}>
          <Row>
            {data?.results.map((movie, idx) => (
              <Col lg={3} xs={6} style={{ marginBottom: '1rem' }}>
                <MovieCard key={idx} movie={movie} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
