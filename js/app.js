

(() => {
  "use strict";

 
  const form = document.getElementById("task-form");
  const input = document.getElementById("task-input");
  const list = document.getElementById("task-list");
  const msg = document.getElementById("msg");
  const year = document.getElementById("year");

  
  const STORAGE_KEY = "todo:tasks";
  let tasks = [];

  function loadTasks() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const data = raw ? JSON.parse(raw) : [];
      tasks = Array.isArray(data) ? data : [];
    } catch (_) {
      tasks = []; 
    }
  }

  function saveTasks() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }

 
  function renderTasks() {
    list.innerHTML = "";
    const frag = document.createDocumentFragment();

    for (const task of tasks) {
      const li = document.createElement("li");
      li.className = "task-item";
      li.dataset.id = String(task.id);

      
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "task-check";
      checkbox.checked = Boolean(task.completed);
      checkbox.id = `chk-${task.id}`;
      checkbox.setAttribute("aria-label", "Marcar como concluída");

      
      const label = document.createElement("label");
      label.setAttribute("for", checkbox.id);
      const p = document.createElement("p");
      p.className = "task-text" + (task.completed ? " completed" : "");
      p.textContent = task.text;
      label.appendChild(p);

     
      const delBtn = document.createElement("button");
      delBtn.type = "button";
      delBtn.className = "btn-del";
      delBtn.textContent = "Excluir";
      delBtn.title = "Excluir tarefa";
      delBtn.setAttribute("aria-label", "Excluir tarefa");

      
      li.appendChild(checkbox);
      li.appendChild(label);
      li.appendChild(delBtn);
      frag.appendChild(li);
    }

    list.appendChild(frag);
  }

  
  function addTask(text) {
    const trimmed = text.trim();
    if (!trimmed) {
      showMessage("Digite uma tarefa antes de adicionar.");
      return;
    }
    const task = {
      id: Date.now(), 
      text: trimmed,
      completed: false,
    };
    tasks.push(task);
    saveTasks();
    renderTasks();
    input.value = "";
    input.focus();
    showMessage(""); 
  }

  function toggleTask(id) {
    let changed = false;
    tasks = tasks.map((t) => {
      if (t.id === id) {
        changed = true;
        return { ...t, completed: !t.completed };
      }
      return t;
    });
    if (changed) {
      saveTasks();
      renderTasks();
    }
  }

  function deleteTask(id) {
    const sizeBefore = tasks.length;
    tasks = tasks.filter((t) => t.id !== id);
    if (tasks.length !== sizeBefore) {
      saveTasks();
      renderTasks();
    }
  }

  
  function showMessage(text) {
    msg.textContent = text;
  }

  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    addTask(input.value);
  });

  
  list.addEventListener("change", (e) => {
    const target = e.target;
    if (target && target.matches("input[type='checkbox'].task-check")) {
      const li = target.closest(".task-item");
      if (!li) return;
      const id = Number(li.dataset.id);
      toggleTask(id);
    }
  });

  list.addEventListener("click", (e) => {
    const target = e.target;
    if (target && target.matches("button.btn-del")) {
      const li = target.closest(".task-item");
      if (!li) return;
      const id = Number(li.dataset.id);
      deleteTask(id);
    }
  });

  
  (function init() {
    if (year) year.textContent = new Date().getFullYear();
    loadTasks();
    renderTasks();
  })();

  
  window.loadTasks = loadTasks;
  window.saveTasks = saveTasks;
  window.renderTasks = renderTasks;
  window.addTask = addTask;
  window.toggleTask = toggleTask;
  window.deleteTask = deleteTask;
})();

