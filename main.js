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
                document.getElementById("guess" + guess + "char" + i).innerHTML = string[i];
            }
        }
        if (string.length == 4) {
            if (string === target) {
                console.log("win");
                for (i = 0; i < 4; i++) {
                    document.getElementById("guess" + guess + "char" + i).style.backgroundColor = "#55FF55";
                }
                finished = true;
            } else if (words.includes(string)) {
                temp = target.split("");
                string = string.split("");
                for (i = 0; i < 4; i++) {
                    if (string[i]===target[i]) {
                        console.log(i);
                        document.getElementById("guess" + guess + "char" + i).style.backgroundColor = "#55FF55";
                        string[i]=" ";
                        temp[i]=" ";
                    }
                }
                for (i = 0; i < 4; i++) {
                    if (string[i] != " ") {
                        if (temp.includes(string[i])) {
                            document.getElementById("guess" + guess + "char" + i).style.backgroundColor = "#FFFF00";
                            temp[temp.indexOf(string[i])] = " ";
                            string[i] = " ";
                        }
                    }
                }
                console.log(string,temp);
                string = "";
                guess += 1;
                if (guess == 5) {
                    finished = true;
                    final();
                }
            } else {
                string = "";
                for (i = 0; i < 4; i++) {
                    document.getElementById("guess" + guess + "char" + i).innerHTML = "";
                }
            }
        }
    }
}

final = () => {

}

guess = 0;
string = "";
finished = false;
console.log(words);
target = "MOLI";