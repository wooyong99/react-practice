import React from 'react';
import PropTypes from 'prop-types';
import { css as emotionCss } from '@emotion/react';

/** @jsxImportSource @emotion/react */

const Text = ({ children, type, css, fontSize, fontWeight, color }) => {
  const cssObject = emotionCss(
    {
      color,
    },
    css,
  );

  switch (type) {
    case 'h1':
      return <h1 css={cssObject}>{children}</h1>;
    case 'h2':
      return <h2 css={cssObject}>{children}</h2>;
    case 'h3':
      return <h3 css={cssObject}>{children}</h3>;
    case 'h4':
      return <h4 css={cssObject}>{children}</h4>;
    case 'h5':
      return <h5 css={cssObject}>{children}</h5>;
    case 'h6':
      return <h6 css={cssObject}>{children}</h6>;
    default:
      return <div css={{ cssObject, fontSize, fontWeight }}>{children}</div>;
  }
};

Text.defaultProps = {
  className: '',
  css: emotionCss({}),
  fontSize: '16px',
  fontWeight: 'normal',
  color: 'black',
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  color: PropTypes.string,
  css: PropTypes.objectOf(emotionCss),
};

export default Text;
