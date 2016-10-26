import {Component} from 'react';
import {connect} from 'react-redux';
import {PostPreview} from './post-preview';
import {getActivePosts} from '../../actions/get-active-posts'

class VisiblePreviews extends Component{

    constructor(props){
        super(props);

    }

    componentWillMount(){

        this.dispatchPageFromParams(this.props);


    }


    

    componentWillReceiveProps (newProps){
        if(newProps.params.page !== this.props.params.page) {

            this.dispatchPageFromParams(newProps);

        }
    }


    dispatchPageFromParams(props){
        const {params, getActivePosts} = props;
        const {posts} = props.state;

        let currentPage = isNaN(Number(params.page))? 1: Number(params.page);

        getActivePosts(posts,currentPage);
    }


    render() {

        if(this.props.state.visiblePreviews.data){
            console.log(this.props.state.visiblePreviews.data);
            const visiblePreviews = this.props.state.visiblePreviews.data;
        return (
            <div>
                {visiblePreviews.map(preview =>
                        <PostPreview
                            key={preview.title}
                            title={preview.title}
                            author={preview.author}
                            date={new Date(Number(preview.date))}
                            description={preview.description}
                            tags={preview.tags}
                        />)
                }
            </div>
        )} else{
            return (<div>Loading...</div>)
        }
    }
}


const mapStateToProps = (state) => ({
    state: state
});



VisiblePreviews = connect(
    mapStateToProps,
    {getActivePosts}
)(VisiblePreviews);



export default VisiblePreviews;

