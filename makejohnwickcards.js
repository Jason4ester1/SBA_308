 export default function makeJohnWickCard(poster,video,movieTitle){
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