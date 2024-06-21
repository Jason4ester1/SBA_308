const johnWickButton = document.querySelector(".woah")
const box = document.querySelector(".box")
async function johnsClips() {
    const response = await fetch("https://whoa.onrender.com/whoas/random");
    const clips = await response.json();
    return clips;
  }

  //console.log(johnsClips())
johnsClips().then((data)=>{
  console.log(data)
  
})
johnWickButton.addEventListener("click",(e)=>{
    e.preventDefault()
    johnsClips().then((data)=>{
      emptyCard(box)
        let johnWickCard = makeJohnWickCard(data[0].poster,data[0].video["1080p"],data[0].movie)
      console.log(johnWickCard)
      box.appendChild(johnWickCard)
      })
})
function makeJohnWickCard(poster,video,movieTitle){
    let card = document.createElement("div")
   let tiltle = document.createElement("h1")
   let image = document.createElement("img") 
   let vid = document.createElement("video")  
   
   tiltle.innerText = movieTitle
   image.src = poster
   image.style.width = "25%" 
   image.style.height = "25%"
   vid.src = video
   vid.autoplay = true
   vid.controls = true
   vid.style.width = "50%"

   
   card.appendChild(tiltle)
   card.appendChild(image)
   card.appendChild(vid)

   return card
}
function emptyCard(container){
    if(
        container.children.length
    ){
        container.removeChild(container.children[0])
    }
}