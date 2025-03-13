function addRecommendation() {
    const input = document.getElementById("new-recommendation");
    const recommendationList = document.getElementById("recommendation-list");
    
    if (input.value.trim() !== "") {
        const newRecommendation = document.createElement("li");
        newRecommendation.textContent = input.value;
        recommendationList.appendChild(newRecommendation);
        
        alert("Thank you! Your recommendation has been added.");
        input.value = "";
    } else {
        alert("Please enter a recommendation before submitting.");
    }
}
