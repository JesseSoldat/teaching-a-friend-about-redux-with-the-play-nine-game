import {
	SELECT_NUMBER,
	UNSELECT_NUMBER,
	CHECK_ANSWER,
	ACCEPT_ANSWER,
	REDRAW,
	CHECK_GAME_OVER,
	PLAY_AGAIN
} from '../actions/types';

function randomNumber(){
	return Math.floor(Math.random()*9) +1;
}

const INITIAL_STATE = {
	stars: randomNumber(),
	selectedNumbers: [],
	usedNumbers: [],
	unSelectedNumbers: [],
	correct: null,
	redraws: 5, 
	doneStatus: null
}

export default function(state = INITIAL_STATE, action) {

	let tempSelectedNumbers = [];
	let tempUsedNumbers = [];
	let indexOfNumber;
	let indexOfUsed;

	switch(action.type){

		case SELECT_NUMBER:
			//check to see if the number has been selected already
			indexOfNumber = state.selectedNumbers.indexOf(action.payload);
			//check to see if we have used the number already
			indexOfUsed = state.usedNumbers.indexOf(action.payload);
			//if not selected already and not used PUSH to the tempSelectedNumbers ARRAY
			if(indexOfNumber < 0 && indexOfUsed < 0){
				tempSelectedNumbers.push(action.payload);
			}
			return {
				...state,
				//take current state and modify the selectedNumbers property
				selectedNumbers: state.selectedNumbers.concat(tempSelectedNumbers)
			}
		//user clicks in the answer frame to unselect a number
		case UNSELECT_NUMBER:
		//set the tempSelectedNumbers ARRAY to the current state
		tempSelectedNumbers = state.selectedNumbers;
		//find the index of the number click on 
		indexOfNumber = tempSelectedNumbers.indexOf(action.payload);
		//remove it from the tempSelectedNumbers ARRAY
		tempSelectedNumbers.splice(indexOfNumber, 1);

			return {
				...state,
				//take the current state and modify the selectedNumbers property
				selectedNumbers: tempSelectedNumbers,
				correct: null
			}

		case CHECK_ANSWER:
		//get the total amount of the selectedNumbers
		let sum = state.selectedNumbers.reduce( (p, n) => p + n);
		let correct = state.stars  === sum;
		return {
			...state,
			correct: correct
		};

		case ACCEPT_ANSWER:
		tempUsedNumbers = state.usedNumbers.concat(state.selectedNumbers);

		return {
			...state,
			selectedNumbers: [],
			usedNumbers: tempUsedNumbers,
			correct: null,
			stars: randomNumber()
		};

		case REDRAW:

			return {
				...state,
				selectedNumbers: [],
				correct: null,
				stars: randomNumber(),
				redraws: state.redraws - 1
			};

		case CHECK_GAME_OVER:

			return {
				...state,
				doneStatus: action.payload.status,
				redraws: action.payload.redraws
			};

		case PLAY_AGAIN:

			return {
				...state,
				stars: randomNumber(),
				selectedNumbers: [],
				usedNumbers: [],
				unSelectedNumbers: [],
				correct: null,
				redraws: 5,
				doneStatus: null
			};


		default: 
			return state;
	}
}