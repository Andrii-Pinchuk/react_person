import React from 'react';
import PropTypes from 'prop-types';
import './Person.scss';

export const Person = ({ person }) => {
  const {
    name,
    age,
    sex,
    isMarried,
    partnerName,
  } = person;

  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>

      {person.age && (
        <p className="Person__age">
          {`I am ${age}`}
        </p>
      )}

      <p className="Person__partner">
        {isMarried
          ? `My ${sex === 'm' ? "wife's" : "husband's"} name is ${partnerName}`
          : 'I am not married'}
      </p>
    </section>
  );
};

Person.defaultProps = {
  person: {
    age: null,
    partnerName: null,
  },
};

Person.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    sex: PropTypes.string.isRequired,
    isMarried: PropTypes.bool.isRequired,
    partnerName: PropTypes.string,
  }),
};
