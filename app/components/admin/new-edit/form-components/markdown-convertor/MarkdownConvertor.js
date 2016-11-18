import {Component} from 'react';
import {MarkdownInput} from './markdown-input'
import {HTMLPreview} from './html-preview'

export class MarkdownConvertor extends Component{
    constructor(props){
        super(props);
        this.state = {
            mdValue: this.props.defaultValue
        };
        this.onTextChange = this.onTextChange.bind(this);
    }
    onTextChange(e){
        this.setState({
            mdValue: e.target.value
        })
        
    }
    render(){
        return (
            <div className="row">
                <MarkdownInput
                    defaultValue={this.state.mdValue}
                    onTextChange = {(e)=>this.onTextChange(e)}
                />
                <HTMLPreview
                    text = {this.state.mdValue}
                />
            </div>
        )
    }
}
