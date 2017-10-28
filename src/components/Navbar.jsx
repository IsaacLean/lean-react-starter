// @flow

import React from 'react';

import NavItem from './NavItem';

type NavItemObj = {
  aClass: string,
  href: string,
  liClass?: string,
  text?: string
};

type Props = {
  brand?: string,
  navItems?: Array<NavItemObj>
};

const Navbar = (props: Props) => {
  const navItemList = [];

  if (props.navItems) {
    if (props.navItems.length > 0) {
      Object.values(props.navItems).forEach(navItem => {
        navItemList.push(
          <NavItem
            key={navItem.text}
            aClass={navItem.aClass}
            href={navItem.href}
            liClass={navItem.liClass}
            text={navItem.text}
          />
        );
      });
    }
  }

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <a className="navbar-brand" href="/bootstrap_starter_template">
        {props.brand}
      </a>
      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto">{navItemList}</ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

Navbar.defaultProps = { brand: '', navItems: [] };

export default Navbar;
