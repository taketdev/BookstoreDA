// check LocalStorage
if (localStorage.getItem("books")) {
  books = JSON.parse(localStorage.getItem("books"));
}

// render books function
function renderBook() {
  const container = document.querySelector('.bookSection');
  container.innerHTML = '';
  
  books.forEach((book, index) => {
    const bookHTML = `
      <div class="booksCard">
          <div class="bookTitle"><h2>${book.name}</h2></div>
          <div class="seperator"></div>
          <img class="bookImg" src="./assets/icons/open-book.png" alt="Buchcover">
          <div class="seperator"></div>
          <div class="priceLikeContainer">
            <div class="bookPrice"><p>${book.price.toFixed(2)}€</p></div>
            <div class="like">
              <img onclick="toggleLike(${index})" class="likeContainer ${book.liked ? '' : 'none_liked'}" src="./assets/icons/heart.png" alt="heart">
              <img onclick="toggleLike(${index})" class="likeContainer ${book.liked ? 'liked' : ''}" src="./assets/icons/heart_filled.png" alt="heart_filled">
              <p>${book.likes}</p>
              </div>
          </div>
          <div class="bookInfo">
            <span>Author: <span class="author">${book.author}</span></span>
            <span>Erscheinungsdatum: <span class="publishedYear">${book.publishedYear}</span></span>
            <span>Gerne: <span class="genre">${book.genre}</span></span>
          </div>
          <div class="seperator"></div>
          <div class="commentSection">
            ${
              book.comments.map(comment => `
                <div class="comment">
                  <p>[${comment.name}]</p>
                  <p>Kommentar: ${comment.comment}</p>
                </div>
              `).join('')
            }
            <div class="commentInput">
              <input type="text" id="commentInput-${index}" placeholder="Kommentar schreiben">
              <button onclick="addComment(${index})">
                <img class="sendImg" src="./assets/icons/send.png" alt="">
              </button>
            </div>
          </div>
      </div>
    `;
    container.innerHTML += bookHTML;
  });
}
renderBook();

// Like button function
function toggleLike(index){
  const book = books[index];
  if(book.liked){
    book.liked = false;
    book.likes++;
  } else {
    book.liked = true;
    book.likes--;
  }
  renderBook();
  localStorage.setItem("books", JSON.stringify(books));
}

// Add comment function
function addComment(index) {
  const book = books[index];   // get the right book from the array
  const commentInput = document.getElementById(`commentInput-${index}`);   // choose the input field
  const newCommentText = commentInput.value;   // get the value from the input field

  if (newCommentText.trim() !== '') {   // make sure something is written in the input field
    const newComment = { //create new comment
      name: 'Anonymer User',
      comment: newCommentText
    };

    // add comment to the array
    book.comments.push(newComment);
    // clear the input field
    commentInput.value = '';
    // render the book again
    renderBook();
  }
  localStorage.setItem("books", JSON.stringify(books));

}