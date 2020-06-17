   "use strict";
	var mainTextArea = document.getElementById('mainTextArea');
	var docInput = document.getElementById('input');
	var myIn = document.getElementById('myIn');
	
	/*
	===================
	Массив вариантов ответа... они будут высвечиваться игроку
	===================
	*/
	
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
	
	function gameTime(time){
		var i0 = 0;
		var i1 = 0;
		var i2 = 0;
		var i3 = 0;
		var iTimeMinute = 0;
		var iTimeHour = 0;
		var iTimeDay = 0;
		var progresselement0 = document.getElementById('timeProgress0');
		var progresselement1 = document.getElementById('timeProgress1');
		var progresselement2 = document.getElementById('timeProgress2');
		var progresselement3 = document.getElementById('timeProgress3');
		var textTime = document.getElementById('textTime');
		var textTimeHour = document.getElementById('textTimeHour');
		var textTimeDay = document.getElementById('textTimeDay');
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
					if (iTimeMinute <= 59){
						iTimeMinute++ ;
						textTime.innerHTML = iTimeMinute + " m. " + iTimeHour + " h. " + iTimeDay + " d. ";
						
					} else if (iTimeHour <= 23){
						iTimeMinute = 0;
						iTimeHour++ ;
						textTimeHour.innerHTML = iTimeHour;
					} else if (iTimeDay <= 30){
						iTimeHour = 0;
						iTimeDay++ ;
						textTimeDay.innerHTML = iTimeDay;
					}
				}
			},time); 
	}
	gameTime(250);
	
	//Присоение из поля input
	//(помоему это не нужно)
	function setDocInput(){
		docInput = document.getElementById('input');
	}
	//перелистывает поле вниз (скроллит)
	function scrollTextArea(){
		mainTextArea.scrollTop = mainTextArea.scrollHeight;
	}
	//печатает текст в большое поле mainTextArea какой хочешь или из поля input	
	function println(msg){
			mainTextArea.value += msg + '\n';
	}
	
	//Нажимаешь на вариант из HTML и игра играется.
	//Нажимается в HTML куске (href="javascript:hyperTextDo(hyperText2.text)")
	function hyperTextDo(n) { 
		if (docInput.value == n ) {
			play();
		} else {
			docInput.value = n;
		}
    } 
	
	/*
	===============
	Возня с гипер текстом 
	===============
	*/
	
	// вставляет в массив с именем key1 то что в arrNewtext. text что будет виден игроку
	function setHtmlElement(key1, key2, text){
		htmlElement[key1][key2] = text;
	}
	function setTextToHtmlElement(arr, arrNewtext, titleAreText1){
		for (let i = 0; i < arr.length; i++){
			if (arrNewtext[i] == undefined){
				setHtmlElement(arr[i], titleAreText1, '')
			} else {
				setHtmlElement(arr[i], titleAreText1, arrNewtext[i])
			}
		}
	}
	
	//?? создать хтмл элемент? Хавает один массив, перебирает в другой массив и выплёвывает иной массив?
	function createArrNameHtmlElement(obj){
		let arr = [];
		for (let key in obj){
			arr.push(key);
		}
		return arr;
	}
	 //Задать значение к кипертексту
	function setHyperText(arrText) {
		setTextToHtmlElement(createArrNameHtmlElement(htmlElement), arrText, 'text');
	}
	//Задать описание к гипертексту
	function setHyperTitle(arrTitle) { 
		setTextToHtmlElement(createArrNameHtmlElement(htmlElement), arrTitle, 'title');
	}
	/* конец Возни с гипер текстом */
	
	//энтер нажимаешь и всё гуд 
	// слушает нажатия кнопок и По нажатию Энтер делает дело
	document.onkeyup = 	function (e) { 
        if (e.keyCode == 13) {
            play();
        }
        return false;  // Отменяем действие браузера
    }
	
	/*
	Робот подсказывает открывая возможности
	сам процесс интересен, ты наполняеш и идёт описания расширения наполнения и роникновения 
	не описание гипноз а описание - глаза с феолетовым эффектом 
	ветку доминирования
	Ветка подчинения 
	*/
	
	
