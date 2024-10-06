const button = document.getElementById("button");
const sallyJoeBob = document.getElementById("Farrell's Glorious Face");

button.addEventListener("click", function() {
    sallyJoeBob.hidden = !sallyJoeBob.hidden;
    const text = document.createElement("p");
    text.innerText = "Hello!";
    document.append(text);
});
