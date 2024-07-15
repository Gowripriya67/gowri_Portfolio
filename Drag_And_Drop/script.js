function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var item = document.getElementById(data);
    var targetBox = event.target.closest('.box');

    if (isCorrectBox(item, targetBox)) {
        targetBox.appendChild(item);
    } else {
        alert('You have to drop items under the correct category');
    }
}

function isCorrectBox(item, box) {
    var itemId = item.id;
    var boxId = box.id;

    if ((itemId.startsWith('colleen') && boxId === 'colleen_box') ||
        (itemId.startsWith('chetan') && boxId === 'chetan_box') ||
        (itemId.startsWith('rithvik') && boxId === 'rithvik_box')) {
        return true;
    }
    return false;
}


