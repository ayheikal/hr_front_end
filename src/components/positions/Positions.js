import React, { useContext, useEffect } from 'react';
import Spinner from '../layouts/Spinner';
import PositionItem from './PositionItem';
import PositionsContext from '../../context/positions/positionsContext';
import positionImag from './../../images/bot.png'


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
      <div className="container jobs-container" >
        <div className="row">
          <div className="col-md-5">


              <div className="positoin-image">
                <p><span className="colord-text">STAY HOME,</span> FIND A SUITABLE POSITION AND GET HIRED WITH AUTOMATED INTERVIEWS</p>

                <img src={positionImag} />
              </div>

            
          </div>
          <div className="col-md-7">
              
            {positions.map((position) => (
              <PositionItem key={position.id} position={position} />
            ))}

          </div>
        </div>
      </div>

      
    );
  }
  else{
    return(
      <div class="container alert alert-danger" role="alert">
        There is no item to show.
      </div>
    )
  }
};

export default Positions;
