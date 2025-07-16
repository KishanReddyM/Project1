document.addEventListener('DOMContentLoaded', () => {

    /*
    ==================================================
    🟩 Tasks Using innerHTML — Tasks 1–10
    ==================================================
    */

    // 1. Select a <div id="info"> and set its innerHTML to "Welcome <strong>Guest</strong>".
    document.getElementById('info').innerHTML = 'Welcome <strong>Guest</strong>';

    // 2. Replace the content of a <p id="description"> with a full HTML paragraph.
    document.getElementById('description').innerHTML = '<p>This is an <em>entirely new</em> paragraph created with innerHTML.</p>';

    // 3. Add an image inside a div using innerHTML.
    document.getElementById('image-container').innerHTML = '<img src="https://via.placeholder.com/150/FFC107/000000?text=innerHTML" alt="Placeholder">';

    // 4. Insert a list of items into a container using innerHTML.
    document.getElementById('list-container').innerHTML = '<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>';

    // 5. Append a new paragraph to an existing #main div using += with innerHTML.
    document.getElementById('main').innerHTML += '<p>This paragraph was appended using innerHTML.</p>';

    // 6. Create a dynamic card layout (title + button) using innerHTML.
    document.getElementById('card-layout').innerHTML = '<h3>Dynamic Card</h3><button>Click Here</button>';

    // 7. Display a table with 2 rows and 2 columns using innerHTML.
    document.getElementById('table-container').innerHTML = '<table><tr><td>Row 1, Cell 1</td><td>Row 1, Cell 2</td></tr><tr><td>Row 2, Cell 1</td><td>Row 2, Cell 2</td></tr></table>';

    // 8. Clear all content from a container using element.innerHTML = "".
    document.getElementById('clear-container').innerHTML = '';

    // 9. Use innerHTML to add a button that says "Click Me!" to a section.
    document.getElementById('button-section').innerHTML = '<button>Click Me!</button>';

    // 10. Replace <span> text with styled HTML text using innerHTML.
    document.getElementById('styled-span-container').innerHTML = 'This was a span, now it is <i>styled italic text</i>.';

    /*
    ==================================================
    🟩 Tasks Using textContent — Tasks 11–20
    ==================================================
    */

    // 11. Select a paragraph and log its textContent.
    const pContent = document.getElementById('log-me').textContent;
    console.log("Task 11 (textContent):", pContent);

    // 12. Set textContent of a heading to "Hello, User!".
    document.getElementById('greeting-heading').textContent = 'Hello, User!';

    // 13. Update a <span class="score"> with the current score using textContent.
    document.querySelector('.score').textContent = 150;

    // 14. Display a live character counter using textContent as user types.
    const liveCounterText = document.getElementById('live-counter-text');
    liveCounterText.addEventListener('input', () => {
        document.getElementById('char-counter').textContent = `${liveCounterText.value.length} characters`;
    });

    // 15. Remove all HTML tags from a container by setting its textContent.
    const stripHtmlDiv = document.getElementById('strip-html');
    stripHtmlDiv.textContent = stripHtmlDiv.innerHTML;

    // 16. Show raw HTML code (like <h1>Heading</h1>) as text using textContent.
    document.getElementById('raw-code').textContent = '<h1>This is not a real heading.</h1>';

    // 17. Select all elements with class .note and prepend "NOTE: " using textContent.
    document.querySelectorAll('.note').forEach(note => {
        note.textContent = `NOTE: ${note.textContent}`;
    });

    // 18. Dynamically set a greeting like "Good morning, John" using textContent.
    document.getElementById('dynamic-greeting').textContent = `Good afternoon, Admin`;

    // 19. Convert an object to a string and display it using textContent.
    const userObject = { id: 101, user: 'testuser', status: 'active' };
    document.getElementById('object-display').textContent = JSON.stringify(userObject, null, 2);

    // 20. Read and log textContent of a <div> with multiple child elements.
    const multiChildDiv = document.getElementById('multi-child-log');
    console.log("Task 20 (textContent of multi-child div):", multiChildDiv.textContent);

    /*
    ==================================================
    🟦 Tasks Using innerText — Tasks 21–30
    ==================================================
    */

    // 21. Log innerText of a heading with hidden spans and compare with textContent.
    const hiddenSpanHeading = document.getElementById('hidden-span-heading');
    console.log("Task 21 (innerText):", hiddenSpanHeading.innerText);       // Ignores hidden span
    console.log("Task 21 (textContent):", hiddenSpanHeading.textContent); // Includes hidden span

    // 22. Change the visible text of a button using innerText.
    document.getElementById('change-text-btn').innerText = 'Text Changed';

    // 23. Add line breaks manually to a div’s text using \n in innerText.
    document.getElementById('line-break-div').innerText = 'First Line.\nSecond Line.';

    // 24. Set innerText of a div to user input from a text box.
    const userInput = document.getElementById('user-input');
    userInput.addEventListener('keyup', () => {
        document.getElementById('input-display').innerText = userInput.value;
    });

    // 25. Display time-stamped text like "Updated at 7:21 PM" using innerText.
    document.getElementById('timestamp').innerText = `Updated at ${new Date().toLocaleTimeString('en-IN')}`;

    // 26. Create a function that updates innerText every second with current time.
    const clockDiv = document.getElementById('live-clock');
    if (clockDiv) { // Check if the element exists to prevent errors
      setInterval(() => {
        clockDiv.innerText = new Date().toLocaleTimeString('en-IN');
      }, 1000);
    }

    // 27. Replace an <h2> tag’s content with "Loading..." temporarily using innerText.
    document.getElementById('loading-heading').innerText = 'Loading...';

    // 28. Use innerText to overwrite error messages in red inside .error-msg.
    document.querySelectorAll('.error-msg').forEach(msg => {
        msg.innerText = 'This error has been overwritten.';
    });

    // 29. Compare innerText vs innerHTML by logging both for the same element.
    const comparisonElement = document.getElementById('comparison-element');
    console.log("Task 29 (innerHTML):", comparisonElement.innerHTML);
    console.log("Task 29 (innerText):", comparisonElement.innerText);

    // 30. Append multiple lines of text to a div using innerText +=.
    const appendLinesDiv = document.getElementById('append-lines');
    appendLinesDiv.innerText += '\nThis is the first appended line.';
    appendLinesDiv.innerText += '\nThis is the second appended line.';
});