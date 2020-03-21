// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {

    //create all the elements and define them
    const header = document.createElement('div');
    const date = document.createElement('span');
    const title = document.createElement('h1');
    const temp = document.createElement('span');

    //add classes if any
    header.classList.add('header');
    // console.log(`this is header`, header);
    header.addEventListener('mouseover', a => {
        // console.log(a);        
        // console.log(`this is the ${event.type} event type.`);
        // console.log(`this is a target `, a.target);
        a.target.style.backgroundColor = 'blue';
    })
    date.classList.add('date');
    temp.classList.add('temp');


    //append here
    header.append(date, title, temp);

    //add text content
    date.textContent = 'SMARCH 28, 2019';
    title.textContent = 'Lambda Times';
    temp.textContent = '98°';



    return header;
}

//grab the parent element and append the new header we created to it

const headerContainer = document.querySelector('.header-container');

headerContainer.append(Header());