import React from "react";
import Widget from "components/Widget/index";
import { Col, Row, Button } from "antd";

const Callout = () => {
  return (
    <Widget styleName="gx-bg-primary gx-text-white">
      <Row>
        <Col xl={16} lg={14} md={12} sm={12} xs={12}>
          <p>Like what you see?</p>
          <h4 className="gx-font-weight-semi-bold gx-text-white gx-mb-0">
            Use Motor to generate Qlik mashups at the press of a button.
          </h4>
        </Col>
        <Col xl={8} lg={10} md={12} sm={12} xs={12} className="gx-text-right">
          <div className="gx-flex-column gx-justify-content-center gx-h-100">
            <span className="gx-mb-2">
              <Button>Learn More</Button>
            </span>
          </div>
        </Col>
      </Row>
    </Widget>
  );
};

export default Callout;
