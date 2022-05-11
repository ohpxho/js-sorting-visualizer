
function bubble(bar = []){
	let states = [];
	for(let a = 0; a < bar.length; a++){
		for(let b = a+1; b < bar.length; b++){
			if(bar[b] < bar[a]){
				let temp = bar[a];
				bar[a] = bar[b];
				bar[b] = temp;
			}
			let copy = JSON.parse(JSON.stringify(bar));
			states.push({arr: copy, x: a, y: b});
		}
	}

	return states;
}

export {bubble};
	
