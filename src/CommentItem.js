import React from 'react';
import './comment.css';

class CommentItem extends React.Component {
	constructor(props) {
		super();
	}

	render() {
		return (
			<div className="comment">
				<div className="comment-title">
					<h4 className="comment-name">{this.props.name}</h4>
					<span className="comment-remove"
							onClick={this.props.removeComment}>X</span>            
				</div>
				<p className="comment-time">{this.props.time}</p>
				<p className="comment-text">{this.props.text}</p>
			</div>
		);
	}
}

export default CommentItem;