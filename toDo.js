const taskinput = document.getElementById('task');
const addbutton = document.getElementById('addbtn');
const taskList = document.getElementById('tasklist');

let tasks = [];

function Addtask() {
  const value = taskinput.value.trim();
  if (value === '') return;

  // إضافة المهمة للـ array
  tasks.push(value);

  const li = document.createElement('li');
  li.dataset.index = tasks.length - 1;

  const span = document.createElement('span');
  span.innerText = value;

  const deletebtn = document.createElement('button');
  deletebtn.innerText = "❌";

  // Toggle done
  span.addEventListener('click', () => {
    span.style.textDecoration =
      span.style.textDecoration === "line-through"
        ? "none"
        : "line-through";
  });

  // Delete task
  deletebtn.addEventListener('click', () => {
    const index = li.dataset.index;
    tasks.splice(index, 1);
    taskList.removeChild(li);

    // تحديث dataset لكل li بعد حذف عنصر
    [...taskList.children].forEach((child, i) => {
      child.dataset.index = i;
    });
  });

  li.appendChild(span);
  li.appendChild(deletebtn);
  taskList.appendChild(li);

  taskinput.value = "";
}

// Click button
addbutton.addEventListener('click', Addtask);

// Enter key
taskinput.addEventListener('keydown', (e) => {
  if (e.key === "Enter") {
    Addtask();
  }
});
