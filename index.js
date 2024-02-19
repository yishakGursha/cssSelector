// Selecting elements using CSS selectors
const highlightedItems = document.querySelectorAll("li.highlight");

// Adding a class to the first highlighted item
highlightedItems[0].classList.add("bold");

// Modifying the text content of the second highlighted item
highlightedItems[1].textContent = "Modified Item";