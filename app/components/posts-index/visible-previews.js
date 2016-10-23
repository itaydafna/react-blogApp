import {Component} from 'react';
import {connect} from 'react-redux';
import {PostPreview} from './post-preview';

let VisiblePreviews = ({visiblePreviews}) =>{

    return (
        <div>
            {
                visiblePreviews.map(preview => 
                    <PostPreview 
                    key={preview.title}
                    title = {preview.title}
                    />)
            }
        </div>
    )

};


const mapStateToProps = (state) => ({
    visiblePreviews: state.visiblePreviews
});



VisiblePreviews = connect(
    mapStateToProps
)(VisiblePreviews);



export default VisiblePreviews;

