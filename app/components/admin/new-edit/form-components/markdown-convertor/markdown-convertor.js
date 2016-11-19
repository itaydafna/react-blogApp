import {Component} from 'react';
import {MarkdownInput} from './markdown-input';
import {HTMLPreview} from './html-preview';
import Marked from 'marked';

export class MarkdownConvertor extends Component{
    constructor(props){
        super(props);
        this.state = {
            mdValue: this.props.defaultValue
        };
        this.onTextChange = this.onTextChange.bind(this);
        this.createMarkup = this.createMarkup.bind(this);
    }
    onTextChange(e){
        this.setState({
            mdValue: e.target.value
        })
        
    }
    createMarkup() {
        return {__html: `${Marked(this.state.mdValue)}`};
    }

    render(){
        return (
            <div className="row">
                <MarkdownInput
                    defaultValue={this.state.mdValue}
                    onTextChange = {(e)=>this.onTextChange(e)}
                />
                <HTMLPreview
                    html = {this.createMarkup()}
                />
            </div>
        )
    }
}
