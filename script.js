const choices = document.querySelectorAll(".choose");
 for(const choice of choices){
    console.log(choice);
    choice.addEventListener("click", () => {
        const Selected = choice.getAttribute("id");
        console.log(Selected);
    })
}

