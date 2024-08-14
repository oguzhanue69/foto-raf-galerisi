const formWrapper = document.querySelector(".form-wrapper");
const form = document.querySelector("#form");
const searchInput = document.querySelector("#searchInput");
const buttonWrapper = document.querySelector(".button-wrapper");
const searchButton = document.querySelector("#searchButton");
const clearButton = document.querySelector("#clearButton");
const imageListWrapper = document.querySelector(".imagelist-wrapper");


form.addEventListener("submit", search);
//ekran temizleme
clearButton.addEventListener("click",clear)

function clear(){
    searchInput.value=""
    imageListWrapper.innerHTML=""
}

function search(e) {
//burada inputa girilen değeri alıyoruz
    const value = searchInput.value.trim()
//burada siteden gelen api yi çekiyoruz
fetch(
    `https://api.unsplash.com/search/photos?query=${value}`,{
       method:"GET",
       headers:{
        Authorization:"Client-ID s42z4MABG1bC5m1cnmEgvbLjqf9J9v9PwmP9HJ2msgI"
       } 
    }
)
.then((response)=>response.json())
.then((data)=>{
    Array.from(data.results).forEach((image)=>{
        
        addImageToUI(image.urls.small)
    })
})
.catch((error)=>console.log(error))

    e.preventDefault()
}
// ekrana apiden gelen resimleri basma
function addImageToUI(url){
    //classı ccard olan div oluşturduk
    const div = document.createElement("div")
    div.className="card"
    //burada img elementini oluşturduk
    const img = document.createElement("img")
    //burada src ye gelen urlyi veriyoruz
    img.setAttribute("src",url)
    //div içine img yi yerleştirdik
    div.appendChild(img)
    imageListWrapper.appendChild(div)
}


