import React from 'react';
import PropTypes from 'prop-types';
import styles from 'components/feedbackOptions/FeedbackOptions.module.css';
// import { option } from 'yargs';
// import { optionalCallExpression } from '@babel/types';

const FeedbackOptions = ({options, onLeaveFeedback}) => {
        return options.map(option => (
            <button
                key={option}
                type="button"
                name={option}
                onClick={() => onLeaveFeedback(option)}
                className={styles.button}
            >
                {option}
            </button>
        ));
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}

export default FeedbackOptions;