import React from 'react';

const OverviewBoxDetails = ({ title, value }) => {
  return (
    <div className='overview-box__detail'>
      {/* trending up icon */}
      <span className='overview-box__label'>{title}</span>
      <span className='overview-box__text'>{value}</span>
    </div>
  );
};

export default OverviewBoxDetails;
