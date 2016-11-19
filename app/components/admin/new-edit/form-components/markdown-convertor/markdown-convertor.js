import {Component} from 'react';
import {MarkdownInput} from './markdown-input';
import {HTMLPreview} from './html-preview';
import Marked from 'marked';

Marked.setOptions({
    // GitHub Flavored Markdown
    gfm: true,
    // GFM tables
    tables: true,
    // GFM line breaks
    breaks: true,
    // Better lists handling
    smartLists: true,
    // Better punctuation handling
    smartypants: true,
    // Code blocks language prefix (reset default)
    langPrefix: '',
    // Prefix for headings ID's
    headerPrefix: 'hid-',
    highlight: false
});

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
                    postMd = {this.props.postMd}
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
