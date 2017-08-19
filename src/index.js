import "./styles.css"
import Icon from "./bg.jpg"

function component() {
  var wrapper = document.createElement("div")
  wrapper.classList.add("flexcontainer")
  var element = document.createElement("p")
  element.innerHTML = "Github Trends"
  element.classList.add("content")
  wrapper.appendChild(element)

  var myIcon = new Image();
  myIcon.src = Icon

  // wrapper.appendChild(myIcon)
  return wrapper
}

document.body.appendChild(component())
