class NavBar extends HTMLElement {
    constructor(){
        super();
        const shadow = this.attachShadow({ mode: "open" });

        shadow.innerHTML = `
        <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        nav{
            font-family: var(--font);
            width: 100%;
            background-color: var(--secondary-background);
            padding: 1rem;
            box-shadow: var(--primary-shadow);
        }
        ul{
            width: 100%;
            list-style: none;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-direction: row;
        }
        ul:nth-child(1){
            font-size: 2rem;
            padding-left: 1rem;
            color: var(--secondary-color);
            font-weight: 500;
        } 
        button{
            background: transparent;
            border: none;
            cursor: pointer;
            transition: text-decoration 0.2s;
            padding-right: 1rem;
            font-size: 1rem;
            color: var(--secondary-color);
            display: flex;
        }
        button:hover{
            text-decoration: underline;
        }
        </style>
        <nav>
            <ul>
                <li>CyberCAM</li>
                <li><button>about</button></li>
            </ul>
        </nav>
        `
    }
    connectedCallback(){
        const btn = this.shadowRoot.querySelector("button");
        btn.addEventListener("click", ()=>{
            window.location.href = 'about.html';
        })
    }
}

customElements.define("navigation-bar", NavBar);