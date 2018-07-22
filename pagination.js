var studentList = document.querySelectorAll('.student-item');


function showPage(pageNumber) {
  var studentList = document.querySelectorAll('.student-item');
  for (var i = 0; i < studentList.length; i++) {
    studentList[i].style.display = 'none';
  }
  for (var i = ((pageNumber * 10) - 10); i < (pageNumber * 10) && i >= ((pageNumber * 10) - 10); i++) {
    if (studentList[i] !== undefined) {
      studentList[i].style.display = 'block';
    }
  }
}
showPage(1);

function appendPageLinks() {
  var paginationDiv = document.createElement('div');
  paginationDiv.classList.add('pagination');
  var paginationUl = document.createElement('ul');
  paginationDiv.appendChild(paginationUl);

  for (var i = 0; i < ((studentList.length / 10)); i++) {
    var paginationLi = document.createElement('li');
    paginationUl.appendChild(paginationLi);
    var listAnchor = document.createElement('a');
    paginationLi.appendChild(listAnchor);
    var anchorText = document.createTextNode([i + 1]);
    listAnchor.appendChild(anchorText);
    listAnchor.addEventListener('click', function (event) {
      showPage(event.target.innerHTML);
    });
  }
  document.body.appendChild(paginationDiv);
}
appendPageLinks();
