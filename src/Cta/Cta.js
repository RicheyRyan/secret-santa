import React from 'react';
import './Cta.css';

const Cta = props =>
  <div className="cta">
    <p>{props.message}</p>
    <button onClick={props.onClick}>
      {props.label}
    </button>
  </div>;

export default Cta;
