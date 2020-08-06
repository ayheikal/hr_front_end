import React, { useState, useContext } from 'react';
import PositionsContext from '../../context/positions/positionsContext';
const Search = () => {
  const positionsContext = useContext(PositionsContext);
  const [text, setText] = useState('');

  const textHandler = (e) => {
    setText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (text === '') {
      alert('search can not be empty');
    } else {
      positionsContext.getPositionsBySearch(text);
      setText('');
    }
  };

  return (
    <div>
      <form className='form' onSubmit={submitHandler}>
        <input
          type='text'
          name='text'
          placeholder='search position..'
          onChange={textHandler}
          className='form-control mr-sm-2'
        />
        <input
          type='submit'
          value='search'
          className='btn btn-dark btn-block'
        />
      </form>
    </div>
  );
};

export default Search;
