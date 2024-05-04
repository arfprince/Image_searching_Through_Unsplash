const allImages=document.querySelector("#container");
async function main(){
    try {
        const response= await fetch("https://api.unsplash.com/search/photos/?client_id=VhdYhjzQtbZIaZol7AdkWYdvOsnKGdb_xdIn3tWyNSk&query=cat",);
        const x = await response.json();

        for (const result of x.results) {
            const newItem=document.createElement("div");
            const imageElemnt=document.createElement("img");
            imageElemnt.src=result;
            console.log(imageElemnt);
            newItem.appendChild(imageElemnt);
            allImages.appendChild(newItem);
        }
    } catch (error) {
        console.log("here is ur eror : ", error);
    }
}

main();