import { connect } from "react-redux";
import "./main_loader.css";
import { Loading } from "@common-components";
export function SpinnerWidget({ spinnerOn }: { spinnerOn: boolean }) {
  if (!spinnerOn) {
    return <div />;
  }
  return (
    <div className="loader-container">
      <Loading size="lg" />
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
