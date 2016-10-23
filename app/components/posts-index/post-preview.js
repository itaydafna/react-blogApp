export const PostPreview = () => {
    return (
        <article>
            <header>
                <h2>
                    <a href="#">AngularJS - Controllers</a>
                </h2>
                <p>
                    <small className="glyphicon glyphicon-user" />
                    by <a href="#">Ilan Cohen</a>
                </p>
                <p>
                    <small className="glyphicon glyphicon-time" />
                    Posted on 14 Jan, 2015
                </p>
            </header>
            {/* Post Description */}
            <p>In Angular, a Controller is a JavaScript constructor function that is used to augment the Angular Scope. When a Controller is attached to the DOM via the ng-controller directive, Angular will instantiate a new Controller object, using the specified Controller's constructor function. A new child scope will be available as an injectable parameter to the Controller's constructor function as $scope.</p>
            <br />
            <footer className="clearfix">
                <p className="pull-left">
                    <b>Tags:&nbsp;</b>
              <span>
                <a href="#" className="label label-default">JavaScript</a>
              </span>
              <span>
                <a href="#" className="label label-default">AngularJS</a>
              </span>
                </p>
                <a className="btn btn-primary pull-right" href="#">
                    Read More <i className="glyphicon glyphicon-chevron-right" />
                </a>
            </footer>
            <hr />
        </article>
    )

}
