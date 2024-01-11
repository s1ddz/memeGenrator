const meme_img=document.querySelector(".memegen img");
const meme_title=document.querySelector(".memegen .mtitle");
const meme_author=document.querySelector(".memegen .mauthor");

const update=(url, title, author)=>{
  meme_img.setAttribute("src", url);
  meme_title.innerHTML=title;
  meme_author.innerHTML="Meme By: "+ author;
};

const gen = () => {
    fetch("https://meme-api.com/gimme/wholesomememes")
      .then((response) => response.json())
      .then((data) => {
        update(data.url, data.title, data.author);
      });
  };







    
