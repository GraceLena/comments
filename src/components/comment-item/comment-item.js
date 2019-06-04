import React, { Component } from 'react';

import './comment-item.css';

export default class CommentItem extends Component {
    constructor() {
      super();      
    }

    render() {
      const { name, text, time, removeComment } = this.props;
      return (
        <div className="comment">
          <div className="comment-title">
            <h4 className="comment-name">{ name }</h4>
            <span className="comment-remove"
              onClick={ removeComment }>X</span>            
          </div>
          <p className="comment-time">{ time }</p>
          <p className="comment-text">{ text }</p>
        </div>
      )
    }
  }