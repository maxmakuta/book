import React from "react";
import BookList from "./booklist";
import Book from "./book";


export default class List extends React.Component {
	constructor(){
		super();
		this.state = {

		}
		

	}

	render(){
		return (
				<div className="container">
					<div className="col-xs-12 col-md-4 col-md-offset-4">
						<BookList />
						<Book />
					</div>				
				</div>

		)
	}
};



