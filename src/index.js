import "./styles.css"
import Icon from "./bg.jpg"

function component() {
  const wrapper = document.createElement("div")
  wrapper.classList.add("flexcontainer")
  const element = document.createElement("p")

  element.innerHTML = "Github Trends"
  element.classList.add("content")

  wrapper.appendChild(element)

  const myIcon = new Image()
  myIcon.src = Icon
  // wrapper.appendChild(myIcon)
  return wrapper
}

document.body.appendChild(component())
