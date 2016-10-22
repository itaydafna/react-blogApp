import {Component} from 'react';
import {connect} from 'react-redux';

import {Sidebar} from './sidebar'
import {Footer} from './footer'
import {Header} from './header'
import {changeSection} from '../actions/change-section'
import {getPosts} from '../actions/get-posts'


class BlogApp extends Component {

    // componentWillMount(){
    //     this.props.getPosts();
    // }

    render() {

      const {onNavClick, activeSection, children} = this.props;

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
                    <hr/>
                    <Footer />
                </div>
            </div>)
    };
}

const mapStateProps = (state) => ({
    activeSection: state.activeSection
});


const mapDispatchProps = (dispatch) => ({
    onNavClick(section) {
        dispatch(changeSection(section));
    },
    getPosts(){
        dispatch(getPosts)
    }
});


const App = connect(
    mapStateProps,
    mapDispatchProps
)(BlogApp);


export default App;