let request = new XMLHttpRequest();
request.open("GET", "data.json", false);
request.send(null);
let jsonData = JSON.parse(request.responseText);
let index = 0;

function card(index) {
  let element = document.createElement("div");
  element.className = "card";
  let profile = document.createElement("div");
  profile.className = "profile";
  profile.innerHTML =
    "<img style = 'border-radius: 50px' src=" +
    jsonData[index].profile_image +
    ">";
  element.appendChild(profile);
  let name = document.createElement("div");
  name.className = "name";
  name.innerHTML =
    "<p style = 'font-weight: 700; font-family: Inter,sans-serif'>" +
    jsonData[index].name +
    "</p>" +
    jsonData[index].date.split(" ")[0];
  element.appendChild(name);
  let instagram = document.createElement("div");
  instagram.className = "instagram";
  instagram.innerHTML = "<img src='icons/instagram-logo.svg'>";
  element.appendChild(instagram);
  let picture = document.createElement("div");
  picture.className = "picture";
  picture.innerHTML = "<img src=" + jsonData[index].image + ">";
  element.appendChild(picture);
  let description = document.createElement("div");
  description.className = "description";
  description.innerHTML =
    "<p style = 'font-family: Inter,sans-serif; text-overflow: ellipsis;'>" +
    jsonData[index].caption +
    "</p>";
  element.appendChild(description);
  let heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML =
    "<input class='like' type='image' src='icons/heart.svg' onclick='like(" +
    index +
    ")'>";
  element.appendChild(heart);
  let likes = document.createElement("div");
  likes.className = "likes";
  likes.innerHTML = jsonData[index].likes;
  element.appendChild(likes);
  return element;
}

function like(index) {
  if (
    document.getElementsByClassName("like")[index].style.backgroundColor ===
    "red"
  ) {
    document.getElementsByClassName("like")[index].style.backgroundColor =
      "transparent";
    document.getElementsByClassName("likes")[index].innerHTML =
      jsonData[index].likes;
  } else {
    document.getElementsByClassName("like")[index].style.backgroundColor =
      "red";
    document.getElementsByClassName("likes")[index].innerHTML =
      parseInt(jsonData[index].likes) + 1;
  }
}
function loadItems() {
  let content = document.getElementsByClassName("cards")[0];
  let startIndex = index;
  while (index < startIndex + 4) {
    content.appendChild(card(index));
    index++;
  }
}

function loadMore() {
  loadItems();
  let element = document.getElementById("load");
  element.scrollIntoView({ behavior: "smooth", inline: "end" });
  if (index === jsonData.length) {
    document.getElementById("load").remove();
  }
}
