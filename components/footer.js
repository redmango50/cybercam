class footerTag extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({ mode: "open" });

        shadow.innerHTML = `
            <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: var(--font);
        }

        body {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        footer {
            background-color: var(--secondary-background);
            padding: 40px 20px;
            box-shadow: var(--primary-shadow);
            color: var(--text-color);
        }

        .footer-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            max-width: 1200px;
            margin: 0 auto;
        }

        .footer-column {
            flex: 1 1 200px;
            margin: 10px;
        }

        .footer-column h3 {
            margin-bottom: 15px;
            color: var(--primary-color);
        }

        .footer-column ul {
            list-style: none;
        }

        .footer-column ul li {
            margin-bottom: 10px;
        }

        .footer-column ul li a {
            text-decoration: none;
            color: var(--text-color);
            transition: color 0.3s;
        }

        .footer-column ul li a:hover {
            text-decoration: underline;
        }

        .footer-bottom {
            text-align: center;
            margin-top: 30px;
            font-size: 0.9rem;
            color: var(--secondary-color);
        }

        @media (max-width: 768px) {
            .footer-container {
                flex-direction: column;
                align-items: center;
            }

            .footer-column {
                margin: 20px 0;
            }
        }
    </style>
    <footer>
        <div class="footer-container">
            <div class="footer-column">
                <h3>About Us</h3>
                <ul>
                    <li><a href="#">Our Story</a></li>
                    <li><a href="#">Team</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h3>Services</h3>
                <ul>
                    <li><a href="#">Consulting</a></li>
                    <li><a href="#">Development</a></li>
                    <li><a href="#">Design</a></li>
                    <li><a href="#">Marketing</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h3>Support</h3>
                <ul>
                    <li><a href="#">Help Center</a></li>
                    <li><a href="#">FAQs</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Live Chat</a></li>
                </ul>
            </div>
            <div class="footer-column">
                <h3>Legal</h3>
                <ul>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#">Cookie Policy</a></li>
                    <li><a href="#">Security</a></li>
                </ul>
            </div>
        </div>

        <div class="footer-bottom">
            &copy; 2025 IRCCT. All rights reserved.
        </div>
    </footer>
        `
    }
}

customElements.define("footer-section", footerTag);