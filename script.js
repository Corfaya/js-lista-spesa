// Variables
const ingredients = ["Digestive", "Burro", "Zucchero", "Limone", "Formaggio spalmabile", "Panna fresca", "Zucchero a velo", "Gelatina", "Vaniglia", "Frutti di bosco", "Marmellata"]
const shoppingList = document.getElementById("shopping-list")

// Logic
let i = 0
while (i < ingredients.length) {
    let li = document.createElement("li")
    li.innerHTML = ingredients[i]
    shoppingList.append(li)
    i++
}