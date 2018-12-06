import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setCurrentBook, removeBook } from "./actions";

console.log(setCurrentBook);

class Books extends React.Component {
	constructor(props){
		super(props);

	}

	render() {
		let bookList;
		if(this.props.allBooks){ 
			bookList = this.props.allBooks.map( book => {
				return (<li 
							key={book.title} 
							className="list-group-item"
							onClick={() => {
								
								this.props.setBook(book);
							}}
							>
							<p className="list-group-item-text">
								{book.title}
								<span 
									className="glyphicon glyphicon-remove pull-right"
									onClick={e => {
										e.stopPropagation();
										this.props.removeBook(book.id);
									}}
								>
								</span>
							</p>
						</li>);
			} )
		}

		return (
				<ul className="list-group">
					<li className="list-group-item">
						<h3 className="list-group-item-heading">Books2</h3>
					</li>
					{bookList}
				</ul>
			)
	}
};

function mapStateToProps(state){ 
	return {allBooks: state.books} 
}



function mapDispatchToProps(dispatch){
	return bindActionCreators({setBook: setCurrentBook, removeBook: removeBook}, dispatch);
	
}

export default connect(mapStateToProps, mapDispatchToProps)(Books);


