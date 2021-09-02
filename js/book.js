const searchBook = () => {
  const searchFild = document.getElementById('search-field');
  const searchItem = searchFild.value;
  searchFild.value = '';

  // error-massage start

  if (searchItem === '') {
    errorText()
  }
  else {
    const url = `https://openlibrary.org/search.json?q=${searchItem}`
    fetch(url)
      .then(res => res.json())
      .then(data => displayResult(data.docs))
  }
}

// -empty search item function

const errorText = () => {
  const Problem = document.getElementById('search-result');
  Problem.textContent = '';
  const massage = document.getElementById('error-massage');
  massage.innerText = 'Plz Write a Book Name in Search Box.';
  Problem.appendChild(massage);

}

// error massage end

const displayResult = docs => {
  const searchResult = document.getElementById('search-result');
  searchResult.textContent = '';
  docs.forEach(doc => {
    console.log(doc);
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
        <div class="card h-100">
      <img height='400px' src="https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${doc.title}</h5>
        <p class="card-text"> <span class="fw-bold">Author name :</span>
         ${doc.author_name[0]} </p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Publish date: ${doc.publish_date[0]}</small>
      </div>
    </div>
        `
    searchResult.appendChild(div);
  });
}