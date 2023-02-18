let serial=0;
// Located page with blog button 
document.getElementById('blog-btn').addEventListener('click', function () {
    window.location.href = 'question-ans.html';
})

// First card 
document.getElementById('trangle-btn').addEventListener('click', function () {
    serial+=1;
    const elementName=getElementByIdText('trangle')
    const cmSquare=getElementByIdText('tri-cm-square')
    const tringleValueA = getElementById('tri-area-a');
    const tringleValueB = getElementById('tri-area-b');
    const trangleAreaFixed = .5 *( parseFloat(tringleValueA) * parseFloat(tringleValueB));
    const trangleArea = trangleAreaFixed.toFixed(2);
    console.log(trangleArea);

    // validation for input value..........
    if (isNaN(tringleValueA) || isNaN(tringleValueB) ) {
        alert('Please enter only Number')
        return;
    }
   else if (tringleValueA < 0 || tringleValueB < 0 ) {
        alert("Provide valid input");
        return;
    }
    const container=document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML=`
    <td>${serial}</td>
    <td>${elementName}</td>
    <td>${trangleArea}</td>
    <td>${cmSquare}</td>
    `
    container.appendChild(tr);
})

// second card
document.getElementById('rectangle-btn').addEventListener('click', function () {
    serial+=1;
    const elementName=getElementByIdText('rectangle');
    const cmSquare=getElementByIdText('rec-cm-square');
    const recValueA = getElementById('rec-area-a');
    const recValueB = getElementById('rec-area-b');
    const rectangleAreaFixed = parseFloat(recValueA) * parseFloat(recValueB);
    const rectangleArea =rectangleAreaFixed.toFixed(2) ;
    console.log(rectangleArea);

    if (isNaN(recValueA) || isNaN(recValueB) ) {
        alert('Please enter only Number')
        return;
    }
   else if (recValueA < 0 || recValueB < 0 ) {
        alert("Provide valid input");
        return;
    }
    const container=document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML=`
    <td>${serial}</td>
    <td>${elementName}</td>
    <td>${rectangleArea}</td>
    <td>${cmSquare}</td>
    ` 
    container.appendChild(tr);
})

// third card
document.getElementById('peralleogram-btn').addEventListener('click', function () {
    serial+=1;
    const elementName=getElementByIdText('peralleogram');
    const cmSquare=getElementByIdText('peralleo-cm-square');
    const peralleoValueA = getElementById('peralleo-area-a');
    const peralleoValueB = getElementById('peralleo-area-b');
    const peralleoAreaFixed = parseFloat(peralleoValueA) * parseFloat(peralleoValueB);
    const peralleoArea = peralleoAreaFixed.toFixed(2);
    const container=document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML=`
    <td>${serial}</td>
    <td>${elementName}</td>
    <td>${peralleoArea}</td>
    <td>${cmSquare}</td>
    `
    container.appendChild(tr);
})

// four card
document.getElementById('rohumbos-btn').addEventListener('click', function () {
    serial+=1;
    const elementName=getElementByIdText('rohumbos');
    const cmSquare=getElementByIdText('rohumbos-cm-square');
    const peralleoValueA = getElementById('rombos-area-a');
    const peralleoValueB = getElementById('rombos-area-b');
    const rohumbosAreaFixed = 0.5 * parseFloat(peralleoValueA) * parseFloat(peralleoValueB);
    const rohumbosArea =rohumbosAreaFixed.toFixed(2);
    const container=document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML=`
    <td>${serial}</td>
    <td>${elementName}</td>
    <td>${rohumbosArea}</td>
    <td>${cmSquare}</td>
    `
    container.appendChild(tr); 
})

// fifth card
document.getElementById('pentagon-btn').addEventListener('click', function () {
    serial+=1;
    const elementName=getElementByIdText('pentagon');
    const cmSquare=getElementByIdText('pentagon-cm-sqpare');
    const pentagonValueA = getElementById('pentagon-area-a');
    const pentagonValueB = getElementById('pentagon-area-b');
    const pentagonAreaFixed = 0.5 * parseFloat(pentagonValueA) * parseFloat(pentagonValueB);
    const pentagonArea = pentagonAreaFixed.toFixed(2);
    const container=document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML=`
    <td>${serial}</td>
    <td>${elementName}</td>
    <td>${pentagonArea}</td>
    <td>${cmSquare}</td>
    `
    container.appendChild(tr);
})

// sixth card
document.getElementById('ellips-btn').addEventListener('click', function () {
    serial+=1;
    const elementName=getElementByIdText('ellips');
    const cmSquare=getElementByIdText('ellips-cm-sqpare');
    const ellipsValueA = getElementById('ellips-area-a');
    const ellipsValueB = getElementById('ellips-area-b');
    const ellipsArea = 3.1416 * parseFloat(ellipsValueA) * parseFloat(ellipsValueB);
    const ellipsAreaToFixed = ellipsArea.toFixed(2);
    const container=document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML=`
    <td>${serial}</td>
    <td>${elementName}</td>
    <td>${ellipsAreaToFixed}</td>
    <td>${cmSquare}</td>
    `
    container.appendChild(tr);
})