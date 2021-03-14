import React from "react";
import { Card } from "antd";
import PropTypes from "prop-types";

const Widget = ({
  title,
  children,
  styleName,
  cover,
  extra,
  actions,
  style,
}) => {
  return (
    <Card
      title={title}
      actions={actions}
      cover={cover}
      className={`gx-card-widget ${styleName}`}
      extra={extra}
      style={style}
    >
      {children}
    </Card>
  );
};

export default Widget;
Widget.defaultProps = {
  styleName: "",
};

Widget.propTypes = {
  title: PropTypes.node,
  extra: PropTypes.node,
  cover: PropTypes.node,
  actions: PropTypes.node,
  children: PropTypes.node.isRequired,
};
