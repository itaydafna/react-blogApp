import {Component} from 'react'

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
                <a className="navbar-brand" href="#/"
                   onClick = {()=>onNavClick('posts')}
                >Netcraft Academy</a>
            </div>
            <input type="checkbox" id="toggle-nav-mobile" hidden />
            {/* Collect the nav links, forms, and other content for toggling */}
            <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                    <li
                        onClick = {()=>onNavClick('posts')}
                        className = {!activeSection || activeSection === 'posts' ? 'active': null}
                    >
                        <a href="#/posts">Posts</a>
                    </li>
                    <li
                        onClick = {()=>onNavClick('admin')}
                        className = {activeSection === 'admin' ? 'active': null}
                    >
                        <a href="#/admin">Admin</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)};

