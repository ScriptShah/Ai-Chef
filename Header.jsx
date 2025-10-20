import chefClaudeLogo from "./images/logo.svg"

export default function Header() {
    return (
        <header>
            <img src={chefClaudeLogo}/>
            <h1>AI Chef </h1>
        </header>
    )
}