import React, { useState, useContext } from 'react';
import PositionsContext from '../../context/positions/positionsContext';
// import searchImage from './../../images/search-box.jpg'

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
    <div className="row search-box">
      <div className="col-md-12 text-center">
        {/* <img src={searchImage} /> */}
        <form className='form' onSubmit={submitHandler}>
          <div className="row">
            <div className="col-md-10 text-right">
              <input
                className="search"
                type='text'
                name='text'
                placeholder='search position..'
                onChange={textHandler}
                className='form-control mr-sm-2'
              />
              </div>
              <div className="col-md-1 text-left">
              <button className="search-btn"
              
                type='submit'
                className='btn colored-btn'
              >search</button>
            </div>
          </div>
          
          
        </form>
      </div>
    </div>
  );
};

export default Search;
