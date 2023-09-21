import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => {
    <button
      className={css.btn}
      key={option}
      onClick={() => onLeaveFeedback(option)}
    >
      {option}
    </button>;
  });
};
FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};
