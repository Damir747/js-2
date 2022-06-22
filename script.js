let keyButton = document.querySelectorAll('.key');
let displayShow = document.querySelector('.display');
let clearButton = document.querySelector('.clear');

for (let key of keyButton) {
	key.onclick = function () {
		displayShow.textContent = displayShow.textContent + key.textContent;
		console.log('Нажал кнопку!');
		console.log(key.textContent);
	}
}

clearButton.onclick = function () {
	displayShow.textContent = '';
	console.log('Нажал Очистить!');
}

/*
Кнопки с буквами и «пробел» имеют класс key, а дисплей — класс display.

При клике на кнопку с буквой или пробелом текстовое содержимое этой кнопки должно добавляться к текстовому содержимому дисплея.

Кнопка очистки имеет класс clear. При клике на неё весь текст внутри дисплея должен удаляться, для этого в текстовое содержимое дисплея нужно записать пустую строку.
*/
