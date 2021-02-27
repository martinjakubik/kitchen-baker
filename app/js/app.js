let outerBox = document.createElement('div');
document.body.insertBefore(outerBox, null);

let counter = 100;
while (counter > 0) {

    let littleBox = document.createElement('div');
    let textNode = document.createTextNode(counter);
    littleBox.insertBefore(textNode, null);
    outerBox.insertBefore(littleBox, null);

    counter = counter - 1;

}