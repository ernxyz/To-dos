<script lang="ts">
  import { removeTodo, toggleTodo } from "./shared.svelte";

  let { task } = $props()

  const confirmDelete = (id: number) => {
    const resp = confirm("Confirma la eliminación de la tarea")

    if(resp) {
      removeTodo(id)
    }
  }
</script>

<li>
  <button
    onclick={() => confirmDelete(task.id)}
  >
    🗑️
  </button>
  <p
    style={`
      text-decoration: ${task.completed ? "line-through" : "none"}
    `}
  >
    {task.title}
  </p>
  <input 
    type="checkbox"
    onclick={() => toggleTodo(task.id)}
    bind:checked={task.completed}
  />
</li>

<style>
  li {
    padding: 10px 20px;
    min-height: 5vh;
    display: flex;
    justify-content: space-between;
    margin: 10px 15px;
    align-items: center;
    gap: 10px;
  }

  p {
    font-size: large;
    max-width: 75%;
    word-wrap: break-word;
    overflow-wrap: break-word;
    white-space: normal;
    flex: 1;
  }

  input {
    width: 25px;
    min-width: 25px;
    height: 25px;
    accent-color: #07c8f9;
  }

  button {
    min-width: 25px;
    min-height: 25px;
    border: none;
    background-color: transparent;
    font-size: 20px;
  }
</style>