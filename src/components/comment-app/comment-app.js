import React, { Component } from 'react';

import CommentForm from '../comment-form';
import CommentItem from '../comment-item';

import './comment-app.css';

export default class CommentsApp extends Component {
    constructor(){
      super();
      
       this.getDateTimeNow = () => {
        const dateTimeNow = new Date();

        const optionsDate = {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          timezone: 'UTC',
        };

        return dateTimeNow.toLocaleString("ru", optionsDate);
      }
      
      if(!localStorage.getItem('usersComments')) {
        localStorage.setItem('usersComments', 
        JSON.stringify({comments: []})
          );
      }
      this.state = JSON.parse(localStorage.getItem('usersComments'));

       this.addComment = (newUserName, newText) => {
        const comments = this.state.comments;
        comments.push({
          name: newUserName,
          text: newText,
          time: this.getDateTimeNow()
        });
        this.setState({
          comments
        });

        localStorage.setItem('usersComments', JSON.stringify({comments: comments}));
      }

       this.removeComment = (index) => {
        const comments = this.state.comments.filter(comment => this.state.comments.indexOf(comment) !== index);
        localStorage.removeItem('usersComments');
        localStorage.setItem('usersComments', JSON.stringify({comments: comments}));
        this.setState({comments});
      }
    }

    render() {
      return (
        <div id="col-center-container">
          <h3 className="col-title">Текущая тема</h3>
          <div id="comments-container">
            {
            this.state.comments.map((comment, index) => {
              return (
                <CommentItem 
                  key={ index }
                  name={ comment.name }
                  text={ comment.text }
                  time={ comment.time }
                  removeComment={() => this.removeComment(index) }
                />
              );
            })
          }
        </div>
        <CommentForm addComment={ this.addComment } />
      </div>          
    );
  }
}