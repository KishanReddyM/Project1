// It is best practice to wrap your DOM manipulation code in a 'DOMContentLoaded' event listener.
// This ensures that the script runs only after the entire HTML document has been loaded and parsed.
document.addEventListener('DOMContentLoaded', () => {

    /*
    ==================================================
    🟩 Part 1: getElementsByTagName — Tasks 1–10
    ==================================================
    */

    // 1. Select all <p> tags and log the HTMLCollection.
    const pTags = document.getElementsByTagName('p');
    console.log("Task 1 - All <p> tags:", pTags);

    // 2. Loop through all <li> tags and log their text content.
    console.log("Task 2 - Text content of <li> tags:");
    const liTags = document.getElementsByTagName('li');
    for (let li of liTags) {
        console.log(li.textContent);
    }

    // 3. Change the text color of all <h2> tags to purple.
    const h2Tags = document.getElementsByTagName('h2');
    for (let h2 of h2Tags) {
        h2.style.color = 'purple';
    }

    // 4. Count how many <div> tags are present on the page.
    const divTags = document.getElementsByTagName('div');
    console.log(`Task 4 - Number of <div> tags: ${divTags.length}`);

    // 5. Make all <img> tags have a width of 200px.
    const imgTags = document.getElementsByTagName('img');
    for (let img of imgTags) {
        img.style.width = '200px';
    }

    // 6. Add a red border to every <section> tag.
    const sectionTags = document.getElementsByTagName('section');
    for (let section of sectionTags) {
        section.style.border = '2px solid red';
    }

    // 7. Set the font size of all <h1> tags to 32px.
    const h1Tags = document.getElementsByTagName('h1');
    for (let h1 of h1Tags) {
        h1.style.fontSize = '32px';
    }

    // 8. Change the background color of all <table> tags to lightyellow.
    const tableTags = document.getElementsByTagName('table');
    for (let table of tableTags) {
        table.style.backgroundColor = 'lightyellow';
    }

    // 9. Add a class `rounded` to every <button> tag.
    const buttonTags = document.getElementsByTagName('button');
    for (let button of buttonTags) {
        button.classList.add('rounded');
    }

    // 10. Hide all <footer> tags on the page using style.display = 'none'.
    const footerTags = document.getElementsByTagName('footer');
    for (let footer of footerTags) {
        footer.style.display = 'none';
    }


    /*
    ==================================================
    🟩 Part 2: querySelector() — Tasks 11–20
    ==================================================
    */

    // 11. Select the first <h1> on the page and change its text.
    document.querySelector('h1').textContent = 'Welcome to the DOM!';

    // 12. Select an element with the class .highlight and make its text bold.
    document.querySelector('.highlight').style.fontWeight = 'bold';

    // 13. Select the element with ID #main and set its background color to lightblue.
    document.querySelector('#main').style.backgroundColor = 'lightblue';

    // 14. Select the first <input> element and set its value to "Hello".
    document.querySelector('input').value = 'Hello from querySelector!';

    // 15. Select a <p> inside a .card and underline its text.
    document.querySelector('.card p').style.textDecoration = 'underline';

    // 16. Use a descendant selector to select .card .title and change the font.
    document.querySelector('.card .title').style.fontFamily = 'Georgia, serif';

    // 17. Select the first button with class .btn and change its text to "Clicked".
    document.querySelector('button.btn').textContent = 'Clicked';

    // 18. Select a <label> element and change its text color to green.
    document.querySelector('label').style.color = 'green';

    // 19. Use querySelector() to select a .nav > li element and log its text.
    const navLi = document.querySelector('.nav > li');
    console.log("Task 19 - Text of first .nav > li:", navLi.textContent);

    // 20. Select the first <img> inside a section and change its src.
    document.querySelector('section img').src = 'https://via.placeholder.com/200/0000FF/FFFFFF?text=New+Image';


    /*
    ==================================================
    🟦 Part 3: querySelectorAll() — Tasks 21–30
    ==================================================
    */

    // 21. Select all elements with class .item and log the NodeList.
    const items = document.querySelectorAll('.item');
    console.log("Task 21 - All .item elements:", items);

    // 22. Loop through all .menu-item elements and change their font color.
    document.querySelectorAll('.menu-item').forEach(item => {
        item.style.color = 'darkred';
    });

    // 23. Select all <a> tags and underline them.
    document.querySelectorAll('a').forEach(a => {
        a.style.textDecoration = 'underline';
    });

    // 24. Add a `hovered` class to all .link elements using a loop.
    document.querySelectorAll('.link').forEach(link => {
        link.classList.add('hovered');
    });

    // 25. Select all <input> fields and clear their values.
    // Note: This will clear the value set in task 14.
    document.querySelectorAll('input').forEach(input => {
        input.value = '';
    });

    // 26. Select all .notification elements and set background to pink.
    document.querySelectorAll('.notification').forEach(notification => {
        notification.style.backgroundColor = 'pink';
    });

    // 27. Count how many .card elements exist and log the count.
    const cardCount = document.querySelectorAll('.card').length;
    console.log(`Task 27 - Number of .card elements: ${card