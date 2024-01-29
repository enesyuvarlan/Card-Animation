# Card Animation
## Preview

![thumbnail](https://github.com/nsyvrln/Card-Animation/assets/32177958/02b00622-5add-4e50-9825-1a4cc24b61a9)

## How To Use

### Html
```html
    <div class="container">
        <div class="card active" id="card-1">
            <div class="footer">
                <span class="number">1</span>
                <h4 class="title ">Lion</h4>
            </div>
        </div>
        <div class="card" id="card-2">
            <div class="footer">
                <span class="number">2</span>
                <h4 class="title">Dog</h4>
            </div>
        </div>
        <div class="card" id="card-3">
            <div class="footer">
                <span class="number">3</span>
                <h4 class="title">Parrot</h4>
            </div>
        </div>
        <div class="card" id="card-4">
            <div class="footer">
                <span class="number">4</span>
                <h4 class="title">Turtle</h4>
            </div>
        </div>
        <div class="card" id="card-5">
            <div class="footer">
                <span class="number">5</span>
                <h4 class="title">Cat</h4>
            </div>
        </div>
        <div class="card" id="card-6">
            <div class="footer">
                <span class="number">6</span>
                <h4 class="title">Owl</h4>
            </div>
        </div>
    </div>

```
### Css

```css
/* REBOOT */
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
}
/* BODY */
body {
    background-color: #000000;
    min-width: 40vw ;
}

/* CONTAINER */
.container {
    display: flex;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    background-color: #eeeeea;
}

/* CARD */
.card {
    display: flex;
    align-items: flex-end;
    height: 60vh;
    width: 80px;
    margin: 0 10px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 30px;
    cursor: pointer;
    overflow: hidden;
    box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.8);
    transition: .6s cubic-bezier(.28,-0.03,0,.99);
}
.card.active {
    width: 600px;
}

/* FOOTER */
.card .footer {
    display: flex;
    flex-wrap: nowrap;
    color: #eaeaee;
}

.card .footer .number {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 15px;
    font-size: 25px;
    font-weight: 700;
    background-color: #0F1035;
    color: #ffffff;
}

/* TITLE */
.footer .title {
    opacity: 0;
    font-size: 25px;
    font-weight: 700;
    transition: 0.5s ease-in;
    text-transform: uppercase;
    margin: auto;
}

.card.active .title {
    opacity: 1;
    transition: 2s;
}

/* ANIMATION */

@keyframes fadeOut {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}
@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@media screen and (width <= 800px) {
    .card:nth-child(5),
    .card:nth-child(6) {
        animation: fadeOut 0.5s forwards;
        
    }
    .card.active {
        width: 500px;
    }

    .card .footer .number{
        width: 35px;
        height: 35px;
        margin-right: 10px !important;
        margin-left: 3px;
        right: 0;
        left: 0;
        font-size: 20px !important;
        font-weight: 500;
    }
    .footer .title {
        font-size: 20px !important;
        font-weight: 500;
    }
}
@media screen and (width > 800px) {
    .card:nth-child(5),
    .card:nth-child(6) {
        display: flex !important;
        animation: fadeIn 0.5s forwards;
    }
}

/* @CARD-BACKGROUND */

#card-1 {
    background-image: url(./img/lion.jpg);
}
#card-2 {
    background-image: url(./img/dog.jpg);
}
#card-3 {
    background-image: url(./img/parrot.jpg);
}
#card-4 {
    background-image: url(./img/turtle.jpg);
}
#card-5 {
    background-image: url(./img/cat.jpg);
}
#card-6 {
    background-image: url(./img/owl.jpg);
}
```
### JavaScript

```JavaScript
const cards = document.querySelectorAll('.card');
const fiveAndSixCards = document.querySelectorAll(".card:nth-child(5), .card:nth-child(6)");


function updateCardsVisibility() {
    let screenWidth = window.innerWidth;
    fiveAndSixCards.forEach(function(card) {
        card.addEventListener("animationend", () => {
            card.style.display = (screenWidth <= 800) ? 'none' : 'flex';
            }
        );
    });
}
window.addEventListener("DOMContentLoaded", updateCardsVisibility);
window.addEventListener("resize", updateCardsVisibility);

// ACTIVE CLASS
function removeActiveClass() {
    cards.forEach((card) => {
        card.classList.remove('active');
    })
}

cards.forEach((card) => {
    card.addEventListener('click', () => {
        removeActiveClass(card)
        card.classList.add('active');
    })
})
```
