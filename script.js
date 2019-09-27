const maxLevel = 20;
const vjDaily = 14;
const chuchuDaily = 19;
const arcanaDaily = 18;
const morassDaily = 8;
const esferaDaily = 8;

let vjLevelInput = document.getElementById("vjlvl");
let vjExpInput=document.getElementById("vjexp");

let chuchuLevelInput = document.getElementById("chuchulvl");
let chuchuExpInput = document.getElementById("chuchuexp");

let lachFloor = document.getElementById("lachfloor");
let lachLevelInput = document.getElementById("lachlvl");
let lachExpInput=document.getElementById("lachexp");

let arcanaLevelInput = document.getElementById("arcanalvl");
let arcanaExpInput = document.getElementById("arcanaexp");

let morassLevelInput = document.getElementById("morasslvl");
let morassExpInput = document.getElementById("morassexp");

let esferaLevelInput = document.getElementById("esferalvl");
let esferaExpInput = document.getElementById("esferaexp");

let button=document.getElementById("enter");

const vjMesoCalc = (currentLevel) => { 
	let totalMeso=0;
	for (i=currentLevel;i<maxLevel;i++){
		totalMeso += (2370000 + (7130000*i));
	}
	return totalMeso;
}
const MesoCalc = (currentLevel) => { 
	let totalMeso=0;
	for (i=currentLevel;i<maxLevel;i++){
		totalMeso += (12440000 + (6600000*i));
	}
	return totalMeso;
}

const SymbolsCalc = (currentLevel,currentExp) => { 
	let totalSymbol = 0;
	for (i=currentLevel;i<maxLevel;i++){
		totalSymbol += (Math.pow(i, 2)+11);
	}
	totalSymbol -= currentExp;
	return totalSymbol;
}

const inputTable = (daysLeft,totalMeso,totalSymbol,num) =>{
		let table = document.getElementById("table"),
		tr = table.getElementsByTagName('tr')[num];
		td = tr.getElementsByTagName('td')[1];
		td.innerHTML = daysLeft;
		td = tr.getElementsByTagName('td')[2];
		td.innerHTML = totalMeso;
		td = tr.getElementsByTagName('td')[3];
		td.innerHTML = totalSymbol;
}


const vjCalculate = (currentLevel,currentExp,limit) => { 
	if(currentExp >= 0 && currentExp<limit){
		let totalMeso = vjMesoCalc(currentLevel);
		let totalSymbol = SymbolsCalc(currentLevel,currentExp);
		let daysLeft = Math.ceil(totalSymbol/vjDaily);
		inputTable(daysLeft,totalMeso,totalSymbol,1);
	}
	else{
		alert("input error @ vj");
		return -1;
	}
}

const chuchuCalculate = (currentLevel,currentExp,limit) => { 
	if(currentExp >= 0 && currentExp<limit){
		let totalMeso = MesoCalc(currentLevel);
		let totalSymbol = SymbolsCalc(currentLevel,currentExp);
		let daysLeft = Math.ceil(totalSymbol/chuchuDaily);
		inputTable(daysLeft,totalMeso,totalSymbol,2);
	}
	else{
		alert("input error @ chuchu");
		return -1;
	}
}

const lachCalculate = (currentLevel,currentExp,limit,floor) => { 
	if (floor>167){
		floor = (500/3);
	}
	let lachDaily = floor*3/30+5;
	if(currentExp >= 0 && floor >= 0 && currentExp<limit){
		let totalMeso = MesoCalc(currentLevel);
		let totalSymbol = SymbolsCalc(currentLevel,currentExp);
		let daysLeft = Math.ceil(totalSymbol/lachDaily);
		inputTable(daysLeft,totalMeso,totalSymbol,3);
	}
	else{
		alert("input error @ lach");
		return -1;
	}
}

const arcanaCalculate = (currentLevel,currentExp,limit) => { 
	if(currentExp >= 0 && currentExp<limit){
		let totalMeso = MesoCalc(currentLevel);
		let totalSymbol = SymbolsCalc(currentLevel,currentExp);
		let daysLeft = Math.ceil(totalSymbol/arcanaDaily);
		inputTable(daysLeft,totalMeso,totalSymbol,4);
	}
	else{
		alert("input error @ arcana");
		return -1;
	}
}

const morassCalculate = (currentLevel,currentExp,limit) => { 
	if(currentExp >= 0 && currentExp<limit){
		let totalMeso = MesoCalc(currentLevel);
		let totalSymbol = SymbolsCalc(currentLevel,currentExp);
		let daysLeft = Math.ceil(totalSymbol/morassDaily);
		inputTable(daysLeft,totalMeso,totalSymbol,5);
	}	
	else{
		alert("input error @ morass");
		return -1;
	}
}

const esferaCalculate = (currentLevel,currentExp,limit) => { 
	if(currentExp >= 0 && currentExp<limit){
		let totalMeso = MesoCalc(currentLevel);
		let totalSymbol = SymbolsCalc(currentLevel,currentExp);
		let daysLeft = Math.ceil(totalSymbol/esferaDaily);
		inputTable(daysLeft,totalMeso,totalSymbol,6);
	}
	else{
		alert("input error @ esfera");
		return -1;
	}
}

function calculate(){
	vjCalculate(vjLevelInput.value,Number(vjExpInput.value),Math.pow(vjLevelInput.value, 2)+11);
	chuchuCalculate(chuchuLevelInput.value,Number(chuchuExpInput.value),Math.pow(chuchuLevelInput.value, 2)+11);
	lachCalculate(lachLevelInput.value,Number(lachExpInput.value),Math.pow(lachLevelInput.value, 2)+11,lachFloor.value);
	arcanaCalculate(arcanaLevelInput.value,Number(arcanaExpInput.value),Math.pow(arcanaLevelInput.value, 2)+11);
	morassCalculate(morassLevelInput.value,Number(morassExpInput.value),Math.pow(morassLevelInput.value, 2)+11);
	esferaCalculate(esferaLevelInput.value,Number(esferaExpInput.value),Math.pow(esferaLevelInput.value, 2)+11);
}


button.addEventListener("click", calculate);