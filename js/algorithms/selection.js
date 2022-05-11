
function selection(bar = []){
	let states = [];

	for(let a = 0; a < bar.length; a++){
		let min = a;
		for(let b = a+1; b < bar.length; b++){
			if(bar[min] > bar[b]){
				min = b;
			}
			let copy = JSON.parse(JSON.stringify(bar));
			states.push({arr: copy, x: a, y: b, z: min});

		}
		let temp = bar[min];
		bar[min] = bar[a];
		bar[a] = temp;
		let copy = JSON.parse(JSON.stringify(bar));
		states.push({arr: copy, x: a, y: min});
	}

	return states;
}

export {selection};