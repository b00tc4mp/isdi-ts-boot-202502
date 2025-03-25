const input = document.getElementById('todo-text')! as HTMLInputElement
const form = document.querySelector('.todo-form')! as HTMLFormElement
const ul = document.querySelector('.todo-list')! as HTMLUListElement

type Todo = {
  text: string
  isCompleted: boolean
}

const todos: Todo[] = getTodos()
todos.forEach(renderTodo)

form.addEventListener('submit', (event: SubmitEvent) => {
  event.preventDefault()

  const { value: todoText } = input

  try {
    const todo = createTodo(todoText)
    todos.push(todo)
    saveTodos()

    form.reset()
    todos.forEach(renderTodo)
  } catch (error) {
    alert((error as Error).message)
    console.error((error as Error).message)
  }
})

function createTodo(text: string): Todo {
  if (!text) throw new Error('El input está vacío')
  return {
    text,
    isCompleted: false,
  }
}

function renderTodo(todo: Todo, index: number) {
  const li = document.createElement('li')
  li.textContent = todo.text

  // Checkbox para marcar completado
  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  checkbox.checked = todo.isCompleted
  checkbox.addEventListener('change', () => {
    todo.isCompleted = checkbox.checked
    saveTodos()
  })

  // Botón de editar
  const editButton = document.createElement('button')
  editButton.textContent = '✏️'
  editButton.addEventListener('click', () => editTodo(index))

  // Botón de eliminar
  const deleteButton = document.createElement('button')
  deleteButton.textContent = '🗑️'
  deleteButton.addEventListener('click', () => deleteTodo(index))

  li.appendChild(checkbox)
  li.appendChild(editButton)
  li.appendChild(deleteButton)
  ul.appendChild(li)
}

function editTodo(index: number) {
  const newText = prompt('Edita tu tarea:', todos[index].text)
  if (newText !== null && newText.trim() !== '') {
    todos[index].text = newText.trim()
    saveAndRender()
  }
}

function deleteTodo(index: number) {
  todos.splice(index, 1)
  saveAndRender()
}

function saveAndRender() {
  saveTodos()
  ul.innerHTML = '' // Limpiar la lista antes de renderizar
  todos.forEach(renderTodo)
}

function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos))
}

function getTodos(): Todo[] {
  return JSON.parse(localStorage.getItem('todos') || '[]')
}
