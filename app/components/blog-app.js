import {Component} from 'react';
import {connect} from 'react-redux';

import {Sidebar} from './sidebar'
import {Footer} from './footer'
import {Header} from './header'
import {changeSection} from '../actions/action-ceators'


let BlogApp = ({children, onNavClick, activeSection}) =>{
    return (
    <div>
        <Header
            onNavClick={onNavClick}
            activeSection={activeSection}/>
        <div className="container">
            <div className="row">
                {children}
                <Sidebar />
            </div>
            <hr />
            <Footer />
        </div>
    </div>)
};



const mapStateProps = (state) => ({
    activeSection: state.activeSection
});



const mapDispatchProps = (dispatch) => ({
    onNavClick(section) {
        dispatch(changeSection(section));
}});


BlogApp = connect(
    mapStateProps,
    mapDispatchProps
)(BlogApp);


export default BlogApp;