import React from 'react';
import CommentItem from './CommentItem';

class CommentsApp extends React.Component {
	constructor(){
		super();

		if(!localStorage.getItem('usersComments')) {
			localStorage.setItem('usersComments', 
				JSON.stringify({comments: [
					{name: 'Имя', text: 'аааа', time: this.getDateTimeNow()}
				]})
			);
		}
		this.state = JSON.parse(localStorage.getItem('usersComments'));
		this.removeComment = this.removeComment.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		const name = event.target.name; 
		const value = event.target.value;
		this.setState({[name]: value});
	}

	getDateTimeNow() {
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

	addComment() {
		event.preventDefault();
		const comments = this.state.comments;
		comments.push({
			name: this.state.newUserName,
			text: this.state.newText,
			time: this.getDateTimeNow()
		});
		this.setState({
			comments,
			newUserName: '',
			newText: ''
		});

		localStorage.setItem('usersComments', JSON.stringify({comments: comments}));
	}

	removeComment(index) {
		const comments = this.state.comments.filter(comment => this.state.comments.indexOf(comment) !== index);
		localStorage.removeItem('usersComments');
		localStorage.setItem('usersComments', JSON.stringify({comments: comments}));
		this.setState({comments});
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
								key={index}
								name={comment.name}
								text={comment.text}
								time={comment.time}
								removeComment={() => this.removeComment(index)}
							/>
						)
					})
				}
				</div>
				<form id="form-comment"
					onSubmit={event=>{
					this.addComment();
					}}>
					<label htmlFor="user-name">Ваше имя:</label>
					<input
						type="text"
						id="user-name"
						name="newUserName"
						value={this.state.newUserName}
						onChange={this.handleChange}
						required />
					<label htmlFor="user-text">Ваш комментарий:</label>
					<textarea
						id="user-text"
						name="newText"
						value={this.state.newText}
						onChange={this.handleChange}
						required>
					</textarea>
					<button className="btn comment-btn">Отправить</button>
				</form>
			</div>          
		);
	}
}

export default CommentsApp;