var nameForm = document.getElementById('js-form'),
	nameInput = document.getElementById('js-name'),
	btn = document.getElementById('js-btn'),
	resetBtn = document.getElementById('js-reset-btn'),
	plateBoard = document.getElementById('js-board'),
	labelNameInput = document.getElementById('js-label');

function showPlate() {
	plateBoard.innerHTML = '';
	if (!nameInput.value) {
		labelNameInput.className += ' error';
		nameInput.className += ' errorInput';
	} else {
		nameForm.className += ' hide';
		plateBoard.className = 'plate-board';
		for (var i = 0; i <= nameInput.value.length; i++) {
			if (i == nameInput.value.length) {
				plateBoard.innerHTML += '<li>' + (nameInput.value.length * 5) + ' zł</li>';
			} else {
				plateBoard.innerHTML += '<li>' + nameInput.value[i] + '</li>';
			}
		}
		resetBtn.className = 'btn reset';
	}
}

function resetView() {
	nameInput.value = '';
	nameForm.className = 'plate-form';
	labelNameInput.className = 'plate-form-label';
	nameInput.className = 'plate-form-input';
	plateBoard.className += ' hide';
	resetBtn.className += ' hide';
}

nameInput.addEventListener('keydown', function (event) {
	if (event.keyCode === 13) {
		showPlate();
	}
});
btn.addEventListener('click', showPlate);
resetBtn.addEventListener('click', resetView);
