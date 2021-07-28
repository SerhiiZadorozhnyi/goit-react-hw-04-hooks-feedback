import React from 'react';
import PropTypes from 'prop-types';
import styles from 'components/statistics/Statistics.module.css';

const Statistics = ({good, neutral, bad, total, positivePercentage}) => (
    <>
        <p className={styles.p}>Good: {good}</p>
        <p className={styles.p}>Neutral: {neutral}</p>
        <p className={styles.p}>Bad: {bad}</p>
        <p className={styles.p}>Total: {total}</p>
        <p className={styles.p}>Positive feedback: {positivePercentage} %</p>
    </>
);

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
}

export default Statistics;