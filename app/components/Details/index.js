/**
 *
 * Details
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedDate } from 'react-intl';
import bookPhoto from 'images/book.jpg';
import LoadingIndicator from 'components/LoadingIndicator';
import H2 from './H2';
import Text from './Text';
import H3 from './H3';

const StyledPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  max-height: 400px;
  max-width: min-content;
  float: left;
`;
const Wrapper = styled.div`
  display: inline-block;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: white;
  text-align: center;
  width: 100%;
`;
const InfoWrapper = styled.div`
  display: inline-block;
  background-color: white;
  text-align: left;
  margin-top: 30px;
  margin-bottom: auto;
  width: 30%;
`;
function Details({ loading, error, book }) {
  if (loading) {
    return <LoadingIndicator />;
  }

  if (error !== false) {
    return <h2>Something went wrong!</h2>;
  }

  if (book) {
    const writer = book.writer || { firstName: '', lastName: '' };
    const category = book.category || { name: '' };

    return (
      <div>
        <Wrapper>
          <div>
            <StyledPhoto src={bookPhoto} alt="Book Cover" />
          </div>
          <h1>{book.title}</h1>
          <H2>
            - {writer.firstName} {writer.lastName} -
          </H2>
          <hr />
          <InfoWrapper>
            <H3>
              Category: <Text>{category.name}</Text>
            </H3>
            <br />
            <H3>
              Published:{' '}
              <Text>
                <FormattedDate value={new Date(book.publishingDate)} />
              </Text>
            </H3>
            <br />
            <H3>
              Number of Pages: <Text>{book.pageNumber}</Text>{' '}
            </H3>
            <br />
            <H3>
              Sold: <Text>{book.unitsSold}</Text>
            </H3>
            <br />
            <hr />
            <br />
            <H3>
              <b>
                Price: <Text>{book.price}</Text>
              </b>
            </H3>
          </InfoWrapper>
        </Wrapper>
      </div>
    );
  }
  return null;
}

Details.propTypes = {
  book: PropTypes.any,
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

export default Details;
