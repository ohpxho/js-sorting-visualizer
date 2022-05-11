
function quick(bar = []){
    let states = [];
    let size = bar.length;
	quicksort(bar, 0, size-1, states);
	return states;	
}

function quicksort(bar, low, high, states){
	if(low < high){
		let pi = partition(bar, low, high, states);
 		quicksort(bar, low, pi - 1, states);
        quicksort(bar, pi + 1, high, states);
	}
}

function swap(bar, i, j){
	let temp = bar[i];
    bar[i] = bar[j];
    bar[j] = temp;
}

function partition(bar, low, high, states){
    let pivot = bar[high];
    let i = (low - 1);
 
    for(let j = low; j <= high; j++){
        if (bar[j] < pivot){
            i++;
            swap(bar, i, j);
            let copy = JSON.parse(JSON.stringify(bar));
            states.push({arr: copy, x: i, y: j, z: high});
            continue;
        }
        let copy = JSON.parse(JSON.stringify(bar));
        states.push({arr: copy, x: i+1, y: j, z: high});   
    }

    swap(bar, i + 1, high);
    let copy = JSON.parse(JSON.stringify(bar));
    states.push({arr: copy, x: i+1, y: high, z: high});
    return (i + 1);
}

export {quick};
	
