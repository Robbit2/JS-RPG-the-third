class GUI {
    constructor ({height, width, x ,y, name}) {
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
        this.div.innerHTML = "E"

        // built in div data variables
        this.div.dataset.width = this.width;
        this.div.setAttribute("data-height", this.height);
    }

    add () {
        document.body.appendChild(this.div);
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

class Container extends GUI {
    constructor ({slotsx, slotsy, title}) {
        this.slotsx = slotsx;
        this.slotsy = slotsy;
        this.title = title;
    }
}