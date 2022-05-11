import {insertion} from "./algorithms/insertion.js";
import {bubble} from "./algorithms/bubble.js";
import {quick} from "./algorithms/quick.js";
import {selection} from "./algorithms/selection.js";
import {merge} from "./algorithms/merge.js";
import {set} from "./bar.js";
import {play} from "./controller.js";

var states = [];

function sort(){	
	states = [];
	let algorithm = document.querySelector('input[name="sort-menu"]:checked').value;
	switch(algorithm){
		case 'insertion':
			states = insertion(set);
			break;
		case 'bubble':
			states = bubble(set);
			break;
		case 'quick':
			states = quick(set);
			break;
		case 'selection':
			states = selection(set);
			break;
		case 'merge':
			states = merge(set);
			break;
	}
	console.log(states);
	play(states);
}

export {sort, states};