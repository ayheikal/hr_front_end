import React, { useContext, useEffect } from 'react';
import Spinner from '../layouts/Spinner';
import PositionItem from './PositionItem';
import PositionsContext from '../../context/positions/positionsContext';

const Positions = () => {
  const positionsContext = useContext(PositionsContext);
  useEffect(() => {
    positionsContext.getPositions();
    //eslint-disable-next-line
  }, []);

  const { loading, positions } = positionsContext;
  if (loading) {
    return <Spinner />;
  } else if(positions.length>0) {
    return (
      <div style={positionsStyle}>
        {positions.map((position) => (
          <PositionItem key={position.id} position={position} />
        ))}
      </div>
    );
  }
  else{
    return(
      <div className='card danger'>
        <span className='center'>No Item to Show</span>

      </div>
    )
  }
};

export default Positions;

const positionsStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem',
};
