//localStorage.clear();
//https://randomuser.me/api/portraits/med/men/55.jpg

document.addEventListener('DOMContentLoaded', (event) => {
  loadArtists();
})

function addArtist() {
  var targetdiv = document.getElementById("dropdown");
  if (targetdiv.style.display != "block") {
    targetdiv.style.display = "block";
  } else {
    targetdiv.style.display = "none";
  }
}

function add() {
  //make DOM objects
  var wrapper = document.getElementById("wrapper");
  var name = document.createTextNode(document.getElementById("name").value);
  var about = document.createTextNode(document.getElementById("about").value);
  var imgurl = document.getElementById("imgurl").value;

  //name value to store in localStorage
  var storeName = document.getElementById("name").value;
  //array value to store in pair
  var current = {
    "about": document.getElementById("about").value,
    "imgurl": document.getElementById("imgurl").value,
  };

  localStorage.setItem(storeName, JSON.stringify(current));

  var div = document.createElement("div");
  div.className = "profile";

  //image
  var imgurlElm = document.createElement("img");
  imgurlElm.src = imgurl;
  imgurlElm.style.float = "left";
  imgurlElm.style.padding = "0px 20px 0px 0px";
  div.appendChild(imgurlElm);

  //name
  var nameElem = document.createElement("h2");
  nameElem.appendChild(name);
  div.appendChild(nameElem);

  //description
  var aboutElem = document.createElement("h3");
  aboutElem.appendChild(about);
  div.appendChild(about);

  //delete
  var deleteBtn = document.createElement("button");
  deleteBtn.className = "deleteBtn";
  deleteBtn.innerText = 'Delete';
  div.appendChild(deleteBtn);
  deleteBtn.onclick = function(){
    deletebtnhandler(deleteBtn, name)
  };
  wrapper.style.display = "block";
  wrapper.appendChild(div);
}

function deletebtnhandler(e, name){
  //console.log("remove", name);
  console.log(localStorage.removeItem(name));
  e.parentElement.parentElement.removeChild(e.parentElement);
}

function loadArtists(){
  var i;
  console.log("local storage");
  for (i = 0; i < localStorage.length; i++)   {
      var div = document.createElement("div");
      div.className = "profile";
      console.log(localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
      var key = localStorage.key(i);
      var name = document.createTextNode(key);
      var about = document.createTextNode(JSON.parse(localStorage.getItem(key)).about);
      var imgurl = JSON.parse(localStorage.getItem(key)).imgurl;
      var wrapper = document.getElementById("wrapper")

      //image
      var imgurlElm = document.createElement("img");
      imgurlElm.src = imgurl;
      imgurlElm.style.float = "left";
      imgurlElm.style.padding = "0px 20px 0px 0px";
      div.appendChild(imgurlElm);

      //name
      var nameElem = document.createElement("h2");
      nameElem.appendChild(name);
      div.appendChild(nameElem);

      //description
      var aboutElem = document.createElement("h3");
      aboutElem.appendChild(about);
      div.appendChild(about);

      //delete
      var deleteBtn = document.createElement("button");
      deleteBtn.className = "deleteBtn";
      deleteBtn.innerText = 'Delete';
      div.appendChild(deleteBtn);
      deleteBtn.onclick = function(){
        deletebtnhandler(deleteBtn, name)
      };
      wrapper.style.display = "block";
      wrapper.appendChild(div);
  }
}

function search() {
  //clear the div
  document.getElementById("wrapper").innerHTML = "";

  var query = document.getElementById("search").value;
  var i;
  var key;
  for(i = 0; i < localStorage.length; i++)
  {
    key = localStorage.key(i);
    console.log(key);
    if(key.includes(query)) {
      var div = document.createElement("div");
      div.className = "profile";
      console.log(localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
      var name = document.createTextNode(key);
      var about = document.createTextNode(JSON.parse(localStorage.getItem(key)).about);
      var imgurl = JSON.parse(localStorage.getItem(key)).imgurl;
      var wrapper = document.getElementById("wrapper")

      //image
      var imgurlElm = document.createElement("img");
      imgurlElm.src = imgurl;
      imgurlElm.style.float = "left";
      imgurlElm.style.padding = "0px 20px 0px 0px";
      div.appendChild(imgurlElm);

      //name
      var nameElem = document.createElement("h2");
      nameElem.appendChild(name);
      div.appendChild(nameElem);

      //description
      var aboutElem = document.createElement("h3");
      aboutElem.appendChild(about);
      div.appendChild(about);

      //delete
      var deleteBtn = document.createElement("button");
      deleteBtn.className = "deleteBtn";
      deleteBtn.innerText = 'Delete';
      div.appendChild(deleteBtn);
      deleteBtn.onclick = function(){
        deletebtnhandler(deleteBtn, name)
      };
      wrapper.style.display = "block";
      wrapper.appendChild(div);
    }
  }
}