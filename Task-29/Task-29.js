// Wrap the code in a 'DOMContentLoaded' event listener to ensure the HTML is fully loaded before the script runs.
document.addEventListener('DOMContentLoaded', () => {

    /*
    ==================================================
    🟩 Tasks Using getElementById — 1 to 15
    ==================================================
    */

    // 1. Select an element with the ID `title` and log it to the console.
    const titleElement = document.getElementById('title');
    console.log("Task 1 - Selected 'title' element:", titleElement);

    // 2. Change the text content of the element with ID `heading` to “Hello DOM!”.
    document.getElementById('heading').textContent = 'Hello DOM!';

    // 3. Change the background color of the element with ID `box` to blue.
    document.getElementById('box').style.backgroundColor = 'blue';

    // 4. Set the innerHTML of an element with ID `message` to include <strong>Bold</strong> text.
    document.getElementById('message').innerHTML = 'This text contains <strong>Bold</strong> content.';

    // 5. Set the font size of the element with ID `mainText` to 24px.
    document.getElementById('mainText').style.fontSize = '24px';

    // 6. Hide an element with ID `hideMe` using style.display = 'none'.
    document.getElementById('hideMe').style.display = 'none';

    // 7. Add a border to an element with ID `container`.
    document.getElementById('container').style.border = '2px solid black';

    // 8. Change the value of an <input> with ID `username` to “Guest”.
    document.getElementById('username').value = 'Guest';

    // 9. Add a new class `featured` to an element with ID `card`.
    document.getElementById('card').classList.add('featured');

    // 10. Remove a class `old` from the element with ID `card`.
    document.getElementById('card').classList.remove('old');

    // 11. Toggle a class `active` on a button with ID `toggleBtn`.
    document.getElementById('toggleBtn').addEventListener('click', (e) => {
        e.target.classList.toggle('active');
    });

    // 12. Change the color of a paragraph with ID `para1` when a button is clicked.
    document.getElementById('changeColorBtn').addEventListener('click', () => {
        document.getElementById('para1').style.color = 'purple';
    });

    // 13. Update the inner text of a div with ID `status` when a form is submitted.
    document.getElementById('myForm').addEventListener('submit', (event) => {
        event.preventDefault(); // Prevents page reload
        document.getElementById('status').innerText = 'Form Submitted Successfully!';
    });

    // 14. Alert the text content of the element with ID `greeting`.
    // alert(document.getElementById('greeting').textContent); // Uncomment to enable alert

    // 15. Use a function to update the style of the ID `targetBox` when a button is clicked.
    const styleTargetBox = () => {
        const box = document.getElementById('targetBox');
        box.style.backgroundColor = 'teal';
        box.style.color = 'white';
        box.style.fontWeight = 'bold';
    };
    document.getElementById('updateStyleBtn').addEventListener('click', styleTargetBox);

    /*
    ==================================================
    🟩 Tasks Using getElementsByClassName — 16 to 30
    ==================================================
    */

    // 16. Select all elements with the class `box` and log the HTMLCollection.
    const boxElements = document.getElementsByClassName('box-item');
    console.log("Task 16 - Selected 'box-item' elements:", boxElements);

    // 17. Loop through all elements with class `item` and change their background to lightgray.
    const items = document.getElementsByClassName('item');
    for (let item of items) {
        item.style.backgroundColor = 'lightgray';
    }

    // 18. Change the text color of all elements with class `highlight` to orange.
    const highlights = document.getElementsByClassName('highlight');
    for (let h of highlights) {
        h.style.color = 'orange';
    }

    // 19. Add a class `active` to every element with class `menu-item`.
    const menuItems = document.getElementsByClassName('menu-item');
    for (let menuItem of menuItems) {
        menuItem.classList.add('active');
    }

    // 20. Set a common font style (italic) for all class `note` elements.
    const notes = document.getElementsByClassName('note');
    for (let note of notes) {
        note.style.fontStyle = 'italic';
    }

    // 21. Append " - updated" to the text of each element with class `task`.
    const tasks = document.getElementsByClassName('task');
    for (let task of tasks) {
        task.textContent += ' - updated';
    }

    // 22. Hide all elements with class `popup` using a loop.
    const popups = document.getElementsByClassName('popup');
    for (let popup of popups) {
        popup.style.display = 'none';
    }

    // 23. Use a loop to change all class `error` text to “Correct it”.
    const errors = document.getElementsByClassName('error');
    for (let error of errors) {
        error.innerText = 'Correct it';
    }

    // 24. Add an event listener on a button that highlights all elements with class `box-item`.
    document.getElementById('highlightBoxesBtn').addEventListener('click', () => {
        const boxes = document.getElementsByClassName('box-item');
        for (let box of boxes) {
            box.style.backgroundColor = 'cornflowerblue';
        }
    });

    // 25. Toggle the class `show` on all `faq-item` elements using a function.
    const toggleFaqItems = () => {
        const faqItems = document.getElementsByClassName('faq-item');
        for (let item of faqItems) {
            item.classList.toggle('show');
        }
    };
    document.getElementById('toggleFaqBtn').addEventListener('click', toggleFaqItems);

    // 26. Replace the content of all `info` class elements with “Updated Info”.
    const infos = document.getElementsByClassName('info');
    for (let info of infos) {
        info.innerHTML = 'Updated Info';
    }

    // 27. Count and display the number of elements with class `comment`.
    const comments = document.getElementsByClassName('comment');
    console.log(`Task 27 - Number of comment elements: ${comments.length}`);

    // 28. Add an emoji to the end of each element with class `emoji-target`.
    const emojiTargets = document.getElementsByClassName('emoji-target');
    for (let target of emojiTargets) {
        target.textContent += ' ✅';
    }

    // 29. Use getElementsByClassName with [0] to access and style the first `.card`.
    const firstCard = document.getElementsByClassName('card-item')[0];
    if (firstCard) {
        firstCard.style.border = '3px solid green';
    }

    // 30. Create a function `highlightAll()` that sets the background to yellow for all .highlight elements.
    function highlightAll() {
        const allHighlights = document.getElementsByClassName('highlight');
        for (let item of allHighlights) {
            item.style.backgroundColor = 'yellow';
        }
    }
    document.getElementById('runHighlightAllBtn').addEventListener('click', highlightAll);
});