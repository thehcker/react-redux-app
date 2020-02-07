import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

class PostForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            body: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e){
        this.setState({ [e.target.name]: e.target.value})
    }
    onSubmit(e){
        e.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.body
        }
        // fetch('https://jsonplaceholder.typicode.com/posts', {
        //     method: 'POST',
        //     headers: {
        //     'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(post)
        // })
        // .then(res => res.json())
        // .then(data => console.log(data));

        this.props.createPost(post)
    }
    render() {
        return (
            <div>
                <h1>Add Form</h1>
                <form>
                    <div>
                    <label>Title:</label><br/>
                    <input type="text" onChange={this.onChange} name="title" value={this.state.title} />
                    </div><br />
                    <div>
                        <label>Body:</label>
                        <br/>
                    <textarea name="body" onChange={this.onChange} value={this.state.body}></textarea>
                    <br/>

                    </div>
                    <button onClick={this.onSubmit} type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
PostForm.propTypes = {
    createPost: PropTypes.func.isRequired
}
export default connect(null, { createPost})(PostForm);