// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
// the GET
axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(res => {
    console.log(`Checking the GET`, Object.values(res.data.articles));
    Object.values(res.data.articles).forEach(a => {
      a.forEach(b => {
        cards.append(cardMaker(b));
      });
    });
  })
  .catch(err => {
    console.log(err);
  });

// make card
function cardMaker(object) {
  const card = document.createElement("div");
  const headline = document.createElement("div");
  const author = document.createElement("div");
  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  const authorName = document.createElement("span");

  //appends
  card.append(headline, author);
  author.append(imgContainer, authorName);
  imgContainer.append(img);

  //classes
  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");

  //content
  headline.textContent = object.headline;
  img.src = object.authorPhoto;
  authorName.textContent = object.authorName;

  return card;
}
const cards = document.querySelector(".cards-container ");
