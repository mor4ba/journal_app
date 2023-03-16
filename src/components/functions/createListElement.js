export const createListElement = (elementHead, elementContent, date) => {
  let listElement = document.createElement("li");
  let heading = document.createElement("h2");
  let content = document.createElement("p");
  let time = document.createElement("div");
  let bookmark = document.createElement("div");

  bookmark.innerHTML = `<input type="checkbox" id="bookmark" class="bookmark_input"/><div class="bookmark_icon"></div>`;
  bookmark.className = "bookmark";
  time.innerText = date;
  heading.innerText = elementHead;
  content.innerText = elementContent;

  let list = document.querySelector(".noteList");
  listElement.classList.add("note");
  listElement.append(time, heading, bookmark, content);
  list.append(listElement);
};
