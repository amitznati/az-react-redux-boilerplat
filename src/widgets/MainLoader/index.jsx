import {connect} from 'react-redux';
import '../../styles/widgets/main-loader.scss'
function SpinnerWidget({spinnerOn}) {
  if (!spinnerOn) {
    return <div />;
  }
  return (
    <div className="loader-container">
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
