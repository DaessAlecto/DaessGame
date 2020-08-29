
/*
=============
боевая система. 
=============
*/

var healthPlayer = player.health;
var healthEnemy = rat.health;
var deadEnemy = 0;

class CombatSystem {
	curentEnemy = rat;
	selectEnemy(){
		switch(deadEnemy){
			case 0 :
				this.curentEnemy = rat;
			break;
			case 1 :
				this.curentEnemy = cat;
			break;
			case 2 :
				this.curentEnemy = raccoon;
			break;
			case 3 :
				this.curentEnemy = slimeTaurWolf;
			break;
			case 4 :
				this.curentEnemy = tiger;
			break;
		}
	}
	fight(str){
		this.selectEnemy();
		switch (str) {
			case 'атака':
				this.dealDamage(1);
				println('Вы атакеет врага (' + this.curentEnemy.name + ') и наносите 1 урона. у врага осталось ' + healthEnemy + ' Здоровья');
				this.takeDamage(1);
				println('Враг атакует вас и наносит 1 урона. У вас осталось ' + healthPlayer + ' Здоровья');
			break;
			case 'начать бой':
				println('Вы начинаете игру, перед вами враг, враг... кажется агрессивный ');
				healthPlayer = player.health;
				healthEnemy = this.curentEnemy.health;
				setHyper (['Атака']);
			break;
		}
		if(healthPlayer <= 0){
			println('Вы пали, ну, с кем не бывает.');
			setHyper (arrHTT1);
			healthPlayer = player.health;
			healthEnemy = this.curentEnemy.health;
			deadEnemy = 0;
		}
		if(healthEnemy <= 0){
			println('Вы победили! поздравляем!.');
			setHyper (arrHTT1);
			deadEnemy++ ;
			healthPlayer = player.health;
			healthEnemy = this.curentEnemy.health;
		}
	}
	takeDamage(i){
		healthPlayer = healthPlayer - i; 
	}
	dealDamage(i){
		healthEnemy = healthEnemy - i; 
	}
// Идея: отмена эфекта заклинания.
// Идея: Фаталити - добивания.
// Идея: погоня за силой.
}
var combatSystem = new CombatSystem();


class Combat_Hi extends Dialog{
	text = 'Тест текст ';
	hyperText = ['Осмотреть']; 
	
	entry(){
		println(this.text);
		setHyper(this.hyperText);
		currentDialog = this;
	}
	choice (str) {
		combatSystem.fight(str);
	}
}

dialog['combat.hi'] = new Combat_Hi();

class Combat_Fight extends Dialog{
	text = 'Тест текст ';
	hyperText = ['Атака']; 
	
	entry(){
		println(this.text);
		setHyper(this.hyperText);
		currentDialog = this;
	}
	choice (str) {
		combatSystem.fight(str);
	}
}

dialog['combat.fight'] = new Combat_Fight();