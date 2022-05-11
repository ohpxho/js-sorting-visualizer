import {stop} from './controller.js'

var set = [];

function setElementDefault(){
	set = [];
	document.getElementById('sort-btn').disabled = false;
	document.getElementById('stop-btn').disabled = true;
	document.getElementById('next-btn').disabled = true;
	document.getElementById('back-btn').disabled = true;
	document.getElementById('stop-btn').innerHTML = '<img class="ctrl-icon" src="./img/pause.png"/>';
	document.getElementById('stop-btn').onclick = () => stop();
}

function random(){
	setElementDefault();
	let size = document.querySelector('#size-box').value;
	let max = document.querySelector('#max-box').value;
	for(let i = 0; i < size; i++){
		let rand = Math.floor((Math.random() * max) + 1);
		set[i] = rand;	
	}

	displayBars(set);
}

function generate(){
	setElementDefault();
	let input = document.querySelector('#input-array').value;
	set = JSON.parse(input);
	
	displayBars(set);	
}

function displayBars(set = []){
	refresh();
	let con = document.querySelector('#li-bar-con');
	let indx = 0;
	for(let i of set){
		let cont = document.createElement('div');
		cont.className = 'bar-con';
		con.append(cont);

		let div = document.createElement('div');
		div.className = 'bar';
		div.style.height = i*2 + 'px';
		let span = document.createElement('span');
		span.className = 'index';
		span.style.fontSize = '10px';
		span.innerHTML = indx;
		cont.append(div);
		cont.append(span);
		indx++;
	}
}

function refresh(){
	let con = document.querySelector('#li-bar-con');
	con.innerHTML = '';
}

export {random, set, generate};