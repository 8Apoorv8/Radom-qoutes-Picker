


let data = ""
const textQ = document.getElementById("Text")
const BY = document.getElementById("by")
const BTN = document.getElementById("btn")


const getNewQOUTES = () => {
    const randomNumber = Math.floor(Math.random() * 1644)
    console.log(data[randomNumber]);
    textQ.innerText = data[randomNumber].text
    data[randomNumber].author === null ? BY.innerText = "UnKnown" : BY.innerText = data[randomNumber].author


}
BTN.addEventListener("click", getNewQOUTES)
const qoutes = async () => {
    try {
        const Qt = await fetch("https://type.fit/api/quotes")
        data = await Qt.json()
        // console.log(data.length);
        // console.log(data[0].author);
        getNewQOUTES()
    } catch (error) {
        console.log(error);
    }

    console.log(Qt)
}
qoutes()
