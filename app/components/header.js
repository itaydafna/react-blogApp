import {Component} from 'react'
import {Link} from 'react-router'

export const Header = ({onNavClick, activeSection}) => {
    return (
    <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">
            {/* Brand and toggle get grouped for better mobile display */}
            <div className="navbar-header">
                <button type="button" className="navbar-toggle">
                    <span className="sr-only">Toggle navigation</span>
                    <label htmlFor="toggle-nav-mobile">
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                    </label>
                </button>
                <Link
                    className="navbar-brand"
                    to="posts"
                >
                    Netcraft Academy
                </Link>
            </div>
            <input type="checkbox" id="toggle-nav-mobile" hidden />
            {/* Collect the nav links, forms, and other content for toggling */}
            <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                    <li>
                        <Link to="posts"
                              activeClassName = 'active-link'
                        >
                            Posts
                        </Link>
                    </li>
                    <li>
                        <Link to="admin"
                              activeClassName = 'active-link'>
                            Admin
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)};

