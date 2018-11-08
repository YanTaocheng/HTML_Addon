/*
Just draw a border round the document.body.
*/
function modify (type, choice) {
    var poem = document.getElementsByTagName("td")
    var input = document.getElementsByTagName("input")
    input[12 + choice*50].value = type + "/" + poem[1 + choice*12].innerHTML.slice(17,-12)

}

function add_button(choice){
    var poem1 = document.getElementsByTagName("td")[4+choice*12]
    var delete1 = document.createElement("button")
    delete1.innerHTML = "删"
    delete1.onclick = function(){modify("删", choice)}

    poem1.appendChild(document.createElement("br"))
    poem1.appendChild(delete1)

    var modify1 = document.createElement("button")
    modify1.innerHTML = "改"
    modify1.onclick = function () {modify("改", choice)}
    poem1.appendChild(document.createElement("br"))
    poem1.appendChild(modify1)

    var error1 = document.createElement("button")
    error1.innerHTML = "错"
    error1.onclick = function () {modify("错", choice)}
    poem1.appendChild(document.createElement("br"))
    poem1.appendChild(error1)

    var add1 = document.createElement("button")
    add1.innerHTML = "添"
    add1.onclick = function () {modify("添", choice)}
    poem1.appendChild(add1)
}

add_button(0)
add_button(1)
add_button(2)
add_button(3)
add_button(4)

