var newCustomer ={
    id : 12,
    name : "lil baby",
    location: "mombasa",
    phone : +254791729544,
    products : [
        {
            item : "onions",
            price: "200 per kg",
        },
        //places to add new items
    ]
}

document.querySelector("#post").addEventListener("click",()=>{
    window.location.href = "../main/index.html";
})