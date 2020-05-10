/*
 Player ( un simplu div ), 
 iar daca apasam arrow down, sa il miscam in jos
 */
class Player {
    constructor(gameContainer) {
        this.div = Player.display();
        this.move();
        this.gameContainer = gameContainer;
    }

    // logica de miscare
    move() {
        console.log('miscare', this)
        // https://keycode.info/ de intrat pentru a testa codurile
        document.addEventListener('keyup', (event) => {
            // aici avem un arrow function, 
            // aceste "arrow function" sunt speciale pentru ca:
            // -copiaza contextul de mai sus 
            // ( in cazul nostru, this din metoda miscare())
            console.log(this);

            const oldTop = parseInt(this.div.style.top);
            const oldLeft = parseInt(this.div.style.left);

            const minTop = parseInt(this.div.style.height);
            const maxTop = gameContainer.offsetHeight - minTop;

            const minLeft = parseInt(this.div.style.width);
            const maxLeft = gameContainer.offsetWidth - minLeft;

                // logica de miscare in jos - fara a iesi din container
            if (event.keyCode === 40 && oldTop < maxTop) { // key down
                this.div.style.top = `${oldTop + 20}px`;
                console.log('arrow down', this.div.style.top);

                 // logica de miscare in sus - fara a iesi din container
            } else if (event.keyCode === 38 && oldTop >= minTop){ // key up
                this.div.style.top = `${oldTop - 20}px`;
                console.log('arrow up', this.div.style.top);

                // logica de miscare in stanga - fara a iesi din container
            } else if (event.keyCode === 37 && oldLeft >= minLeft) { // key left
                this.div.style.left = `${oldLeft - 20}px`;
                console.log('arrow left', this.div.style.left);

                 // logica de miscare in dreapta - fara a iesi din container
            } else if (event.keyCode === 39 && oldLeft < maxLeft) { // key right
                this.div.style.left = `${oldLeft + 20}px`;
                console.log('arrow right', this.div.style.left)
            }
        })
    }

    // afisarea div-ului
    static display() {
        const div = document.createElement('div');
        const { style } = div;
        style.width = "20px";
        style.height = "20px";
        style.backgroundColor = "red";
        style.position = "absolute";
        style.top = "20px";
        style.left = "20px";

        gameContainer.appendChild(div);

        return div;
    }
    
}

const gameContainer = document.getElementById('gameContainer');
const player =  new Player(gameContainer);

document.getElementById('startGame').addEventListener('click', function(){
    window.location.reload();
})

