import React, { useContext } from 'react';
// import AlertContext from '../../context/alert/alertContext';
import positionsContext from '../../context/positions/positionsContext';

function Alert() {
  //   const alertContext = useContext(AlertContext);
  //   const { alert } = alertContext;
  const positionState = useContext(positionsContext);
  const alert = positionsContext.error;

  return (
    alert && (
      <div className={`alert alert-${alert.type}`}>
        <i className='fas fa-info-circle' /> {alert.msg}
      </div>
    )
  );
}

export default Alert;
