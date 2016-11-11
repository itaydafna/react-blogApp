import {Component, PropTypes} from 'react';
import _ from 'lodash'


export class Search extends Component{

    constructor(){
        super();
        this.onSearchUpdate = this.onSearchUpdate.bind(this);
    }

   //this function "injects" the search query params to the url upon input change
   onSearchUpdate(e){
        let searchText = e.target.value;
        _.debounce(searchText === '' ? this.context.router.push(`/`):
            this.context.router.push(`/posts?search=${searchText}`),500);
    }

    render(){
        return (
            <div className="well">
                <h4>Search</h4>
                <form>
                    <div className="input-group">
                        <input type="search"
                               name="search"
                               className="form-control"
                               onChange={this.onSearchUpdate}
                        />
            <span className="input-group-btn">
              <button className="btn btn-default" type="submit">
                <span className="glyphicon glyphicon-search">
                </span></button>
            </span>
                    </div>
                </form>
            </div>
        )
    }
};



Search.contextTypes = {
    router: PropTypes.object
};