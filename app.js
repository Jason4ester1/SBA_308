import makeJohnWickCard from "./makejohnwickcards.js";
import emptyCard from "./emptycard.js";
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
