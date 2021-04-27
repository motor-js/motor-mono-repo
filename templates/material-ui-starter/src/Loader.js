import React from "react";
import PropTypes from "prop-types";
import Skeleton from "@material-ui/lab/Skeleton";

export default function Loader({ height }) {
  const skeletons = [];
  for (let i = 0; i < height; i += 18) {
    skeletons.push(<Skeleton key={i} />);
  }
  return <div style={{ height: height }}>{skeletons}</div>;
}

Loader.propTypes = {
  height: PropTypes.number,
};
