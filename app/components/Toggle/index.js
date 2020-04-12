/**
 *
 * Toggle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Select from './Select';
import Option from './Option';

function Toggle(props) {
  let content = <option></option>;

  // If we have items, render them
  if (props.values) {
    content = props.values.map(value => (
      <option key={value.id} value={value}></option>
    ));
  }

  return (
    <Select value={props.value} onChange={props.onToggle}>
      {content}
    </Select>
  );
}

Toggle.propTypes = {
  onToggle: PropTypes.func,
  values: PropTypes.array,
  value: PropTypes.string,
  messages: PropTypes.object,
};

export default Toggle;
