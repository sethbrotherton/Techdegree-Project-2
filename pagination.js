var studentList = document.querySelectorAll('.student-item');


function showPage(pageNumber, list) {
  for (var i = 0; i < list.length; i++) {
    list[i].style.display = 'none';
  }
  for (var i = ((pageNumber * 10) - 10); i < (pageNumber * 10) && i >= ((pageNumber * 10) - 10); i++) {
    if (list[i] !== undefined) {
      list[i].style.display = 'block';
    }
  }
}
showPage(1, studentList);

function appendPageLinks(list) {
  var paginationDiv = document.createElement('div');
  paginationDiv.classList.add('pagination');
  var paginationUl = document.createElement('ul');
  paginationDiv.appendChild(paginationUl);

  for (var i = 0; i < (list.length / 10); i++) {
    var paginationLi = document.createElement('li');
    paginationUl.appendChild(paginationLi);
    var listAnchor = document.createElement('a');
    paginationLi.appendChild(listAnchor);
    var anchorText = document.createTextNode([i + 1]);
    listAnchor.appendChild(anchorText);
    listAnchor.addEventListener('click', function (event) {
      showPage(event.target.innerHTML, studentList);
    });
  }
  document.body.appendChild(paginationDiv);
}
appendPageLinks(studentList);

function addSearch() {
  var search = document.createElement('div');
  search.classList.add('student-search');
  var searchInput = document.createElement('input');
  searchInput.placeholder = "Search for Students...";
  search.appendChild(searchInput);
  var searchButton = document.createElement('button');
  searchButton.innerHTML = "search";
  search.appendChild(searchButton);
  document.body.appendChild(search);
  searchInput.addEventListener('submit', function () {
    for (var i = 0; i < studentList.length; i++) {
      if (input.value === list[i].innerHTML) {
        list[i].style = 'block';
      } else {
        list[i].style = 'none';
      }
    }
  });
}
addSearch();
