const form = document.getElementById("form")
const formWrapper = document.getElementsByClassName("form-wrapper")
const searchInput = document.getElementById("searchInput")
const buttonWrapper = document.getElementsByClassName("button-wrapper")
const searchButton = document.getElementById("searchButton")
const ClearButton = document.getElementById("clearButton")
const imagelistwrapper = document.getElementsByClassName("imagelist-wrapper")


form.addEventListener("sumbit", search);
function search(e){
const value = searchInput.value.trim()
fetch(
    `<https://api.unsplash.com/search/photos?query=${value}`,{
        method:"GET",
        headers:{
            Authorization:"Client-ID q5nxtdsaydd7FezZmr1y6frhgK2xJDqZqSCI385ATgs"
        }
    }
)
.then((response)=>response.json())
.then(()=>{
    Array.from(data.results).forEach((image)=>{
        addImageToUI(image.urls.small)
    })
})
.catch((error)=>console.log(error))

e.preventDefault()
}
// ekrana apiden gelen resimleri basma
function addImageToUI(url){
    const div = document.createElement("div");
    div.className="card"
    //burada img elementini oluşturduk
    const img = document.createElement("img");
    //burada src ye gelen urlyi veriyoruz
    img.setAttribute("src",url)
    imagelistwrapper.appenChild(div)
    
}
ClearButton.addEventListener("click", clear);
function clear(){
    searchInput.value=""
    imageListWrapper.innerHTML=""
}



