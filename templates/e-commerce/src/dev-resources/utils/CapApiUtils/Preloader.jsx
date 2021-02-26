import React from 'react';
import PropTypes from 'prop-types';
import '../styles/index.scss';

const Preloader = (props) => {
  const {
    width, height, paddingTop, type,
  } = props;
  if (type === 'dots') {
    return '...';
  } if (type === 'bgColor') {
    return (
      <div className="qtd-preloader-bg" style={{ width, height, 'padding-top': paddingTop }} />
    );
  }
  return (
    <div className="qtd-preloader" style={{ width, height, 'padding-top': paddingTop }}>
      <div className="qtd-preloader-ball1" />
      <div className="qtd-preloader-ball2" />
    </div>
  );
};
Preloader.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  paddingTop: PropTypes.string,
  type: PropTypes.string,
};
Preloader.defaultProps = {
  width: '100%',
  height: '100%',
  paddingTop: 0,
  type: 'balls',
};
export default Preloader;
