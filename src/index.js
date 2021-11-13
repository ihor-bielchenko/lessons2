function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

while (true) {
	const i = getRandomInt(10);

	let password = Number(prompt('Введи пароль'));
	if (password === 17){
		alert(`Добро пожаловать сенсей!`);
		break;
	}
	else if(i === 0){ 		
		alert('а нихуя');
	}
	else if(i === 1){ 		
		alert('еще подумай');
	}
	else if(i === 2){ 		
		alert('хуйня, давай сначала');
	}
	else if(i === 3){ 		
		alert('бывает, еще разок');
	}
	else if(i === 4){ 		
		alert('опа, нихуя');
	}
	else if(i === 5){ 		
		alert('научил на свою голову');
	}
	else if(i === 6){ 		
		alert('что за тупая система безопасности');
	}
	else if(i === 7){ 		
		alert('как так то');
	}
	else if(i === 8){ 		
		alert('бля, почти угадал');
	}
	else if(i === 9){ 		
		alert('снова мимо');
	}
}


//console.log(getRandomInt(10));
//console.log('hello', typeof hello);
//prompt('хууй');