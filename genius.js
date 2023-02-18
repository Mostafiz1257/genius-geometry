document.getElementById('blog-btn').addEventListener('click', function () {
    window.location.href = 'question.html';
})

// First card 
document.getElementById('trangle-btn').addEventListener('click', function () {

    const tringleValueA = getElementById('tri-area-a');
    const tringleValueB = getElementById('tri-area-a');
    const trangleArea = 0.5 * (parseFloat(tringleValueA) * parseFloat(tringleValueB));
    console.log(trangleArea);
})

// second card
document.getElementById('rectangle-btn').addEventListener('click', function () {

    const recValueA = getElementById('rec-area-a');
    const recValueB = getElementById('rec-area-b');
    const rectangleArea = parseFloat(recValueA) * parseFloat(recValueB);
    console.log(rectangleArea);
})

// third card
document.getElementById('peralleogram-btn').addEventListener('click', function () {

    const peralleoValueA = getElementById('peralleo-area-a');
    const peralleoValueB = getElementById('peralleo-area-b');
    const peralleoArea = parseFloat(peralleoValueA) * parseFloat(peralleoValueB);
    console.log(peralleoArea);
})

// four card
document.getElementById('rohumbos-btn').addEventListener('click', function () {

    const peralleoValueA = getElementById('rombos-area-a');
    const peralleoValueB = getElementById('rombos-area-b');
    const rohumbosArea =0.5* parseFloat(peralleoValueA) * parseFloat(peralleoValueB);
    console.log(rohumbosArea);
})

// fifth card
document.getElementById('pentagon-btn').addEventListener('click',function(){

    const pentagonValueA = getElementById('pentagon-area-a');
    const pentagonValueB = getElementById('pentagon-area-b');
    const pentagonArea =0.5* parseFloat(pentagonValueA) * parseFloat(pentagonValueB);
    console.log(pentagonArea);
})

// sixth card
document.getElementById('ellips-btn').addEventListener('click',function(){

    const ellipsValueA = getElementById('ellips-area-a');
    const ellipsValueB = getElementById('ellips-area-b');
    const ellipsArea =0.14* parseFloat(ellipsValueA) * parseFloat(ellipsValueB);
    console.log(ellipsArea);
})