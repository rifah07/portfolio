function addRecommendation() {
    const input = document.getElementById("new-recommendation");
    const recommendationList = document.getElementById("recommendation-list");

    const text = input.value.trim();
    
    if (text.trim() !== "") {
        const newRecommendation = document.createElement("div");
        newRecommendation.classList.add("recommendation-card");
        newRecommendation.innerHTML = `<p>"${text}"</p><h4>- Anonymous</h4>`;

        recommendationList.appendChild(newRecommendation);

        input.value = ""; 

        
        alert("Thank you! Your recommendation has been added.");
        input.value = "";
    } else {
        alert("Please enter a recommendation before submitting.");
    }
}