import {Component} from 'react';
import {connect} from 'react-redux';

import {Sidebar} from './sidebar'
import {Footer} from './footer'
import {Header} from './header'
import {changeSection} from '../actions/change-section'



class BlogApp extends Component {

    render() {
      const {onNavClick, activeSection, children} = this.props;

        return (
            <div>
                <Header
                    onNavClick={onNavClick}
                    activeSection={activeSection}/>
                <div className="container">
                    <div className="row">
                {/* the children components are
                either Posts-Index or Admin  */}
                        {children}
                        <Sidebar />
                    </div>
                    <hr/>
                    <Footer />
                </div>
            </div>)
    };
}

const mapStateProps = (state) => ({
    activeSection: state.activeSection,
    posts: state.posts

});



const App = connect(
    mapStateProps,
    {onNavClick: changeSection}
)(BlogApp);


export default App;