import {Component} from 'react'
import {Header} from './header'
import {Sidebar} from './sidebar'


export const Index = () =>(

    <section className="col-md-8">
        <h2 className="page-header">Showing 29 posts</h2>
        {/* Begin Post */}
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
        {/* End of Post */}
        {/* Begin Post */}
        <article>
            <header>
                <h2>
                    <a href="#">Grunt - Custom Tasks</a>
                </h2>
                <p>
                    <small className="glyphicon glyphicon-user" />
                    by <a href="#">Alex Ilyaev</a>
                </p>
                <p>
                    <small className="glyphicon glyphicon-time" />
                    Posted on 10 Dec, 2014
                </p>
            </header>
            <hr />
            {/* Post Description */}
            <p>Tasks are grunt's bread and butter. The stuff you do most often, like jshint or nodeunit. Every time Grunt is run, you specify one or more tasks to run, which tells Grunt what you'd like it to do. You can go crazy with tasks. If your tasks don't follow the 'multi task' structure, use a custom task.</p>
            <br />
            <footer className="clearfix">
                <p className="pull-left">
                    <b>Tags:&nbsp;</b>
              <span>
                <a href="#" className="label label-default">Grunt</a>
              </span>
              <span>
                <a href="#" className="label label-default">Tools</a>
              </span>
                </p>
                <a className="btn btn-primary pull-right" href="#">
                    Read More <i className="glyphicon glyphicon-chevron-right" />
                </a>
            </footer>
            <hr />
        </article>
        {/* End of Post */}
        {/* Begin Post */}
        <article>
            <header>
                <h2>
                    <a href="#">jQuery - Events, AJAX</a>
                </h2>
                <p>
                    <small className="glyphicon glyphicon-user" />
                    by <a href="#">Amit Choukroun</a>
                </p>
                <p>
                    <small className="glyphicon glyphicon-time" />
                    Posted on 3 Dec, 2014
                </p>
            </header>
            {/* Post Description */}
            <p>jQuery Event methods trigger or attach a function to an event handler for the selected elements. These methods are used to register behaviors to take effect when the user interacts with the browser, and to further manipulate those registered behaviors.</p>
            <br />
            <footer className="clearfix">
                <p className="pull-left">
                    <b>Tags:&nbsp;</b>
              <span>
                <a href="#" className="label label-default">JavaScript</a>
              </span>
              <span>
                <a href="#" className="label label-default">jQuery</a>
              </span>
                </p>
                <a className="btn btn-primary pull-right" href="#">
                    Read More <i className="glyphicon glyphicon-chevron-right" />
                </a>
            </footer>
            <hr />
        </article>
        {/* End of Post */}
        {/* Pager */}
        <ul className="pager">
            <li className="previous">
                <a href="#">← Older</a>
            </li>
            <li className="next">
                <a href="#">Newer →</a>
            </li>
        </ul>
    </section>
);
