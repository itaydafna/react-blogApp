import {Component} from 'react';

export const SinglePostView = () => {
    
    return (
        <section className="col-md-8">
            {/* Begin Post */}
            <article>
                <header>
                    <h1 className="page-header">AngularJS - Controllers</h1>
                    <p>
                        <small className="glyphicon glyphicon-user" />
                        by <a href="#">Ilan Cohen</a>
                    </p>
                    <p>
                        <small className="glyphicon glyphicon-time" />
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
                <section>
                    <section>
                        <h2 id="hid-controllers-extra-topics">Controllers - Extra topics</h2>
                    </section>
                    <section>
                        <h3 id="hid-scope-and-functions-on-scope">$scope and functions on $scope</h3>
                        <p>The <code>$scope</code> basically serves as the data model.</p>
                        <p>More info from the Angular website:</p>
                        <ul>
                            <li><p>Scopes provide APIs (<code>$watch</code>) to observe model mutations.</p>
                            </li>
                            <li><p>Scopes provide APIs (<code>$apply</code>) to propagate any model changes through the system into the view from outside of the “Angular realm” (Controllers, Services, Angular event handlers).</p>
                            </li>
                            <li><p>Scopes can be nested to limit access to the properties of application components while providing access to shared model properties. Nested scopes are either <strong>child scopes</strong> or <strong>isolate scopes</strong>. A <strong>child scope</strong> (prototypically) inherits properties from its parent scope. An <strong>isolate scope</strong> does not.</p>
                            </li>
                            <li><p>Scopes provide context against which expressions are evaluated. For example, a <code>{'{'}{'{'}userName{'}'}{'}'}</code> expression is meaningless, unless it is evaluated against a specific scope which defines the <code>userName</code> property.</p>
                            </li>
                        </ul>
                    </section>
                    <section>
                        <h3 id="hid-prototypal-inheritance">Prototypal inheritance</h3>
                        <p>There is always one root scope, but chlid scopes can exist, and they inherit (prototypically) from their parent scope(s):</p>
                        <pre><code className="handlebars">&lt;div ng-app="scopeExample"&gt;{"\n"}{"    "}&lt;div class="show-scope-demo"&gt;{"\n"}{"        "}&lt;div ng-controller="GreetController"&gt;{"\n"}{"            "}Hello {"{"}{"{"}name{"}"}{"}"}!{"\n"}{"        "}&lt;/div&gt;{"\n"}{"\n"}{"        "}&lt;div ng-controller="ListController"&gt;{"\n"}{"            "}&lt;ol&gt;{"\n"}{"                "}&lt;li ng-repeat="name in names"&gt;{"\n"}{"                    "}{"{"}{"{"}name{"}"}{"}"} from {"{"}{"{"}department{"}"}{"}"}{"\n"}{"                "}&lt;/li&gt;{"\n"}{"            "}&lt;/ol&gt;{"\n"}{"        "}&lt;/div&gt;{"\n"}{"    "}&lt;/div&gt;{"\n"}&lt;/div&gt;{"\n"}</code></pre>
                    </section>
                    <section>
                        <pre><code className="js">angular.module('scopeExample', []){"\n"}{"\n"}.controller('GreetController', ['$scope', '$rootScope',{"\n"}{"    "}function ($scope, $rootScope) {"{"}{"\n"}{"        "}$scope.name = 'World';{"\n"}{"        "}$rootScope.department = 'Angular';{"\n"}{"    "}{"}"}{"\n"}]);{"\n"}{"\n"}.controller('ListController', ['$scope',{"\n"}{"    "}function ($scope) {"{"}{"\n"}{"        "}$scope.names = ['Igor', 'Misko', 'Vojta'];{"\n"}{"    "}{"}"}{"\n"}]);{"\n"}</code></pre>
                    </section>
                    <section>
                        <pre><code className="css">.show-scope-demo.ng-scope,{"\n"}.show-scope-demo .ng-scope{"  "}{"{"}{"\n"}{"    "}border: 1px solid red;{"\n"}{"    "}margin: 3px;{"\n"}{"}"}{"\n"}</code></pre>
                    </section>
                    <section>
                        <h3 id="hid-passing-by-reference-value">Passing by reference/value</h3>
                        <p>Remember that there is difference between this:</p>
                        <pre><code className="js">var str = 'string';{"\n"}{"\n"}function updateString(strParam) {"{"}{"\n"}{"    "}strParam = 'other string';{"\n"}{"}"}{"\n"}updateString(str);{"\n"}console.log(str);{"\n"}</code></pre>
                        <p>And this:</p>
                        <pre><code className="js">var strObject = {"{"}{"\n"}{"    "}str: 'string'{"\n"}{"}"};{"\n"}function updateString(strParam) {"{"}{"\n"}{"    "}strParam.str = 'other string';{"\n"}{"}"}{"\n"}updateString(strObject);{"\n"}console.log(strObject.str);{"\n"}</code></pre>
                    </section>
                    <section>
                        <p>So too, this:</p>
                        <pre><code className="handlebars">&lt;div ng-app="scopeExample"&gt;{"\n"}{"    "}&lt;div ng-controller="ParentController"&gt;{"\n"}{"        "}&lt;input type="text" ng-model="name"&gt;{"\n"}{"        "}Hello {"{"}{"{"}name{"}"}{"}"}!{"\n"}{"        "}&lt;div ng-controller="ChildController"&gt;{"\n"}{"            "}&lt;input type="text" ng-model="name"&gt;{"\n"}{"            "}Hello {"{"}{"{"}name{"}"}{"}"}!{"\n"}{"        "}&lt;/div&gt;{"\n"}{"    "}&lt;/div&gt;{"\n"}&lt;/div&gt;{"\n"}</code></pre>
                        <pre><code className="js">angular.module('scopeExample', []){"\n"}{"    "}.controller('ParentController', ['$scope',{"\n"}{"        "}function ($scope) {"{"}{"\n"}{"            "}$scope.name = 'World';{"\n"}{"        "}{"}"}{"\n"}{"    "}]){"\n"}{"    "}.controller('ChildController', ['$scope',{"\n"}{"        "}function ($scope) {"{"} /* ... */ {"}"}{"\n"}{"    "}]);{"\n"}</code></pre>
                    </section>
                    <section>
                        <p>is different than this:</p>
                        <pre><code className="handlebars">&lt;div ng-app="scopeExample"&gt;{"\n"}{"    "}&lt;div ng-controller="ParentController"&gt;{"\n"}{"        "}&lt;input type="text" ng-model="data.name"&gt;{"\n"}{"        "}Hello {"{"}{"{"}data.name{"}"}{"}"}!{"\n"}{"        "}&lt;div ng-controller="ChildController"&gt;{"\n"}{"            "}&lt;input type="text" ng-model="name"&gt;{"\n"}{"            "}Hello {"{"}{"{"}data.name{"}"}{"}"}!{"\n"}{"        "}&lt;/div&gt;{"\n"}{"    "}&lt;/div&gt;{"\n"}&lt;/div&gt;{"\n"}</code></pre>
                        <pre><code className="js">angular.module('scopeExample', []){"\n"}{"    "}.controller('ParentController', ['$scope',{"\n"}{"        "}function ($scope) {"{"}{"\n"}{"            "}$scope.data = {"{"}{"\n"}{"                "}name: 'World'{"\n"}{"            "}{"}"};{"\n"}{"        "}{"}"}{"\n"}{"    "}]){"\n"}{"    "}.controller('ChildController', ['$scope',{"\n"}{"        "}function ($scope) {"{"} /* ... */ {"}"}{"\n"}{"    "}]);{"\n"}</code></pre>
                    </section>
                    <section>
                        <h3 id="hid-controller-as-syntax">“<code>Controller as</code>“ syntax</h3>
                        <p><a href="https://docs.angularjs.org/api/ng/directive/ngController">AngularJS.org - ngController</a><br /><a href="http://plnkr.co/edit/EndHxw6QcY3dKAZZhEXD?p=preview">Controller As - Example</a></p>
                    </section>
                    <section>
                        <h3 id="hid-built-in-scope-methods">Built-In <code>$scope</code> methods</h3>
                        <p><strong><code>$watch</code></strong></p>
                        <blockquote>
                            <p>Allows listening to variables changes.</p>
                        </blockquote>
                        <pre><code className="js">$scope.$watch({"\n"}{"    "}'sampleVar',{"\n"}{"\n"}{"    "}// This is the change listener, called when the value returned from the above function changes{"\n"}{"    "}function(newValue, oldValue) {"{"}{"\n"}{"        "}if ( newValue !== oldValue ) {"{"}{"\n"}{"            "}console.log(newValue, oldValue);{"\n"}{"            "}$scope.sampleVar2 = $scope.sampleVar + $scope.sampleVar;{"\n"}{"        "}{"}"}{"\n"}{"    "}{"}"},{"\n"}{"    "}false{"\n"});{"\n"}</code></pre>
                        <ul>
                            <li>Affects performance if used a lot or if doing heavy lifting. Don’t abuse it! </li>
                        </ul>
                    </section>
                </section>
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
                        <textarea className="form-control" rows={3} defaultValue={""} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            <hr />
            {/* Posted Comments */}
            {/* Comment */}
            <div className="media">
                <a className="pull-left" href="#">
                    <img className="media-object" src="http://placehold.it/64x64" alt />
                </a>
                <div className="media-body">
                    <h4 className="media-heading">Some User
                        <small>14 Jan, 2015</small>
                    </h4>
                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                </div>
            </div>
            <hr />
            {/* Comment */}
            <div className="media">
                <a className="pull-left" href="#">
                    <img className="media-object" src="http://placehold.it/64x64" alt />
                </a>
                <div className="media-body">
                    <h4 className="media-heading">Some User
                        <small>14 Jan, 2015</small>
                    </h4>
                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                </div>
            </div>
        </section>
    )
};
