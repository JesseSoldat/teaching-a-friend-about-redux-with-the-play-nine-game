
function randomNumber(){
	return Math.floor(Math.random()*9)+1;
}

const INITIAL_STATE = {
	stars: randomNumber()
}

export default function(state=INITIAL_STATE , action){
	switch(action.type){


		default:
			return state;

	}
}