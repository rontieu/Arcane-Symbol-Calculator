const maxLevel = 20;
const area = [0,1,2,3,4,5]
let dailyCount = [14, 19, 0, 18, 8, 8]

let vjLevelInput = document.getElementById("vjlvl");
let chuchuLevelInput = document.getElementById("chuchulvl");
let lachLevelInput = document.getElementById("lachlvl");
let arcanaLevelInput = document.getElementById("arcanalvl");
let morassLevelInput = document.getElementById("morasslvl");
let esferaLevelInput = document.getElementById("esferalvl");

let vjExpInput=document.getElementById("vjexp");
let chuchuExpInput = document.getElementById("chuchuexp");
let lachExpInput=document.getElementById("lachexp");
let arcanaExpInput = document.getElementById("arcanaexp");
let morassExpInput = document.getElementById("morassexp");
let esferaExpInput = document.getElementById("esferaexp");

let lachFloor = document.getElementById("lachfloor");

let button = document.getElementById("enter");

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

const validInput = (currentExp,limit) => {
	let valid = (currentExp >= 0 && currentExp<limit)?true:false
	return valid;
}

const lachValidInput = (currentExp,limit,floor) => {
	console.log (currentExp,limit,floor)
	let valid = (validInput(currentExp,limit) && floor >=0)?true:false
	return valid;
}

const inputTable = (daysLeft,totalMeso,totalSymbol,id) =>{
	let input = [daysLeft,totalMeso,totalSymbol];
	let table = document.getElementById("table"),
	tr = table.getElementsByTagName('tr')[id+1];
	for(i=1;i<=3;i++){
		td = tr.getElementsByTagName('td')[i];
		td.innerHTML = input[i-1];
	}
}

const calculations = (currentLevel,currentExp,area) =>{
	let id = area;
	let totalMeso = (id === 0)?vjMesoCalc(currentLevel): MesoCalc(currentLevel);
	let totalSymbol = SymbolsCalc(currentLevel,currentExp);
	let daysLeft = Math.ceil(totalSymbol/dailyCount[area]);
	inputTable(daysLeft,totalMeso,totalSymbol,id);
}

const lachcalculations = (currentLevel,currentExp,area,dailyCount) =>{
	let id = area;
	let totalMeso = (id === 0)?vjMesoCalc(currentLevel): MesoCalc(currentLevel);
	let totalSymbol = SymbolsCalc(currentLevel,currentExp);
	let daysLeft = Math.ceil(totalSymbol/dailyCount);
	inputTable(daysLeft,totalMeso,totalSymbol,id);
}

const vjCalculate = (currentLevel = vjLevelInput.value,currentExp = Number(vjExpInput.value),limit = Math.pow(vjLevelInput.value, 2)+11) => { 
	if(validInput(currentExp,limit)){
		calculations(currentLevel,currentExp,area[0]);
	}
	else{
		alert("input error @ vj");
		return -1;
	}
}

const chuchuCalculate = (currentLevel = chuchuLevelInput.value,currentExp = Number(chuchuExpInput.value),limit = Math.pow(chuchuLevelInput.value, 2)+11) => { 
	if(validInput(currentExp,limit)){
		calculations(currentLevel,currentExp,area[1]);
	}
	else{
		alert("input error @ chuchu");
		return -1;
	}
}

const lachCalculate = (currentLevel = lachLevelInput.value,currentExp = Number(lachExpInput.value),limit = Math.pow(lachLevelInput.value, 2)+11,floor=lachFloor.value) => { 
	if (floor>=167) floor = (500/3);
	let dailyCount = floor*3/30+5;
	if(lachValidInput(currentExp,limit,floor)){
		lachcalculations(currentLevel,currentExp,area[2],dailyCount);
	}
	else{
		alert("input error @ lach");
		return -1;
	}
}

const arcanaCalculate = (currentLevel = arcanaLevelInput.value,currentExp = Number(arcanaExpInput.value),limit = Math.pow(arcanaLevelInput.value, 2)+11) => { 
	if(currentExp >= 0 && currentExp<limit){
		calculations(currentLevel,currentExp,area[3]);
	}
	else{
		alert("input error @ arcana");
		return -1;
	}
}

const morassCalculate = (currentLevel = morassLevelInput.value,currentExp = Number(morassExpInput.value),limit = Math.pow(morassLevelInput.value, 2)+11) => { 
	if(currentExp >= 0 && currentExp<limit){
		calculations(currentLevel,currentExp,area[4]);
	}	
	else{
		alert("input error @ morass");
		return -1;
	}
}

const esferaCalculate = (currentLevel = esferaLevelInput.value,currentExp = Number(esferaExpInput.value),limit = Math.pow(esferaLevelInput.value, 2)+11) => { 
	if(currentExp >= 0 && currentExp<limit){
		calculations(currentLevel,currentExp,area[5]);
	}
	else{
		alert("input error @ esfera");
		return -1;
	}
}

function calculate(){
	vjCalculate();
	chuchuCalculate();
	lachCalculate();
	arcanaCalculate();
	morassCalculate();
	esferaCalculate();
}


button.addEventListener("click", calculate);