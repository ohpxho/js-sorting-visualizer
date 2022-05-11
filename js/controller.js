import {states} from './sort.js';

var state_index = 0;
var isStop = false;
var a = 0;
var b = 0;
var c = 0;

function sleep(time){
  return new Promise(resolve => setTimeout(()=>resolve(), time));
}

function stop(){
	isStop = true;
}

async function play(states){
	state_index = 0; 
	isStop = false;
	a = 0;
	b = 0;
	c = 0;
	let bars = document.querySelectorAll('.bar');
	let bar_index = document.querySelectorAll('.index');
	document.getElementById('stop-btn').disabled = false;
	document.getElementById('sort-btn').disabled = true;
	
	while(state_index < states.length){
		a = states[state_index].x;
		b = states[state_index].y;
		c = states[state_index].z;
		let arr = states[state_index].arr;

		bars[a].style.backgroundColor = '#e08707';
		bars[b].style.backgroundColor = '#e08707';
		bar_index[a].style.color = '#e08707';
		bar_index[b].style.color = '#e08707';
		if(c){
			bars[c].style.backgroundColor = 'green';
			bar_index[c].style.color = 'green';	
		} 	
		await sleep(50);
		bars[a].style.height = arr[a]*2 + 'px';
		bars[b].style.height = arr[b]*2 + 'px';
		if(c) bars[c].style.height = arr[c]*2 + 'px'; 			
		await sleep(150);
		if(isStop) await pause();
		bars[a].style.backgroundColor = 'black';
		bars[b].style.backgroundColor = 'black';			
		bar_index[a].style.color = 'black';
		bar_index[b].style.color = 'black';

		if(c){
			bars[c].style.backgroundColor = 'black'; 	
			bar_index[c].style.color = 'black';	
		}
		state_index++;
	}

	document.getElementById('sort-btn').disabled = false;	
	document.getElementById('stop-btn').disabled = true;
}


function pause(){
	 return new Promise(resolve => {
	 	let play = function(){
	 		isStop = false;
	 		resolve('resolve');
	 		document.getElementById('stop-btn').innerHTML = '<img class="ctrl-icon" src="./img/pause.png"/>';
	 		document.getElementById('stop-btn').onclick = () => stop();
	 		document.getElementById('next-btn').disabled = true;
	 		document.getElementById('back-btn').disabled = true;
	 	}
	 	document.getElementById('stop-btn').innerHTML = '<img class="ctrl-icon" src="./img/resume.png"/>';
	 	document.getElementById('stop-btn').onclick = () => play(states);
	 	document.getElementById('next-btn').disabled = false;
	 	document.getElementById('back-btn').disabled = false;
	});
}

async function next(){
	let bars = document.querySelectorAll('.bar');
	let bar_index = document.querySelectorAll('.index');

	bars[a].style.backgroundColor = 'black';
	bars[b].style.backgroundColor = 'black';
	bar_index[a].style.color = 'black';
	bar_index[b].style.color = 'black';			
	if(c){
		bars[c].style.backgroundColor = 'black'; 
		bar_index[c].style.color = 'black';	
	} 

	state_index += 1;
	a = states[state_index].x;
	b = states[state_index].y;
	c = states[state_index].z;
	let arr = states[state_index].arr;

	bars[a].style.backgroundColor = '#e08707';
	bars[b].style.backgroundColor = '#e08707';	
	bar_index[a].style.color = '#e08707';
	bar_index[b].style.color = '#e08707';	
	if(c){
		bars[c].style.backgroundColor = 'green'; 
		bar_index[c].style.color = 'green';	
	}	
	
	await sleep(100);
	bars[a].style.height = arr[a]*2 + 'px';
	bars[b].style.height = arr[b]*2 + 'px';
	if(c) bars[c].style.height = arr[c]*2 + 'px'; 
}


async function prev(){
	let bars = document.querySelectorAll('.bar');
	let bar_index = document.querySelectorAll('.index');

	bars[a].style.backgroundColor = 'black';
	bars[b].style.backgroundColor = 'black';			
	bar_index[a].style.color = 'black';
	bar_index[b].style.color = 'black';			
	if(c){
		bars[c].style.backgroundColor = 'black'; 
		bar_index[c].style.color = 'black';	
	} 

	state_index -= 1;
	let x = states[state_index].x;
	let y = states[state_index].y;
	let z = states[state_index].z;
	let arr = states[state_index].arr;
	
	bars[x].style.backgroundColor = '#e08707';
	bars[y].style.backgroundColor = '#e08707';
	bar_index[x].style.color = '#e08707';
	bar_index[y].style.color = '#e08707';	
	if(z){
		bars[z].style.backgroundColor = 'green'; 
		bar_index[z].style.color = 'green';	
	}	
	
	await sleep(100);
	bars[a].style.height = arr[a]*2 + 'px';
	bars[b].style.height = arr[b]*2 + 'px';
	if(c) bars[c].style.height = arr[c]*2 + 'px'; 
	
	a = x;
	b = y;
	if(z) c = z;
}


export {play, pause, next, prev, stop};