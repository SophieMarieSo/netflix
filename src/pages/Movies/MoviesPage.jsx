import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Alert, Col, Container, Row, Spinner } from 'react-bootstrap';
import { useSearchMovieQuery } from '../../hooks/useSearchMovie';
import { useSearchParams } from 'react-router-dom';
import MovieCard from '../../common/MovieCard/MovieCard';

// 경로
// navbar 직접클릭 -> popularMovie를 보여줌
// keyword 입력 -> keyword와 관련된 영화를 보여줌
export default function MoviesPage() {
  const [query, setQuery] = useSearchParams();
  const [page, setPage] = useState(1);
  const keyword = query.get('q');
  const { data, isLoading, isError, error } = useSearchMovieQuery(
    keyword,
    page
  );

  if (isLoading) {
    <Spinner animation='border' />;
  }

  if (isError) {
    <Alert variant={'danger'}>{error.message}</Alert>;
  }

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };

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
          <ReactPaginate
            nextLabel='next >'
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={data?.total_pages} // 전체페이지 수
            previousLabel='< previous'
            pageClassName='page-item'
            pageLinkClassName='page-link'
            previousClassName='page-item'
            previousLinkClassName='page-link'
            nextClassName='page-item'
            nextLinkClassName='page-link'
            breakLabel='...'
            breakClassName='page-item'
            breakLinkClassName='page-link'
            containerClassName='pagination'
            activeClassName='active'
            renderOnZeroPageCount={null}
            forcePage={page - 1}
          />
        </Col>
      </Row>
    </Container>
  );
}
