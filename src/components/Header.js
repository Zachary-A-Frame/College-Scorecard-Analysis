import React from 'react';

const Header = (props) => (
  <div className="header">
    <div className="container">
      <h1 className="headerTitle">{props.title}</h1>
      {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
    </div>
  </div>
);

Header.defaultProps = {
     title: 'How Much Does College Cost and Why?'
}

export default Header;