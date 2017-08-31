import React from "react"
import ReactDom from "react-dom"
import "./styles.css"

function component() {
  const content = React.createElement(
    "p",
    { className: "content" },
    "Github Trends"
  )

  const app = React.createElement(
    "div",
    { className: "flexcontainer" },
    content
  )
  return app
}

ReactDom.render(component(), document.getElementById("root"))
