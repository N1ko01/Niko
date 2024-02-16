function punchCharacter() {
    var character = document.getElementById('character');
    character.style.backgroundColor = 'red';
    setTimeout(function() {
      character.style.backgroundColor = 'blue';
    }, 300);
}

function petCharacter() {
    var character = document.getElementById('character');
    character.style.backgroundColor = 'pink';
    setTimeout(function() {
      character.style.backgroundColor = 'blue';
    }, 300);
}