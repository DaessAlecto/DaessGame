   "use strict";


	
	var progresselement0 = document.getElementById('timeProgress0');
	var progresselement1 = document.getElementById('timeProgress1');
	var progresselement2 = document.getElementById('timeProgress2');
	var progresselement3 = document.getElementById('timeProgress3');
	var textTime = document.getElementById('textTime');
	var textTimeHour = document.getElementById('textTimeHour');
	var textTimeDay = document.getElementById('textTimeDay');
	var i0 = 0;
	var i1 = 0;
	var i2 = 0;
	var i3 = 0;
	var iTimeMinute = 0;
	var iTimeHour = 0;
	var iTimeDay = 0;
	var mainTextArea = document.getElementById('mainTextArea');
		
	function gameTime(time){
		setInterval(function(){
			if (i0 < 4){
				i0++;
				progresselement0.value = i0;
			} else if (i1 < 4){
				i1++;
				progresselement1.value = i1;
			} else if (i2 < 4){
				i2++;
				progresselement2.value = i2;
			} else if (i3 < 4){
				i3++;
				progresselement3.value = i3;
			} else {
				i0 = 0;
				i1 = 0;
				i2 = 0;
				i3 = 0;
				progresselement0.value = i0;
				progresselement1.value = i1;
				progresselement2.value = i2;
				progresselement3.value = i3;
				if (iTimeMinute < 59){
					iTimeMinute++ ;
					textTime.innerHTML = iTimeMinute + " m. " + iTimeHour + " h. " + iTimeDay + " d. ";
				} else if (iTimeHour < 23){
					iTimeMinute = 0;
					iTimeHour++ ;
					textTimeHour.innerHTML = iTimeHour;
				} else if (iTimeDay < 30){
					iTimeHour = 0;
					iTimeDay++ ;
					textTimeDay.innerHTML = iTimeDay;
				}
			}
		},time); 
	}
	gameTime(250);
	document.onkeyup = 	function (e) {
        if (e.keyCode == 13) {
            play();
        }
        return false;  // Отменяем действие браузера
    }	
	function scrollTextArea(){ 
		mainTextArea.scrollTop = mainTextArea.scrollHeight;
	}
	function println(msg){
			mainTextArea.value += msg + '\n';
	}
	var docInput = document.getElementById('input');
	function hyperTextDo(n) { 
		if (docInput.value == n ) {
			play();
		} else {
			docInput.value = n;
		}
    } 
	// вставляет в массив с именем key1 то что в arrNewtext. text что будет виден игроку
	const htmlElement = {
		hyperText1: document.getElementById('hyperText1'),
		hyperText2: document.getElementById('hyperText2'),
		hyperText3: document.getElementById('hyperText3'),
		hyperText4: document.getElementById('hyperText4'),
		hyperText5: document.getElementById('hyperText5'),
		hyperText6: document.getElementById('hyperText6'),
		hyperText7: document.getElementById('hyperText7'),
		hyperText8: document.getElementById('hyperText8'),
		hyperText9: document.getElementById('hyperText9'),
		hyperText10: document.getElementById('hyperText10')
	};
		//?? создать хтмл элемент? Хавает один массив, перебирает в другой массив и выплёвывает иной массив?
	let arr = ['','','','','','','','','',''];
	function createArrNameFromObjHtmlElement(){ //objToArr
		let obj = htmlElement;
		for (let i = 0; i < arr.length; i++){
			arr[i] = '';
		}
		let n = 0;
		for (let key in obj){
			arr[n]= key;
			n++ ;
		}
	}
	function setTextToHtmlElement(arrNewtext, titleAreText1){
		createArrNameFromObjHtmlElement();
		for (let i = 0; i < arr.length; i++){
			let newText = arrNewtext[i];
			if (arrNewtext[i] == undefined){
				newText = '';
			} 
			htmlElement[arr[i]] [titleAreText1] = newText;
		}
	}
	//Задать значение к кипертексту
	function setHyperText(arrText) {
		setTextToHtmlElement(arrText, 'text');
	}
	//Задать описание к гипертексту
	function setHyperTitle(arrTitle) { 
		setTextToHtmlElement(arrTitle, 'title');
	}
