import {connect} from 'react-redux';
function SpinnerWidget({spinnerOn}: {spinnerOn: boolean}) {
  if (!spinnerOn) {
    return <div />;
  }
  return (
    <div className="loader-container">
      <div className="loader" />
    </div>
  );
}
const mapStateToProps = (store: any) => {
  return {
    spinnerOn: store.general.spinnerOn.length > 0,
    spinnerOptions: store.general.spinnerOptions,
  };
};

export default connect(mapStateToProps)(SpinnerWidget);
