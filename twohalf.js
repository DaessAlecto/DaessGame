﻿var inputValue;

//Сунуть в глобальную переменную (типо то что лежит в Input.... на данный момент сую )
function setInputValue(str){
	inputValue = str;
}
function setHyper(arr){
	setHyperText (arr);
	//setHyperTitle (arr);
}
function other(str){
	switch (str) {
		case 'шен':
			dialog['shen.hi'].entry();
		break; 
		case 'шкатулка':
			dialog['musicBox.hi'].entry();
		break; 
		case 'видео':
			dialog['video.hi'].entry();
		break; 
		default:
		currentDialog.choice(inputValue);
	}
}
function play() { // ну, тут начинается колдовство
    setInputValue(docInput.value.toLowerCase());
	println('\n' + '>' + docInput.value );
	svichCharacter.svich(inputValue);
	if (curentCharacter == 'лев'){
		optionsLionCharacter.optionMove(inputValue);
		optionsLionCharacter.tV(inputValue);
		combatSystem.fight(inputValue);
		other(inputValue);
	}
	if (curentCharacter == 'фенник'){
		optionsFennecCharacter.optionsFennec(inputValue);
	}
	docInput.value = '';
	scrollTextArea();
}
function startLion(){
	//localStorage.clear(); //Типо чтобы почистить кеш дял проверок
	
	//println('Вы в теле льва');
	//setHyper (arrHTT1);
	dialog['livingRoom.hi'].entry();
};
window.addEventListener("load", function(event) {
	startLion();
	art.src = 'http://d.facdn.net/art/blackfox85/1469147312/1469147312.blackfox85_give_it_a_smile_resize.jpg' ;
	console.log("All resources finished loading!");
});
	

	
	/*
	// Мне надоело бегать от момента что на чтото влияет до другого момента что на чтото влияет 
			// Написать приказы пользователям как они могут помочь группе и что могт делать чтобы развивать группу.
	// Зелёные и красные приказы (сохраняют группу и развивают группу... или чтото типо про людей )
	
	// Перед превращением в тавра предложить попробовать мехзанический вариант без замен конечности  (метало жопа тавра )
	

	// Факт: злодей, нейтрал, добряк
	// Факт: воин (слава) Вор (богадства) Маг (знания)  
		// Идея: переключение режимов телефонныйц и пк
		// идея: увеличить расстояние между кнопками на	2 сантиметра. а главную увелдичить в 2 раза 
		// Идея: менять цвет интерфейса.
		// Главная идея: конструктор персонажа или редактор при заходе в игру.
		// Идея: делать важыйпредметы похожими на ненужные и наоборот.
		// Идея: предмет расширения инвентаря.
		// Идея: логическое расположение НПС и действия согласно расположениям. 
		// Идея: магический посох или артефакт что не требует использования ресурса персонажа для особого эффекта. 
		// Идея: индификация вещей
		// Идея: прокачка навыка оценки вещей
		// Идея: рандомная генерация?
		// Идея: перфекцеанизм (или видимый эффект... как от гранаты в толпу.)
		// Идея: грех, пере избытачный сценарий ебли, слишком чтоб затрахал!
		// Идея: Изза злодеев живут супергерои. 
		// Идея: таблетка для пинамозгового геймплея типо уселителя.. красной аптечки упрощяющей геймплей и увеличивающяя драйв? 
		// Идея: строить... гибриды? войска? сооружения или предприятия?
		// Идея: захват територии.. или чегото чтоб приносило деньги или ресы. 
		// Идея: общение между нпс.
		
		
		
		
		// Идея: Стойка зашиты, нападения, контр атаки.
		// Идея: Атака, ожидание, сооблазнить. здаться. Оглушить.
		// Идея: враг обнял и не отпускает, нужно сопротивляться 
		// Идея: сьесть с головы проще всего, с ног сложнее, с жопа ещё сложнее и надо быть больше, стоящего или в прышке очень сложно 
		// Идея: наблюдение за топ боссами игры, то как они великолепно побеждают и едят - ебут 
		// Идея: симбиоз врагов: Хищьник загоняет на опасные ростения чтобы поймать 
		// Идея: зашишать не себя а когото, при пораении тебя ваншотят без проблем.
		// Идея: миниигра поездка на члене, скорость, сила сжатия, размер колечка, кончил внутрь или на спину, доволен или не доволен.
		// Идея: для одних вредно дял других полезно 
		// Главная Идея: сделать на подобии фермы или томогочика. выбирать воздействия типо как с лошедьми? .
		
		
		// Идея долёкая: разделить хад на 3 осна. окружение, персонажи и.... хз.
		// Идея: перед некоторыми врагами и в некоторых областях нельзя получать урон, терять здоровье или быть раненым.
		// Идея: чтобы нанести негтивный эффект надо ощютить его часть.
		// Факт: люди не любят терять нажитое (зря тратили время набирая вещи) и людей (симпатия)
		// Факт: жадность коллекционирования, ограничение инвентаря и тд, дать возможность исполнять эти желания в смысл
		// Факт: люди ретуальные создания, будь то работа, представление монстров и тд.
		// Идея: Дикий мир и можно помогать его покарять. (Явно виднео как помочь миру )
		// Идея: сбор днк из семени.
		// Идея: фарм руды?
		
		
Furry 10:57
 
Ур х)
*Кот шлепнул льва по попке, нанеся 1 урон*
Я:11:06
 
ми х)
 
*сел на котика нанеся 1 урона *
 
х)
Л:11:07
 
Урф х)
*Прижат к полу попкой льва, получая 1 урон каждую секунду и обездвижен*

Furry 11:11
 
Хехе х)
 
*Снял трусы льва и облизнул его колечко, восстанавливая и себе, и ему по 1 хп в секунду*
		
	*/
		
			/*
	Робот подсказывает открывая возможности
	сам процесс интересен, ты наполняеш и идёт описания расширения наполнения и роникновения 
	не описание гипноз а описание - глаза с феолетовым эффектом 
	ветку доминирования
	Ветка подчинения 
	*/
		/*
	Эвенты собранные в кучку для проверки.
	с 0 до 8 касаются сьеденных жертв (х)
	*/ 
	
	/*
	несколько фракций что контролируют периметр 
	заплатить за ДЛС
	Тавр сцена для эла 
	симбиотический наряд - увеличивающий физические хаактиристики - мышци 
	сцена за 30р - 50р 
	Минимум одежды. племенной, браслеты и набедренная повязка 
	после 100 - шланг в попку или жертв 
	Отложить яйцо 
	проникнуь в жертву и в зависимости от её распорядка дня чтото делать 
	есоли нечего не придпренять то чтобы нормализовать - придётся предпринимать в 4 раза больше (типо гв2 и локальные задания ) (можно пордолжать игнорить но будет не комфортно )
	парикмахерская?
	сопративляться насилию или мериться с беременностью? 	
	нутренние не бесполезные ошушения от жертвы 
	Нехватка ресурса вынуждает с умом отнестись куда ресурс вложить 
	модифициовать перса? покупать улчшения?
	Лев в рабстве и его ебут или он держет раба, геймплей в этих рамках 
	Персонаж готовит о возможностях, истории, причинах (мы культ воре, дотронься до алторя чтобы получить силу )
	непрямые приказы (типо мэджэсти?)
	Как в крайзис (режим брони. силы и скорости? инвиз?)
	В коопе с нпс против чегото? 
	Босс в конце? ради его кач и тд 
	злой перс? гильдии? (ведьмы превращение? воре?) (клан превращяющихся в пантер против превращяющихся в волковили демонов? (оборотней)(проклятие? временное? Вылечиться?)(превращение навсегда?))
	тьма сильнее - но шмотки не получиш - побеждать надо чесно (шмотки не уничтожатся )
	Событие иногда управляет или мы под разными состояниями реагирем по разному на тоже самое событие (нпс можетб ыть чувствительнее к раздражителю и внутри себя иметь подробности и больше гродаций )
	смотрим что у нас есть - отталкиваться от этого (есть земля  -строим ров и тд или чтото из земли )
	сделать 20 разных нпс
	симуляци жизни (расписание нпс)
	*/

	/*
	var x = +localStorage.getItem('x'); //вес сьеденного 
	var f = +localStorage.getItem('f'); //вес Жира 
	var m = +localStorage.getItem('m'); //Вес мышц 
	var a = 0; // Это на сколько алон в заднице, он офисный планктон 
	*/

	/*
		
		ххх(Перс, Где, кто, куда){
			
			
		}
		
		тема sex 
		получить орбьект (обж)
		присвоить его текущий обж = обж.
		не надо создавать 1000 обьектов, достаточно ссылку на обьект в других олбьектах, но не сам обьект в их
		
		в итоге выбранный вариант вар = итог.
		вариант 1, вариант 2 ,вариант 3
		(вар){
			иф вар 1
			иф вар 2
			иф вар 3
			согласно варианту выполнять обработку 
		}
		
		*/
