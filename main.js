
let counter_up = document.getElementById("counter-up")
let counter_down = document.getElementById("counter-down")
let label = document.getElementById("label")
let count = 1

counter_up.addEventListener("click", () => {
  count += 1
  label.innerHTML = count
})
counter_down.addEventListener("click",() => ){
    count-=1
    label.innerHTML = count
}