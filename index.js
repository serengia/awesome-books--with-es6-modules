import Books from "./modules/Books.js";
import showSectionDynamically from "./modules/dynamicSections.js";
import { DateTime } from "./modules/luxon.js";

const books = new Books();

books.loadItems();
books.addBooks();
books.removeBook();

// Show section dynamically
showSectionDynamically();

const insertDate = () => {
  const dateEl = document.querySelector(".display-date");
  dateEl.innerHTML = DateTime.now().setZone("system");
};

setInterval(() => {
  insertDate();
}, 1000);
