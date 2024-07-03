// --- VARIABLES ---
const ingredients = ["Digestive", "Burro", "Zucchero", "Limone", "Formaggio spalmabile", "Panna fresca", "Zucchero a velo", "Gelatina", "Vaniglia", "Frutti di bosco", "Marmellata"]
const shoppingList = document.getElementById("shopping-list")

// --- LOGIC ---
let i = 0
while (i < ingredients.length) {
    let li = document.createElement("li")
    li.innerHTML = ingredients[i]
    shoppingList.append(li)
    i++
}

// --- PERSONAL EXERCISES ---
document.getElementById("add-ingredients").addEventListener("click", function() {
    let newIngredient = document.getElementById("ingredients").value;
    if (newIngredient === "") {
        alert("Aggiungi un ingrediente")
    } else {
        ingredients.push(newIngredient)
        let li = document.createElement("li")
        li.innerHTML = newIngredient;
        shoppingList.append(li)
    }
})