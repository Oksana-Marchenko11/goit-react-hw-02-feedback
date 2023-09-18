import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => {
    <button key={option} onClick={() => onLeaveFeedback(option)}>
      {option}
    </button>;
  });
};
