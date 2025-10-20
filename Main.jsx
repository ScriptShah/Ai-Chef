import React from "react"
import IngredientsList from "./components/IngredientsList"
import ClaudeRecipe from "./components/ClaudeRecipe"
import { getRecipeFromChefClaude, getRecipeFromMistral } from "./ai"



export default function Main() {
    
    const [ingredients, setIngredients] = React.useState([])
    const [recipeShown, setRecipeShown] = React.useState(false)
    const [recipe, setRecipe] = React.useState("")

    function toggleRecipeShown() {
        getRecipe(ingredients)
        setRecipeShown(prevShown => !prevShown)
    }

    function removeIngredient(Ingredient) {
        const indexToRemove = ingredients.indexOf(Ingredient);
        setIngredients(ingredients.filter((_, index) => index !== indexToRemove))
        console.log(ingredients)
        setRecipeShown(prevShown => false)
        setRecipe("")
    }

    async function getRecipe(ingredientList) {
        const recipe = await getRecipeFromMistral(ingredientList)
        setRecipe(recipe)
    }

    function addIngredient(formData) {
        const newIngredient = (formData.get("ingredient") || "").toString().trim()
        if (!newIngredient) return
        setIngredients(prev => [...prev, newIngredient])
        setRecipeShown(prevShown => false)
        setRecipe("")
    }

    return (
        <main>
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    const formData = new FormData(e.currentTarget)
                    addIngredient(formData)
                    e.currentTarget.reset() 
                }}
                className="add-ingredient-form"
            >
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button type="submit">Add ingredient</button>
            </form>

            {ingredients.length > 0 &&
                <IngredientsList
                    ingredients={ingredients}
                    getRecipe={toggleRecipeShown}
                    removeIngredient={removeIngredient}
                />
            }

            {recipeShown && <ClaudeRecipe recipe={recipe} />}
        </main>
    )
}