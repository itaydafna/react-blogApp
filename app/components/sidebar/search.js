import {Component, PropTypes} from 'react';
import _ from 'lodash'

export class Search extends Component{

    constructor(){
        super();
        this.onSearchUpdate = this.onSearchUpdate.bind(this);
    }

   //this function "injects" the search query params to the url upon input change
   onSearchUpdate(target){
           let searchText = target.value;
           searchText === '' ? this.context.router.push(`${this.props.pathPrefix}`) :
               this.context.router.push(`${this.props.pathPrefix}?search=${searchText}`);
       }


    render(){
        //used this in order to be able to use ._debounce
        //found it here: http://stackoverflow.com/questions/35435074/using-debouncer-with-react-event
        //(_.compose has been updated to _.flowRight by lodash)
        let onSearchUpdate =  _.flowRight(
            _.debounce(this.onSearchUpdate,200),
            _.property('target')
        );
        return (
            <div className="well">
                <h4>Search</h4>
                <form>
                    <div className="input-group">
                        <input type="search"
                               name="search"
                               className="form-control"
                               onKeyUp={onSearchUpdate}
                               onBlur = {e=>e.target.value=''}
                        />
            <span className="input-group-btn">
              <button className="btn btn-default"
                      type="submit"
                      onClick = {(e)=>e.preventDefault()}
              >
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
