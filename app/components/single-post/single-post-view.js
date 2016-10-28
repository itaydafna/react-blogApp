import {Component} from 'react';

class SinglePostView extends Component{

    render() {
        return (
            <section className="col-md-8">
                {/* Begin Post */}
                <article>
                    <header>
                        <h1 className="page-header">AngularJS - Controllers</h1>
                        <p>
                            <small className="glyphicon glyphicon-user"/>
                            by <a href="#">Ilan Cohen</a>
                        </p>
                        <p>
                            <small className="glyphicon glyphicon-time"/>
                            Posted on 14 Jan, 2015
                        </p>
                        <p>
                            <b>Tags:&nbsp;</b>
              <span>
                <a href="#" className="label label-default">JavaScript</a>
              </span>
              <span>
                <a href="#" className="label label-default">AngularJS</a>
              </span>
                        </p>
                    </header>
                    <hr />
                    {/* Post Content */}
                    <div style={{
                fontSize: 30,
                 color: 'white',
                 background: 'red',
                  padding: 10,
                 width: 500,
                 height: 600}}>
                        That's where the post's content should be rendered from the html path..
                    </div>
                    {/* End of Post Content */}
                </article>
                <hr />
                {/* End of Post */}
                {/* Blog Comments */}
                {/* Comments Form */}
                <div className="well">
                    <h4>Leave a Comment:</h4>
                    <form role="form">
                        <div className="form-group">
                            <textarea className="form-control" rows={3} defaultValue={""}/>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
                <hr />
                {/* Posted Comments */}
                {/* Comment */}
                <hr />
                {/* Comment */}
            </section>
        )
    }
}


export default SinglePostView;