# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# Opdracht 08 — Simple To-Do (React)

## Denken in Code — de 6 stappen toegepast

<!-- ### 1) Wat moet ik maken?
Een eenvoudige To-Do applicatie waarin een gebruiker:
- een To-Do kan invoeren in een inputveld,
- met een knop dat item toevoegt aan de lijst,
- en de lijst met To-Do’s onder het formulier ziet verschijnen.
(Verwijderen/afvinken is niet nodig.)

### 2) Welke componenten heb ik nodig?
- `App.jsx` — rootcomponent, houdt state van alle To-Do’s.
- `TodoForm.jsx` — input + knop; voegt nieuwe To-Do toe via props.
- `TodoList.jsx` — rendert de array van To-Do’s.
- `TodoItem.jsx` — één To-Do-bericht (presentatiecomponent).

### 3) Welke state heb ik nodig?
- `todos` (in `App.jsx`) — array van strings (of objecten met id+text).
- `input` (in `TodoForm.jsx`) — lokale state voor het controleerbare inputveld.

### 4) Wat is de flow?
1. `App.jsx` bevat `todos` en `setTodos`.
2. `App.jsx` geeft `todos` en `setTodos` (of een `addTodo` functie) door aan `TodoForm` en `TodoList`.
3. In `TodoForm` vult gebruiker tekst in; bij submit roept het `addTodo` aan.
4. `addTodo` voegt nieuw item toe aan `todos` (bijv. `[{id, text}, ...]`).
5. `TodoList` rendert `todos.map(...)`, ieder via `TodoItem`.

### 5) Pseudo-code

"App:
todos, setTodos = useState([])
function addTodo(text):
setTodos(prev => [...prev, { id: Date.now(), text }])

return:
<TodoForm onAdd={addTodo} />
<TodoList todos={todos} />

TodoForm:
input, setInput = useState("")
handleSubmit:
preventDefault()
if input.trim() === "" return
onAdd(input)
setInput("")

TodoList:
render todos.map(todo => <TodoItem key=todo.id text=todo.text />)

TodoItem:
render <li>{text}</li>* -->


### 6) De 3-check
1. Werkt het toevoegen van een To-Do? → Ja/noem teststappen.
2. Wordt input geleegd na toevoegen? → Ja.
3. Staan items zichtbaar in de lijst? → Ja.