// @flow

import React, { Component } from 'react';

import NavItem from './NavItem';
import type { NavItemProps } from './NavItem';

type NavbarProps = {
  brand?: string,
  navItems?: Array<NavItemProps>
};

type State = {
  navbarsExampleDefaultClass: string
};

class Navbar extends Component<NavbarProps, State> {
  constructor(props: NavbarProps) {
    super(props);

    this.state = {
      navbarsExampleDefaultClass: 'navbar-collapse collapse'
    };
  }

  render() {
    const navItemList = [];

    if (this.props.navItems) {
      this.props.navItems.forEach(navItem => {
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

    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <a className="navbar-brand" href="/bootstrap-starter-template">
          {this.props.brand}
        </a>
        <button
          className="navbar-toggler collapsed"
          onClick={() => {
            this.setState(prevState => {
              let classVal = 'navbar-collapse collapse';

              if (prevState.navbarsExampleDefaultClass === 'navbar-collapse collapse') {
                classVal += ' show';
              }

              return { navbarsExampleDefaultClass: classVal };
            });
          }}
          type="button"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={this.state.navbarsExampleDefaultClass} id="navbarsExampleDefault">
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
  }
}

export default Navbar;
