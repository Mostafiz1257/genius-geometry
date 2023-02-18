document.getElementById('blog-btn').addEventListener('click', function () {
    window.location.href = 'question.html';
})

// First card 
document.getElementById('trangle-btn').addEventListener('click', function () {
    
    const elementName=getElementByIdText('trangle')
    const cmSquare=getElementByIdText('tri-cm-square')
    const tringleValueA = getElementById('tri-area-a');
    const tringleValueB = getElementById('tri-area-b');
    const trangleArea = .5 *( parseFloat(tringleValueA) * parseFloat(tringleValueB));
    console.log(trangleArea);


    const container=document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML=`
    <td>${1}</td>
    <td>${elementName}</td>
    <td>${trangleArea}</td>
    <td>${cmSquare}</td>
    
    `
    container.appendChild(tr);
})

// second card
document.getElementById('rectangle-btn').addEventListener('click', function () {

    const elementName=getElementByIdText('rectangle');
    const cmSquare=getElementByIdText('rec-cm-square');
    const recValueA = getElementById('rec-area-a');
    const recValueB = getElementById('rec-area-b');
    const rectangleArea = parseFloat(recValueA) * parseFloat(recValueB);
    console.log(rectangleArea);

    const container=document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML=`
    <td>${1}</td>
    <td>${elementName}</td>
    <td>${rectangleArea}</td>
    <td>${cmSquare}</td>
    `
    container.appendChild(tr);


})

// third card
document.getElementById('peralleogram-btn').addEventListener('click', function () {


    const elementName=getElementByIdText('peralleogram');
    const cmSquare=getElementByIdText('peralleo-cm-square');
    const peralleoValueA = getElementById('peralleo-area-a');
    const peralleoValueB = getElementById('peralleo-area-b');
    const peralleoArea = parseFloat(peralleoValueA) * parseFloat(peralleoValueB);
    console.log(peralleoArea);

    const container=document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML=`
    <td>${1}</td>
    <td>${elementName}</td>
    <td>${peralleoArea}</td>
    <td>${cmSquare}</td>
    `
    container.appendChild(tr);
})

// four card
document.getElementById('rohumbos-btn').addEventListener('click', function () {

    const peralleoValueA = getElementById('rombos-area-a');
    const peralleoValueB = getElementById('rombos-area-b');
    const rohumbosArea = 0.5 * parseFloat(peralleoValueA) * parseFloat(peralleoValueB);
    console.log(rohumbosArea);
})

// fifth card
document.getElementById('pentagon-btn').addEventListener('click', function () {

    const pentagonValueA = getElementById('pentagon-area-a');
    const pentagonValueB = getElementById('pentagon-area-b');
    const pentagonArea = 0.5 * parseFloat(pentagonValueA) * parseFloat(pentagonValueB);
    console.log(pentagonArea);
})

// sixth card
document.getElementById('ellips-btn').addEventListener('click', function () {

    const ellipsValueA = getElementById('ellips-area-a');
    const ellipsValueB = getElementById('ellips-area-b');
    const ellipsArea = 0.14 * parseFloat(ellipsValueA) * parseFloat(ellipsValueB);
    const ellipsAreaToFixed = ellipsArea.toFixed(2);
    console.log(ellipsAreaToFixed);
})