import New from "../New";
import Popular from "../Popular";
import PropTypes from "prop-types";


const withDataHighlight = (Component) => {
  const HOCComponent = (props) => {
    const { views } = props;

    if (views < 100) {
      return (
        <New>
          <Component {...props} />
        </New>
      );
    } else if (views > 1000) {
      return (
        <Popular>
          <Component {...props} />
        </Popular>
      );
    }
    return <Component {...props} />;
  };

  HOCComponent.propTypes = {
    views: PropTypes.any,
  };

  HOCComponent.displayName = "checkDataHighlight";

  return HOCComponent;
};

export default withDataHighlight;