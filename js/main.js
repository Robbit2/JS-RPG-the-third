let main = new GUI({height:h, width:w, x:0, y:0, name:"E", title:"Title", slots:10});
main.add();

let player = new Player({health:10, maxHealth:10, strength:10, intelligence:10, defense:10});
renderStats(player);