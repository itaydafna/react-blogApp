import {Component} from 'react';
import {connect} from 'react-redux';

import {Sidebar} from './sidebar/sidebar'
import {Footer} from './footer'
import {Header} from './header'



class BlogApp extends Component {

    render() {
      const {children} = this.props;

        return (
            <div>
                <Header/>
                <div className="container">
                    <div className="row">
                {/* the children components are
                either PostsIndex, Admin or SinglePostView  */}
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
    posts: state.posts

});



const App = connect(
    mapStateProps
)(BlogApp);


export default App;