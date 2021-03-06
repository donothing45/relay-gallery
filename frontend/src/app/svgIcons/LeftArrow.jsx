'use strict';
let React = require('react');
let { SvgIcon } = require('material-ui');

const LeftArrow = React.createClass({

  displayName: 'LeftArrow',

  render() {
    return (
      <SvgIcon {...this.props}>
        <path fill="#FFFFFF" d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
      </SvgIcon>
    );
  },

});

module.exports = LeftArrow;
