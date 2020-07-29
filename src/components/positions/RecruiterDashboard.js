import React, { useContext, useEffect } from 'react';
import PositionsContext from '../../context/positions/positionsContext';
import PositionCard from './PositionCard';
import Spinner from '../layouts/Spinner';
const RecruiterDashboard = () => {
  const positionsContext = useContext(PositionsContext);
  useEffect(() => {
    positionsContext.getPositionsByRecruiterName();
    //eslint-disable-next-line
  }, []);

  const { loading, recruiterPositions } = positionsContext;
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={positionsStyle}>
        {recruiterPositions.map((position) => (
          <PositionCard key={position.id} position={position} />
        ))}
      </div>
    );
  }
};
export default RecruiterDashboard;
const positionsStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2,1fr)',
  gridGap: '1rem',
};
