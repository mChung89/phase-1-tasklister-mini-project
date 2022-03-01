// Old Code

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(`form`).addEventListener('submit', (e) => {
    e.preventDefault();
    manageToDo(e.target["new-task-description"].value)
    document.querySelector(`form`).reset()
  }
  )
}
)
function manageDelete(e) {
  e.target.parentNode.remove()
}

function manageToDo(task) {
  let li = document.createElement(`li`)
  li.textContent = `   ${task}`
  // delete button
  let btn = document.createElement(`button`)
  btn.addEventListener('click', manageDelete);
  btn.textContent = " X ";
  li.appendChild(btn);

  //dropDown button
  let dropDown = document.createElement(`select`);

  const propObj = {
    "High Priority": "red",
    "Medium Priority": "yellow",
    "Low Priority": "green"
  }

  //    PREVIOUS SOLUTION                 !!!!!!
  for (const prop in propObj) {
    let option = document.createElement(`option`);
    option.textContent = prop;
    console.log(option);

    let targetColor =propObj[prop];
    dropDown.addEventListener('change', (e) => {
      e.target.parentNode.style.color = targetColor;
      console.log(`Dropdown working!`);
    })
    dropDown.appendChild(option);
  }
  li.appendChild(dropDown)

  ///  Working on

  // for (const prop in propObj) {
  //   let option = document.createElement(`option`);
  //   option.textContent = prop;
  //   dropDown.addEventListener('change', (e) => {
  //     if (e.target.value === "High Priority") {
  //       e.target.parentNode.style.color = "red"
  //     }
  //     if (e.target.value === "Medium Priority") {
  //       e.target.parentNode.style.color = "yellow"
  //     }
  //     if (e.target.value === "Low Priority") {
  //       e.target.parentNode.style.color = "green"
  //     }
  //     console.log(`Dropdown working!`);
    // })
  //   dropDown.appendChild(option);
  // }
  // li.appendChild(dropDown)
  // for(i=0;i < 3; i++) {
  //   let option = document.createElement(`option`);
  //   option.textContent = prio[i];
  //   dropDown.addEventListener('click', (e) => {
  //     let targetColor = colors[i];
  //     e.target.parentNode.style.color = targetColor
  //     console.log(e.target.parentNode.style.color);
  //   })
  // }


  // function changeColor (e) {
  //   e.target.parentNode.style.color = colors[i]
  // console.log(e.target.parentNode.parentNode.value)

  document.getElementById(`tasks`).appendChild(li)
}

