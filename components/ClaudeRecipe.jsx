import ReactMarkdown from "react-markdown"

export default function ClaudeRecipe(props) {
    return (

        props.recipe ?
            <section className="suggested-recipe-container" aria-live="polite">
                <h2>AI Chef Recommends </h2>
                <ReactMarkdown>{props.recipe}</ReactMarkdown>
            </section>
            : <div class="loader">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
                <div class="bar4"></div>
                <div class="bar5"></div>
                <div class="bar6"></div>
                <div class="bar7"></div>
                <div class="bar8"></div>
                <div class="bar9"></div>
                <div class="bar10"></div>
                <div class="bar11"></div>
                <div class="bar12"></div>
            </div>

    )
}