const allImages=document.querySelector("#catList");
const form=document.querySelector("#form");
const inputElement=document.querySelector("#search-input");
const showMore=document.querySelector("#more");
let page=1;
let searchValue;

async function main(){
    try {
        const response = await fetch(`https://api.unsplash.com/search/photos/?client_id=VhdYhjzQtbZIaZol7AdkWYdvOsnKGdb_xdIn3tWyNSk&query=${searchValue}&page=${page}`,);
        const x = await response.json();
        for (const item of x.results) {
            const imageElemnt=document.createElement("img");
            imageElemnt.classList.add("imageStyle");
            imageElemnt.src=item.urls.full;

            const newDiv=document.createElement("div");
            newDiv.classList.add("newDiv");

            newDiv.appendChild(imageElemnt);
            allImages.appendChild(newDiv);

            showMore.classList.remove("hidden");
        }
    } catch (error) {
        console.log("here is ur error : ", error);
    }
}

form.addEventListener("submit", async (e)=>{
    e.preventDefault();
    searchValue=inputElement.value;
    main();
    allImages.innerHTML="";
});

showMore.addEventListener("click",()=>{
    page++;
    main();
});