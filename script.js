const jokes = [
    "Hindi ka mahal non",
    "May iba na siyang gusto",
    "Umaasa ka lang",
    "May iba na siyang mahal",
    "Wala siyang pake sayo"
];

document.getElementById("ok-button").addEventListener("click", function() {
    const name = document.getElementById("name-input").value;
    if (name) {
        // Update the title with the user's name
        document.querySelector(".title").innerText = `Happy Birthday, ${name}! 🎉`;
        
        document.getElementById("cake-container").style.display = "block";
        document.getElementById("birthday-video").style.display = "block"; // Show video
        document.getElementById("joke-button").style.display = "block"; // Show joke button

        // Hide input and button
        document.getElementById("name-input").style.display = "none";
        document.getElementById("ok-button").style.display = "none";
    } else {
        alert("Please enter your name!");
    }
});

document.getElementById("joke-button").addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    document.getElementById("joke").innerText = jokes[randomIndex];
});
