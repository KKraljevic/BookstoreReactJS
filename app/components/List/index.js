import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: fit-content;
  padding: 0;
  margin: 0;
  width: 100%;
`;

const Ul = styled.div`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  width: 100%;
  padding: 0 1em;
`;

function List(props) {
  const ComponentToRender = props.component;
  let content = <div />;

  // If we have items, render them
  if (props.items !== undefined) {
    content = props.items.map((item, index) => (
      <ComponentToRender key={index} item={item} />
    ));
  } else {
    // Otherwise render a single component
    content = <ComponentToRender />;
  }

  return (
    <Wrapper>
      <Ul>{content}</Ul>
    </Wrapper>
  );
}

List.propTypes = {
  component: PropTypes.elementType.isRequired,
  items: PropTypes.array,
};

export default List;
