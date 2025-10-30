class HeroSection extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({ mode: "open" });

        shadow.innerHTML = `
        <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: "Inter", sans-serif;
        }

        .hero{
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            padding: 5rem;
            height: fit-content;
            gap: 1rem;
        }

        h1{
            font-size: var(--heading);
            font-weight: var(--heading-weight);
            color: var(--primary-color);
        }

        button{
            border: transparent;
            background-color: var(--primary-button-color);
            padding: 0.5rem 1rem 0.5rem 1rem; 
            cursor: pointer;
            border-radius: 5px;
            transition: transform 200ms ease;
           
        }

        button:hover{
            transform: scale(1.05);
        }

        p{
            text-align: center;
            width: var(--head-body-width);
            line-height: 1.2rem;
            color: var(--secondary-color);
        }
            @media (max-width: 768px) {
                .hero {
                    padding: 2rem;
                    gap: 0.5rem;
                }

                h1 {
                    font-size: calc(var(--heading) * 0.7); /* scales down heading */
                    text-align: center;
                }

                p {
                    width: 90%;
                    line-height: 1.4rem;
                    font-size: 0.9rem;
                }

                button {
                    padding: 0.4rem 0.8rem;
                    font-size: 0.9rem;
                }
            }

            @media (max-width: 480px) {
                .hero {
                    padding: 1.5rem;
                    padding-top: 5rem;
                    padding-bottom: 5rem;
                }

                h1 {
                    font-size: calc(var(--heading) * 0.7);
                }

                p {
                    font-size: 0.8rem;
                }

                button {
                    padding: 0.5rem 0.7rem;
                }
            }
    </style>
    <div class="hero">
        <h1>Why CyberSecurity?</h1>
        <p>In todays world of internet every thing is online and is vanurable. to be protected</p>
        <button>Learn more</button>
    </div>
        `
    }
    connectedCallback(){
        const btn = this.shadowRoot.querySelector("button");
        btn.addEventListener("click", ()=>{
            window.location.href = "https://en.wikipedia.org/wiki/Computer_security";
        })
    }
}

customElements.define("hero-section", HeroSection);