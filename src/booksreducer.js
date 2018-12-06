let initalState = [
		{
			title: "3 Musketeers",
			author: "Duma",
			id: 1,
		},
		{
			title: "The Great Che",
			author: "Uspensky",
			id: 2,
		},
		{
			title: "Arc",
			author: "Remark",
			id: 3,
		},
		{
			title: "Arc2",
			author: "Remark3",
			id: 3,
		},
	];

export default function(state = initalState, action){
	switch (action.type){
		case "REMOVE_BOOK":
		let newState = [...state]; 
		newState = newState.filter( book => book.id !== action.payload );
		return newState;

		
	}
	
	return state
};

