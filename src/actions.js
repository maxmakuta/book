export function setCurrentBook(bookObj){
	return {
		type: "SET_BOOK", 
		payload: bookObj,
	}
};

export function removeBook(id){

	return {
		type: "REMOVE_BOOK",
		payload: id,
	}
};