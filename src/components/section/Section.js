import React from 'react';
import PropTypes from 'prop-types';
import styles from './Section.module.css';


const Section = ({title, children}) => (
    <section className={styles.general}>
        <h2>{title}</h2>
        {children}
    </section>
);

Section.propType = {
    title: PropTypes.string.isRequired
};

export default Section;