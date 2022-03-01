let COUNT = 0
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
  li.textContent = task
  li.setAttribute('id', `todo-${COUNT}`)
  // delete button
  let btn = document.createElement(`button`)
  btn.addEventListener('click', manageDelete);
  btn.textContent = " X ";
  li.appendChild(btn);

  //dropDown button
  const propObj = {
    "High Priority": "red",
    "Medium Priority": "yellow",
    "Low Priority": "green"
  }

  let dropDown = document.createElement(`select`);

  for (const prop in propObj) {
    let option = document.createElement(`option`);
    option.textContent = prop;
    option.setAttribute('value', propObj[prop])
    console.log('Prop is', prop);
    dropDown.appendChild(option);
  }

  dropDown.addEventListener('change', (e) => {
    console.log('Value is', e.target.value)
    e.target.parentNode.style.color = e.target.value;
    console.log(`Dropdown working!`);
  })
  li.appendChild(dropDown)
  COUNT++

  document.getElementById(`tasks`).appendChild(li)
}

