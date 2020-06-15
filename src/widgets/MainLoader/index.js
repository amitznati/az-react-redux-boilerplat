import {connect} from 'react-redux';
import React from 'react';

function SpinnerWidget({spinnerOn}) {
  if (!spinnerOn) {
    return <div />;
  }
  return (
    <div className="container">
      <div className="loader" />
    </div>
  );
}
const mapStateToProps = store => {
  return {
    spinnerOn: store.general.spinnerOn.length > 0,
    spinnerOptions: store.general.spinnerOptions,
  };
};

export default connect(mapStateToProps)(SpinnerWidget);
