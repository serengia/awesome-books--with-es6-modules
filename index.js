import Books from "./modules/Books.js";
import showSectionDynamically from "./modules/dynamicSections.js";

const books = new Books();

books.loadItems();
books.addBooks();
books.removeBook();

// Show section dynamically
showSectionDynamically();

const insertDate = () => {
  const dateEl = document.querySelector(".display-date");
  const date = new Date();
  const displayDate = date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const displayTime = date.toLocaleTimeString();

  const dateString = `${displayDate}, ${displayTime}`;

  dateEl.innerHTML = dateString;
};

setInterval(() => {
  insertDate();
}, 1000);
