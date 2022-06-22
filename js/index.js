document.getElementById("date").value = new Date().toUTCString();
document.querySelector("#form").addEventListener("submit", addBookMark);
let bookMarkData = JSON.parse(localStorage.getItem("bookMarkDatabase")) || [];

displayBookMark(bookMarkData);

function addBookMark(event) {
  event.preventDefault();
  let title = document.querySelector("#title").value;
  let url = document.querySelector("#url").value;
  let category = document.querySelector("#category").value;
  let tags = document.querySelector("#tags").value;
  let date = document.querySelector("#date").value;
  let id = bookMarkData.length + 1;

  let addBookMarks = {
    id: id,
    title: title,
    url: url,
    category: category,
    tags: tags,
    date: date,
  };
  bookMarkData.push(addBookMarks);
  localStorage.setItem("bookMarkDatabase", JSON.stringify(bookMarkData));
  window.location.reload();
}

function displayBookMark(bookMarkData) {
  bookMarkData.map((ele) => {
    let tr = document.createElement("tr");

    let serial = document.createElement("td");
    serial.textContent = ele.id;

    let title = document.createElement("td");
    title.textContent = ele.title;

    let url = document.createElement("td");
    let link = document.createElement("a");
    link.setAttribute("href", ele.url);
    link.setAttribute("target", "_blank");
    link.textContent = "Link";
    url.appendChild(link);

    let category = document.createElement("td");
    category.textContent = ele.category;

    let tags = document.createElement("td");
    tags.textContent = ele.tags;

    let date = document.createElement("td");
    date.textContent = ele.date;

    tr.append(serial, title, url, category, tags, date);
    document.querySelector("tbody").append(tr);
  });
}
