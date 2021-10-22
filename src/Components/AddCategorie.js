import React, { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategorie = ({ setCategories }) => {
  const [inputvalue, setinputvalue] = useState('');

  const change = (e) => {
    setinputvalue(e.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
    if (inputvalue.trim().length > 2) {
      setCategories((s) => [ inputvalue, ...s]);
      setinputvalue("");
    }
    else{

    }
  };
  return (
    <form onSubmit={submit}>
      <input onChange={change} value={inputvalue} type="text" />
    </form>
  );
};

AddCategorie.propTypes={
    setCategories:PropTypes.func.isRequired
}