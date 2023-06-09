const h = window.innerHeight;
const w = window.innerWidth;

class GUI {
    constructor ({height, width, x ,y, name, title}) {
        // init object variables
        this.height = height;
        this.width = width;
        this.x = x;
        this.y = y;
        this.name = name;

        // create div
        this.div = document.createElement("div");
        this.div.id = `GUI-${this.name}`;
        this.div.classList.add("GUI");
        this.div.innerHTML = `<h1>${title}</h1>`;

        // built in div css variables
        this.div.style = `--width:${this.width};--height:${this.height};--x:${this.x}px;--y:${this.y}px;`;
    }

    add () {
        document.body.querySelector("main").appendChild(this.div);
        return true;
    }

    hide () {
        this.div.style.visibility = "hidden";
        return true;
    }

    show () {
        this.div.style.visibility = "visible";
    }
}

function renderInventory(){
    return;
}

function renderStats(player){
    const pStatsDOM = document.querySelector("#player-stats");
    pStatsDOM.innerHTML = `HP : ${player.stats.health} / ${player.stats.maxHealth} | STR : ${player.stats.strength} | DEF : ${player.stats.defense} | INT : ${player.stats.intelligence}`;
}