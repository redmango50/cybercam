class WhoSection extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        shadow.innerHTML = `
        <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font: var(--font);
        }
        .gridLayout{
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 2rem;
            padding: 3rem;
            border-radius: 10px;
        }
        .common{
            width: 90%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 1rem;
            padding: 1.5rem;
            background-color: var(--secondary-background);
        }
        .wrapper{
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            flex-direction: column;
            gap: 1em;
            padding: 2rem;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            border: 1px solid rgba(255, 255, 255, 0.3);
            backdrop-filter: blur(10px);
            max-width: 400px;
            width: 45%;
            color: #fff;
            box-shadow: inset 0 2px 10px rgba(0,0,0,0.25), 0 5px 20px rgba(0,0,0,0.15);
            min-width: 300px;
        }
        img{
            width: 45%;
            aspect-ratio: 13 / 11;
            padding: 1rem;
            box-shadow: 0 10px 20px rgba(0,0,0,0.3);
            border: 1px solid rgba(255,255,255,0.3);
            backdrop-filter: blur(10px);
            max-width: 400px;
            border-radius: 20px;
            min-width: 300px;
        }
        h2{
            font-size: 3rem;
            color: var(--secondary-color);
        }
        p{
            color: var(--text-color);
            width: 400px;
        }
        button{
            padding: 0.7rem 1.5rem 0.7rem 1.5rem;
            border-radius: 5px;
            border: transparent;
            transition: transform 200ms ease-in;
            cursor: pointer;
            
        }
        button:hover{
            transform: scale(1.05);
        }
        @media (max-width: 768px) {
            .common {
                flex-direction: column;
            }
            .wrapper, img {
                width: 90%;
                max-width: none;
            }
        }
        @media (max-width: 650px){
            h2{
                font-size: 2rem;
            }
            p{
                width: 250px;
            }
        }
        @media(max-width: 480px){
            .common{
                width: 100%;
                background-color: var(--secondary-background);
                min-width: 400px;
            }
        }
    </style>
     <div class="gridLayout">  
        <div class="child1 common">
            <img src="static-assets/grid1.png"/>
            <div class="wrapper">
                <h2>Abtahi Bin Jamil</h2>
                <p>A aspiring <b>LEGEND</b> whom dedicated to break trough the barriers of matrix & reality</p>
                <button id="abt">Facebook</button>
            </div>    
        </div>
        <div class="child2 common">
            <div class="wrapper">
                <h2>Tanjim Hossain</h2>
                <p>A insecure <b>NOOB</b> & the author of the website responsible for matrix into reality </p>
                <button id="redm">Facebook</button>
            </div>       
            <img src="static-assets/grid2.svg"/>             
        </div>
    </div>
        `
    }
    connectedCallback(){
        const ab = this.shadowRoot.getElementById("abt");
        const redm = this.shadowRoot.getElementById("redm");
        ab.addEventListener("click", ()=>{
            window.location.href = "https://www.facebook.com/abtahi.bin.jamil";
        })
        redm.addEventListener("click", ()=>{
            window.location.href = "https://www.facebook.com/profile.php?id=61578939447803";
        })
    }
}

customElements.define("who-section", WhoSection);