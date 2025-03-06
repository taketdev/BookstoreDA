function renderBook() {
    const container = document.querySelector('.bookSection');
    container.innerHTML = '';
  
    books.forEach((book, index) => {
      const bookHTML = `
      <div class="bookSection">
        <div class="booksCard">
          <div class="bookTitle"><h2>${book.name}</h2></div>
          <div class="seperator"></div>
          <img class="bookImg" src="./assets/icons/open-book.png" alt="Buchcover">
          <div class="seperator"></div>
          <div class="priceLikeContainer">
            <div class="bookPrice"><p>${book.price}€</p></div>
            <div class="like">
              <!-- Du kannst hier noch eine Logik einbauen, damit nur eines der Herz-Icons sichtbar ist -->
              <img class="likeContainer ${book.liked ? '' : 'none_liked'}" 
                   src="./assets/icons/heart.png" 
                   alt="heart">
              <img class="likeContainer ${book.liked ? 'liked' : ''}" 
                   src="./assets/icons/heart_filled.png" 
                   alt="heart_filled">
              <p>${book.likes}</p>
            </div>
          </div>
          <div class="bookInfo">
            <p>Author: ${book.author}</p>
            <p>Erscheinungsdatum: ${book.publishedYear}</p>
            <p>Gerne: ${book.genre}</p>
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
              <input type="text" placeholder="Kommentar schreiben">
              <button>
                <img class="sendImg" src="./assets/icons/send.png" alt="">
              </button>
            </div>
          </div>
        </div>
        </div>
      `;
      container.innerHTML += bookHTML;
    });
  }
  
  renderBook();