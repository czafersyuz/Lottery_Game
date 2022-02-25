let enter = document.getElementById("enter");
let result = document.getElementById("result");
let number = document.getElementById("number");

enter.addEventListener("click", () => {
    if (Number(number.value) < 1 || Number(number.value) > 8 ) {
        result.innerHTML = "Please enter a number between 1 to 8";
        number.value = ""
    } else {
        count = 0
        while (number.value > count) {
            listNumber = [];
            while (listNumber.length < 6) {
                let randomNumber = Math.floor(Math.random() * 90)+1
                if (listNumber.includes(randomNumber)) { continue; }
                else { listNumber.push(randomNumber) }
            }
            listNumberSeven = [];
            let randomNumber = Math.floor(Math.random() * 90)+1
            if (listNumber.includes(randomNumber)) { continue; }
            else { listNumberSeven.push(randomNumber) }

            let randomNumber8 = Math.floor(Math.random() * 90)+1
            listNumberSeven.push(randomNumber8);
            count += 1
            result.innerHTML += listNumber.sort(function (a, b) { return a - b }).join(" , ") + " | " + listNumberSeven.join(" | ") + "<hr>"
        }
        number.value = ""
    }
    
    number.addEventListener("change", () => {
        result.innerHTML = ""
    })
})