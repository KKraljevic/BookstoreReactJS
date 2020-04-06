import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 0;
  margin: 0;
  width: 100%;
  overflow: hidden;
`;

const Ul = styled.ul`
  list-style: none;
  margin: 0;
  width: 100%;
  max-height: 30em;
  padding: 0 1em;
`;

function List(props) {
  const ComponentToRender = props.component;
  console.log(props.items)
  let content = <div />;

  // If we have items, render them
  if (props.items!==undefined) {
    content = props.items.map(item => (
      <ComponentToRender key={item.id} item={item} />
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
