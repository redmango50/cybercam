class ReasonSection extends HTMLElement{
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

        .about{
            width: 100%;
            padding-bottom: 5rem;
            padding-left: 1rem;
            padding-right: 1rem;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            gap: 1rem;
            margin-top: 
        }
        .cart {
            width: 300px;
            border-radius: 15px;
            box-shadow: var(--cart-shadow);
            background-color: var(--focus-background);
            text-align: center;
            transition: transform 0.3s, box-shadow 0.3s;
            padding: 1rem;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            min-height: 350px;
        }

        .cart:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }

        h2 {
            font-size: 1.5rem;
            color: var(--secondary-color);
            margin-bottom: 10px;
        }

        p {
            font-size: 1rem;
            color: var(--text-color);
            line-height: 1.5;
            margin-bottom: 15px;
        }

        img {
            width: auto;
            height: 150px;
            object-fit: cover;
            margin-bottom: 15px;
        }
        h3{
            text-align: center;
            font-size: 2rem;
            padding-top: 10rem;
            padding-bottom: 1.5rem;
        }
    </style>
    <h3>Reasons</h3>
    <div class="about">
        <div class="cart">
            <img src="/cybercam/static-assets/dataprot.svg" />
                <h2>Data Protection</h2>
                <p>Protect your personal information because if it's stolen, it can be used against you</p>
        </div>
        <div class="cart">
            <img src="/cybercam/static-assets/financial-security-svgrepo-com.svg" />
                <h2>Financial Security</h2>
                <p>Protect your money and accounts because if they’re hacked, you could lose everything</p>
        </div>
        <div class="cart">
           <img src="/cybercam/static-assets/identity_theft.svg" />
                <h2>Identity Theft</h2>
                <p>Protect your personal details because if someone steals them, they can pretend to be you</p>
        </div>
        <div class="cart">
            <img src="/cybercam/static-assets/call-svgrepo-com.svg" />
                <h2>Safe Communication</h2>
                <p>Be careful online because messages or links can be traps to steal your information</p>
        </div>
    </div>
        `
    }
}


customElements.define("reason-section", ReasonSection);




