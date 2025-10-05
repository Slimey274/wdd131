// blog.js

// Example article data array
const articles = [
  {
    date: "July 5, 2022",
    number: "10/14",
    genre: "Fantasy",
    rating: "★ ★ ★ ★",
    title: "Septimus Heap Book One: Magyk",
    cover: "[Book Cover]",
    description: "Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae legendos at vix ad putent delectus."
  },
  {
    date: "August 12, 2023",
    number: "8/20",
    genre: "Mystery",
    rating: "★ ★ ★ ☆",
    title: "The Mysterious Case of the Missing Manuscript",
    cover: "[Book Cover]",
    description: "Another exciting mystery for book lovers everywhere."
  },
];

// Get reference to container
const container = document.querySelector("#articles-container");

// Function to create a single article element
function createArticle(item) {
  const article = document.createElement("article");
  article.classList.add("book-entry"); // optional class for styling

  // Build the article HTML
  const template = `
    <section class="book-info">
      <p><strong>${item.date}</strong></p>
      <p>${item.number}</p>
      <p>${item.genre}</p>
      <p class="rating">${item.rating}</p>
    </section>
    <section class="book-details">
      <h2>${item.title}</h2>
      <div class="book-cover">${item.cover}</div>
      <p>${item.description}</p>
    </section>
  `;

  article.innerHTML = template;
  return article;
}

// Function to render all articles
function renderArticles(list) {
  list.forEach(item => {
    const newArticle = createArticle(item);
    container.appendChild(newArticle);
  });
}

// Call the function to display the articles
renderArticles(articles);
