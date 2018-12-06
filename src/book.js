import React from "react";
import { connect } from "react-redux";

class Book extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			
		}
	}


	render() {

		let goods = (<li className="list-group-item">Nothing selected!</li>);

		if(this.props.currentBook){
			goods = (
				<li className="list-group-item">
					<h4 className="list-group-item-heading">{this.props.currentBook.author}</h4>
					<p className="list-group-item-text">{this.props.currentBook.title}</p>
				</li>
				)
		}


		return (
				<ul className="list-group">
					<li className="list-group-item">
						<h3 className="list-group-item-heading">Selected book is:</h3>
					</li>
					{goods}
				</ul>
			)
	}
}

function mapStateToProps(state){
	return {currentBook: state.currentBook}
}

export default connect(mapStateToProps)(Book);


