import React, { Component } from 'react';

export const InputComponent = ({ updateKey, val, label, type }) => {
  return (
    <div className="row">
      <strong>{label}: </strong>
      <input
        type={type || "text"}
        onKeyPress={($evt) => updateKey($evt, val)} />
    </div>
  );
};
