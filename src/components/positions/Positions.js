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
  } else {
    return (
      <div style={positionsStyle}>
        {positions.map((position) => (
          <PositionItem key={position.id} position={position} />
        ))}
      </div>
    );
  }
};

export default Positions;

const positionsStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4,1fr)',
  gridGap: '1rem',
};
