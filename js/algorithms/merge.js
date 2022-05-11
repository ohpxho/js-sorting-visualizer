
function merge(bar = []){	
	let states = [];
	mergeSort(bar, 0, bar.length-1, states);
	return states;
}

function mergeSort(bar, l, r, states){
	if(l < r) {
	    let m = Math.floor(l+(r-l)/2);

	    mergeSort(bar, l, m, states);
	    mergeSort(bar, m+1, r, states);

	    combine(bar, l, m, r, states);
	}
}

function combine(bar, l, m, r, states){
    let n1 = m - l + 1;
    let n2 = r - m;

    let L = [];
    let R = [];

    for(let i = 0; i < n1; ++i)
        L.push(bar[l + i]);
    for(let j = 0; j < n2; ++j)
        R.push(bar[m + 1 + j]);

    let i = 0; 
    let j = 0;

    let k = l;
    while(i < n1 && j < n2){
        if (L[i] <= R[j]){
            bar[k] = L[i];
            let copy = JSON.parse(JSON.stringify(bar));
            states.push({arr: copy, x: k, y: i});

            i++;
        }
        else{
            bar[k] = R[j];
            let copy = JSON.parse(JSON.stringify(bar));
            states.push({arr: copy, x: k, y: j});
            j++;
        }
        k++;
    }

    while(i < n1){
        bar[k] = L[i];
        let copy = JSON.parse(JSON.stringify(bar));
        states.push({arr: copy, x: k, y: i});
        i++;
        k++;
    }

    while(j < n2){
        bar[k] = R[j];
        let copy = JSON.parse(JSON.stringify(bar));
        states.push({arr: copy, x: k, y: j});
        j++;
        k++;
    }

    
}
     
export {merge};