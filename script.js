var maxLevel = 20;

var vjDaily = 14;
var vjLevelInput = document.getElementById("vjlvl");
var vjExpInput=document.getElementById("vjexp");

var chuchuDaily = 19;
var chuchuLevelInput = document.getElementById("chuchulvl");
var chuchuExpInput = document.getElementById("chuchuexp");

var lachFloor = document.getElementById("lachfloor");
var lachLevelInput = document.getElementById("lachlvl");
var lachExpInput=document.getElementById("lachexp");

var arcanaDaily = 18;
var arcanaLevelInput = document.getElementById("arcanalvl");
var arcanaExpInput = document.getElementById("arcanaexp");

var morassDaily = 8;
var morassLevelInput = document.getElementById("morasslvl");
var morassExpInput = document.getElementById("morassexp");

var esferaDaily = 8;
var esferaLevelInput = document.getElementById("esferalvl");
var esferaExpInput = document.getElementById("esferaexp");

var button=document.getElementById("enter");

function vjMesoCalc(a){
	var i=a;
	var totalMeso=0;
	while (i<maxLevel){
		totalMeso += (2370000 + (7130000*i));
		i++;
	}
	return totalMeso;
}

function MesoCalc(a){
	var i=a;
	var totalMeso=0;
	while (i<maxLevel){
		totalMeso += (12440000 + (6600000*i));
		i++;
	}
	return totalMeso;
}

function SymbolsCalc(a,b,c){
	var i = a;
	var currentExp = b;
	var totalSymbol = 0;
	var limit = c;
	var daysLeft;
	while (i<20){
		totalSymbol += (Math.pow(i, 2)+11);
		i++;
	}
	totalSymbol -= currentExp;
	return totalSymbol;
}

function vjCalculate(a,b,c){
	var currentLevel = a;
	var currentExp = b;
	var limit = c;
	if(currentExp >= 0 && currentExp<limit){
		var totalMeso = vjMesoCalc(currentLevel);
		var totalSymbol = SymbolsCalc(currentLevel,currentExp,limit);
		var daysLeft = Math.ceil(totalSymbol/vjDaily);
		var table = document.getElementById("table"),
		tr = table.getElementsByTagName('tr')[1];
     	td = tr.getElementsByTagName('td')[1];
      	td.innerHTML = daysLeft;
      	td = tr.getElementsByTagName('td')[2];
      	td.innerHTML = totalMeso;
      	td = tr.getElementsByTagName('td')[3];
      	td.innerHTML = totalSymbol;
	}
	else{
		alert("input error @ vj");
		return -1;
	}
}




function chuchuCalculate(a,b,c){
	var currentLevel = a;
	var currentExp = b;
	var limit = c;
	if(currentExp >= 0 && currentExp<limit){
		var totalMeso = MesoCalc(currentLevel);
		var totalSymbol = SymbolsCalc(currentLevel,currentExp,limit);
		var daysLeft = Math.ceil(totalSymbol/chuchuDaily);
		tr = table.getElementsByTagName('tr')[2];
     	td = tr.getElementsByTagName('td')[1];
      	td.innerHTML = daysLeft;
      	td = tr.getElementsByTagName('td')[2];
      	td.innerHTML = totalMeso;
      	td = tr.getElementsByTagName('td')[3];
      	td.innerHTML = totalSymbol;	
    }
	else{
		alert("input error @ chuchu");
		return -1;
	}
}

function lachCalculate(a,b,c,d){
	var currentLevel = a;
	var currentExp = b;
	var limit = c;
	var floor = d;
	if (floor>167){
		floor = (500/3);
	}
	var lachDaily = floor*3/30+5;
	if(currentExp >= 0 && floor >= 0 && currentExp<limit){
		var totalMeso = MesoCalc(currentLevel);
		var totalSymbol = SymbolsCalc(currentLevel,currentExp,limit);
		var daysLeft = Math.ceil(totalSymbol/lachDaily);
		tr = table.getElementsByTagName('tr')[3];
     	td = tr.getElementsByTagName('td')[1];
      	td.innerHTML = daysLeft;
      	td = tr.getElementsByTagName('td')[2];
      	td.innerHTML = totalMeso;
      	td = tr.getElementsByTagName('td')[3];
      	td.innerHTML = totalSymbol;	
    }
	else{
		alert("input error @ lach");
		return -1;
	}
}

function arcanaCalculate(a,b,c){
	var currentLevel = a;
	var currentExp = b;
	var limit = c;
	if(currentExp >= 0 && currentExp<limit){
		var totalMeso = MesoCalc(currentLevel);
		var totalSymbol = SymbolsCalc(currentLevel,currentExp,limit);
		var daysLeft = Math.ceil(totalSymbol/arcanaDaily);
		tr = table.getElementsByTagName('tr')[4];
     	td = tr.getElementsByTagName('td')[1];
      	td.innerHTML = daysLeft;
      	td = tr.getElementsByTagName('td')[2];
      	td.innerHTML = totalMeso;
      	td = tr.getElementsByTagName('td')[3];
      	td.innerHTML = totalSymbol;	
	}
	else{
		alert("input error @ arcana");
		return -1;
	}
}

function morassCalculate(a,b,c){
	var currentLevel = a;
	var currentExp = b;
	var limit = c;
	if(currentExp >= 0 && currentExp<limit){
		var totalMeso = MesoCalc(currentLevel);
		var totalSymbol = SymbolsCalc(currentLevel,currentExp,limit);
		var daysLeft = Math.ceil(totalSymbol/morassDaily);
		tr = table.getElementsByTagName('tr')[5];
     	td = tr.getElementsByTagName('td')[1];
      	td.innerHTML = daysLeft;
      	td = tr.getElementsByTagName('td')[2];
      	td.innerHTML = totalMeso;
      	td = tr.getElementsByTagName('td')[3];
      	td.innerHTML = totalSymbol;
    }	
	else{
		alert("input error @ morass");
		return -1;
	}
}

function esferaCalculate(a,b,c){
	var currentLevel = a;
	var currentExp = b;
	var limit = c;
	if(currentExp >= 0 && currentExp<limit){
		var totalMeso = MesoCalc(currentLevel);
		var totalSymbol = SymbolsCalc(currentLevel,currentExp,limit);
		var daysLeft = Math.ceil(totalSymbol/esferaDaily);
		tr = table.getElementsByTagName('tr')[6];
     	td = tr.getElementsByTagName('td')[1];
      	td.innerHTML = daysLeft;
      	td = tr.getElementsByTagName('td')[2];
      	td.innerHTML = totalMeso;
      	td = tr.getElementsByTagName('td')[3];
      	td.innerHTML = totalSymbol;	
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