var arrHTT1 = ['Переидти', 'Персонажи', 'Шен', 'Телевизор', 'Шкатулка']; //['Переидти', 'Алон', '5 кг', '10 кг', 'Отдых', 'Спорт', 'Самца', 'Телефон', 'Персонажи'];




function shen(str){
	switch (str) {
		case 'шен':
			dialog['shen.hi'].entry();
		break; 
		default:
		currentDialog.choice(inputValue);
	}
}

class Shen_Hi extends Dialog{
	text = '*Вы смотрите на шена.* \nВы: Хэй шен! \nШен: хай.';
	hyperText = ['Осмотреть шена', 'Всё ок шен, я закончил' ]; 
	
	entry(){
		println(this.text);
		setHyper(this.hyperText);
		currentDialog = this;
	}
	choice (str) {
		switch (str) {
			case this.hyperText[0].toLowerCase():
				dialog['shen.look'].entry();
			break;
			case this.hyperText[1].toLowerCase():
				dialog['shen.exit'].entry();
			break;
		}
	}
}
class Shen_Look extends Dialog{ // Appearance
	text = '*Вы пристально смотрите на шена* '+
		'\nШен: Чего ты на меня так пристально уставился? \nВы: Оцениваю. '+
		'\n*Это ваш сожитель с которым вы делите квартиру, а может что-то большее. '+
		'\nОдет самец в футболку и шорты. \nСамец среднего телосложения. \nРост самца примерно 160 - 175 снтиметров*';
	hyperText = ['Осмотреть шена', 'А что в трусах шен?', 'Всё ок шен, я закончил' ];
	
	entry(){
		println(this.text);
		setHyper(this.hyperText);
		currentDialog = this;
	}
	choice (str) {
		switch (str) {
			case 'осмотреть шена':
				dialog['shen.look'].entry()
			break;
			case 'а что в трусах шен?':
				dialog['shen.LookDick'].entry();
			break;
			case 'всё ок шен, я закончил':
				dialog['shen.exit'].entry()
			break;
		}
	}
}
class Shen_LookDick extends Dialog{
	text = 'Вы: А что в трусах шен? \n*шен спокойно спускает трусы демонстрируя свой член. '+
		'*член кажется 9 сантиметров и не возбуждён (15 сантиметров возбуждённый.) \nЯички кажется 3 сантиметра каждое. '+
		'\nШен снова поднимает свои трусы и поправляет их* ';
		
	entry(){
		println(this.text);
	}
	choice (str) {
		switch (str) {
			case 'none':
			
			break;
		}
	}
}
class Shen_Exit extends Dialog{
	text = 'Вы: всё ок шен, я закончил. \nШен: лады.';
	hyperText = arrHTT1;
	
	entry(){
		println(this.text);
		setHyper(this.hyperText);
		currentDialog = dialog['none'];
		currentInterlocutor = 'none';
	}
	choice(str) {
		
	}
}


dialog['shen.hi'] = new Shen_Hi();
dialog['shen.look'] = new Shen_Look();
dialog['shen.LookDick'] = new Shen_LookDick(); 
dialog['shen.exit'] = new Shen_Exit();


//несколько входов и выходов из диалога 



// чтио расскажешь о сексе? 
// расказать о сексе или если сначало осмотрел - возмутиться что домагаешся


// https://www.youtube.com/watch?v=0ZCcUwiqOfA