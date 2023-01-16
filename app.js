const noteContainer = document.getElementById("note-container");
const bookTitle = document.getElementById("book-title");

fetch("data.json")
.then(res => res.json())
.then(data => {
  bookTitle.innerHTML = data.bookName;
  data.noteList.forEach(note => {
    let level = note.color === 2 ? 1 : note.color === 4 ? 2 :note.color === 1 ? 3 : 4 ;
    const noteElement = document.createElement("div");
    noteElement.classList.add("note");
    noteElement.innerHTML = `<h${level} class="note-title level-${level}" style="background-color:${note.bgColor}">${note.text}</h${level}>
    <p class="note-content level-${level}" style="display:none">${note.note}</p>`;
    noteContainer.appendChild(noteElement);
  });
  const noteTitles = document.querySelectorAll(".note-title");
  noteTitles.forEach(title => {
    title.addEventListener("click", e => {
      e.target.nextElementSibling.style.display = e.target.nextElementSibling.style.display === "none" ? "block" : "none";
    });
  });
});
