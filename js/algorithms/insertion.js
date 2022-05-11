
function insertion(bar = []){
	let states = [];
	for(let a = 1; a < bar.length; a++){
		let key = bar[a];
		let b = a-1;
		while(b > -1 && bar[b] > key){
			bar[b+1] = bar[b];
			let copy = JSON.parse(JSON.stringify(bar));
			states.push({arr: copy, x: a, y: b+1});
			b--;
		}
		bar[b+1] = key;
		let copy = JSON.parse(JSON.stringify(bar));
		states.push({arr: copy, x: a, y: b+1});
	}
	return states;
}

export {insertion};
	
