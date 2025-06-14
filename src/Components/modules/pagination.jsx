
// Pagination.js
import React from 'react';
import styled from 'styled-components';
import { useCrypto } from '../../Context/CryptoContext';

const PaginationC = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  margin-bottom: 100px;
`;

const PreviousButton = styled.button`
  width: 90px;
  text-align: center;
  background-color: #3874ff;
  color: #fff;
  border: none;
  padding: 10px 12px;
  border-radius: 5px;
  font-size: 1.1rem;
  cursor: pointer;
  opacity: ${(props) => (props.disabled ? 0.3 : 1)};
`;

const NextButton = styled.button`
  width: 80px;
  background-color: #3874ff;
  color: #fff;
  border: none;
  padding: 10px 12px;
  border-radius: 5px;
  font-size: 1.1rem;
  cursor: pointer;
  opacity: ${(props) => (props.disabled ? 0.3 : 1)};
`;

const Text = styled.p`
  display: inline-block;
  border: 1px solid #3874ff;
  width: 25px;
  text-align: center;
  border-radius: 5px;
  background-color: #3874ff;
  color: #fff;
`;

const PageNumber = styled.p`
  display: inline-block;
  border: 1px solid #3874ff;
  width: 25px;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
  color: ${(props) => (props.selected ? 'white' : '#3874ff')};
  background-color: ${(props) => (props.selected ? '#3874ff' : 'transparent')};
`;

function Pagination() {
  const { page, setPage } = useCrypto();

  const handlePrevious = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (page < 10) setPage((prev) => prev + 1);
  };

  return (
    <PaginationC>
      <PreviousButton onClick={handlePrevious} disabled={page === 1}>
        Previous
      </PreviousButton>
      <PageNumber selected={page === 1}>1</PageNumber>
      <PageNumber selected={page === 2}>2</PageNumber>
      {page > 2 && page < 9 && (
        <>
          <span>...</span>
          <Text>{page}</Text>
        </>
      )}
      <span>...</span>
      <PageNumber selected={page === 9}>9</PageNumber>
      <PageNumber selected={page === 10}>10</PageNumber>
      <NextButton onClick={handleNext} disabled={page === 10}>
        Next
      </NextButton>
    </PaginationC>
  );
}

export default Pagination;
