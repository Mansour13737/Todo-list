let showTodo = document.querySelector("#show-modal")
let modal = document.querySelector(".modal")
let close = document.querySelector("#close-todo-input")
let input = document.querySelector("input")
let inputValue = input.value
let container = document.querySelector(".container")
let addTodo = document.querySelector("#add-todo")
let statusSection = document.querySelector("#no-status")
let taskBox = document.querySelector(".task")
let taskClose = document.querySelectorAll("#task-close")
let taskDone = document.querySelectorAll("#task-done")
let notStartedSection = document.querySelector("#not-started")
let inProgressSection = document.querySelector("#in-progress")
let completed = document.querySelector("#completed")
let stepsBox = document.querySelectorAll(".steps")


taskBox.addEventListener("dragstart", function (event) {
    event.dataTransfer.setData("spanElem", event.target.id)
})
stepsBox.forEach(function (para) {
    para.addEventListener("dragover", function (event) {
        event.preventDefault()
    })
})
stepsBox.forEach(function (para) {
    para.addEventListener("drop", function (event) {
        let getBox = event.dataTransfer.getData("spanElem")
        let box = document.getElementById(getBox)
        event.target.appendChild(box)

    })
})
showTodo.addEventListener("click", function () {
    modal.style.display = "flex"
    container.style.filter = "blur(10px)"
    container.style.transitionDuration = "2s"
})
close.addEventListener("click", function () {
    modal.style.display = "none"
    container.style.filter = "blur(0px)"
    container.style.transitionDuration = "0.5s"
})
input.addEventListener("focus", function () {
    modal.style.backgroundColor = "rgba(214, 206, 147,0.7)"
    modal.style.transitionDuration = "3s"
})
addTodo.addEventListener("click", function () {
    let getTask = input.value
    let newDiv = taskBox.cloneNode(true)
    newDiv.querySelector("span").remove()
    console.log(newDiv);
    let newSpanElem = document.createElement("span")
    newSpanElem.innerHTML = getTask
    newDiv.appendChild(newSpanElem)
    statusSection.appendChild(newDiv)
    input.value = ""
    container.style.filter = "blur(0px)"
    container.style.transitionDuration = "0.5s"
    modal.style.filter = "blur(10px)"
    modal.style.opacity = "0.5"
    modal.style.transitionDuration = "0.5s"
    taskClose = document.querySelectorAll("#task-close")
    taskDone = document.querySelectorAll("#task-done")
    taskClose.forEach(function (para) {
        para.addEventListener("click", function (event) {
            event.target.parentElement.remove()
        })
    })
    taskDone.forEach(function (para) {
        para.addEventListener("click", function (event) {
            let toTransfer = event.target.parentElement
            let grandPa = event.target.parentElement.parentElement
            console.log(grandPa);
            grandPa.nextElementSibling.appendChild(toTransfer)
        })
    })
    setTimeout(function (para) {
        modal.style.filter = "blur(0px)"
        modal.style.opacity = "1"
        container.style.filter = "blur(10px)"
        container.style.transitionDuration = "2s"
    }, 700)
})
taskClose.forEach(function (para) {
    para.addEventListener("click", function (event) {
        event.target.parentElement.remove()
    })
})
taskDone.forEach(function (para) {
    para.addEventListener("click", function (event) {
        let toTransfer = event.target.parentElement
        let grandPa = event.target.parentElement.parentElement
        grandPa.nextElementSibling.appendChild(toTransfer)
    })
})