export default function(state = null, action){

	console.log(action);

	switch (action.type){
		case "SET_BOOK":
		return action.payload;
	}

	return state
};