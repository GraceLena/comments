import React, { Component } from 'react';

import './comment-form.css';

export default class CommentForm extends Component {
    constructor() {
      super();

      this.state = {
        newUserName: '',
        newText: ''
      }

      this.handleChange = (event) => {
        const name = event.target.name; 
        const value = event.target.value;
        this.setState({[name]: value});
      }

      this.onSubmitForm = () => {
        event.preventDefault();
        this.props.addComment(this.state.newUserName, this.state.newText);
        this.setState({
          newUserName: '',
          newText: ''
        });
      }
    }

   render() {
      const { addComment } = this.props;
      const { newUserName, newText } = this.state;
      return (
          <form id="form-comment"
            onSubmit={ this.onSubmitForm }>
            <label htmlFor="user-name">Ваше имя:</label>
            <input
              type="text"
              id="user-name"
              name="newUserName"
              value={ this.state.newUserName }
              onChange={ this.handleChange }
              required />
            <label htmlFor="user-text">Ваш комментарий:</label>
            <textarea
              id="user-text"
              name="newText"
              value={ this.state.newText }
              onChange={ this.handleChange }
              required>
            </textarea>
            <button className="btn comment-btn">
              Отправить
            </button>
          </form>
      );
    }
  }