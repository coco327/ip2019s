/*

*/


function start(e) {
    var name = [
    {
        char: '林',
        big5: 'AA4C',
        cns: '1-4E2F',
        unicode: '6797',
    },
    {
        char: '伊',
        big5: 'A5EC',
        cns: '1-472E',
        unicode: '4F0A',
    },
    {
        char: '萱',
        big5: 'B8A9',
        cns: '1-6630',
        unicode: '8431',
    }
  ];

    var ele = document.getElementById("div1");

    for(var i =0; i < 3; i++){
        ele.innerHTML += name[i].char;
        ele.innerHTML += ' big5= '    ;
        ele.innerHTML += name[i].big5;
        ele.innerHTML += ' cns= ';
        ele.innerHTML += name[i].cns;
        ele.innerHTML += ' unicode= ';
        ele.innerHTML += name[i].unicode;
        ele.innerHTML += '<br> ';
    }

}

/*
https://www.w3schools.com/jsref/met_document_addeventlistener.asp

document.addEventListener(event, function, useCapture)

true - The event handler is executed in the capturing phase
false- Default. The event handler is executed in the bubbling phase
*/
window.addEventListener( "load", start, false );
