import {Component, PropTypes} from 'react';

import {PostPreview} from './post-preview';

export let VisiblePreviews = ({visiblePreviews})=> {
    if (visiblePreviews) {
        return (<div>
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
        </div>)
    }
    else {
        return null;
    }
};


