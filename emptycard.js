export default function emptyCard(container){
    if(
        container.children.length
    ){
        container.removeChild(container.children[0])
    }
}
 