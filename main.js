document.getElementById("key-a").onclick = () => { key("a") };
document.getElementById("key-e").onclick = () => { key("e") };
document.getElementById("key-i").onclick = () => { key("i") };
document.getElementById("key-o").onclick = () => { key("o") };
document.getElementById("key-u").onclick = () => { key("u") };
document.getElementById("key-p").onclick = () => { key("p") };
document.getElementById("key-t").onclick = () => { key("t") };
document.getElementById("key-k").onclick = () => { key("k") };
document.getElementById("key-s").onclick = () => { key("s") };
document.getElementById("key-n").onclick = () => { key("n") };
document.getElementById("key-m").onclick = () => { key("m") };
document.getElementById("key-j").onclick = () => { key("j") };
document.getElementById("key-l").onclick = () => { key("l") };
document.getElementById("key-w").onclick = () => { key("w") };

key = (letter) => {
    if (!finished) {
        string += letter.toUpperCase();
        console.log(string);
        for (i = 0; i < 4; i++) {
            if (string[i] != undefined) {
                document.getElementById("guess" + guess + "char" + i).innerHTML = "<p>" + string[i] + "</p>";
            }
        }
        if (string.length == 4) {
            if (string === target) {
                console.log("win");
                for (i = 0; i < 4; i++) {
                    document.getElementById("guess" + guess + "char" + i).style.backgroundColor = "#55FF55";
                }
                finished = true;
                document.getElementById("gameEndMessage").innerHTML = "pona a! sina sona e nimi ni!"
            } else if (words.includes(string)) {
                temp = target.split("");
                string = string.split("");
                for (i = 0; i < 4; i++) {
                    if (string[i] === target[i]) {
                        console.log(i);
                        document.getElementById("guess" + guess + "char" + i).style.backgroundColor = "#55FF55";
                        document.getElementById("key-" + string[i].toLowerCase()).style.backgroundColor = "#55FF55";
                        string[i] = " ";
                        temp[i] = " ";
                    }
                }
                for (i = 0; i < 4; i++) {
                    if (string[i] != " ") {
                        if (temp.includes(string[i])) {
                            document.getElementById("guess" + guess + "char" + i).style.backgroundColor = "#FFFF00";
                            document.getElementById("key-" + string[i].toLowerCase()).style.backgroundColor = "#FFFF00";
                            temp[temp.indexOf(string[i])] = " ";
                            string[i] = " ";
                        }
                    }
                }
                for (i = 0; i < 4; i++) {
                    if (string[i] != " ") {
                        document.getElementById("guess" + guess + "char" + i).style.backgroundColor = "#999";
                        console.log("key-" + string[i].toLowerCase());
                        console.log(string[i], document.getElementById("key-" + string[i].toLowerCase()).style.backgroundColor);
                        if (document.getElementById("key-" + string[i].toLowerCase()).style.backgroundColor == "") {
                            document.getElementById("key-" + string[i].toLowerCase()).style.backgroundColor = "#999";
                        }
                    }
                }
                console.log(string, temp);
                string = "";
                guess += 1;
                if (guess == 3) {
                    finished = true;
                    console.log("lose");
                    document.getElementById("gameEndMessage").innerHTML = "musi li pini. sina jo ala e alasa nimi.";
                }
            } else {
                string = "";
                document.getElementById("gameEndMessage").innerHTML = "nimi ni li insa ala e nimi ali.";
                setTimeout(() => {
                    if (document.getElementById("gameEndMessage").innerHTML == "nimi ni li insa ala e nimi ali") {
                        document.getElementById("gameEndMessage").innerHTML = "";
                    }
                }, 3000);
                for (i = 0; i < 4; i++) {
                    document.getElementById("guess" + guess + "char" + i).innerHTML = "";
                }
            }
        }
    }
}

guess = 0;
string = "";
finished = false;
console.log(words);
date = new Date("2/7/22");
seed = date.getDate() + "" + date.getMonth() + "" + date.getFullYear();
for (let i = 0; i < 1024; i++) {
    seed = String(seed * seed).substring(3, 6);
}
target = words[seed % words.length];