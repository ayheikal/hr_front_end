import React, { component } from 'react';
import PositionItem from './PositionItem';

const Positions = () => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={positionsStyle}>
        {users.map((position) => (
          <PositionItem key={position.id} position={position} />
        ))}
      </div>
    );
  }
};

export default Positions;

const positionsStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem',
};
