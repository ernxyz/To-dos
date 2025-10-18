<script lang="ts">
  import { todos, deleteCompletedTodos } from "./shared.svelte";
  import TodoListItem from "./TodoListItem.svelte";

  const confirmDelete = () => {
    const resp = confirm("Confirma la eliminación de todas las tareas completadas");

    if(resp) {
      deleteCompletedTodos()
    }
  }

  let isNothingCompleted = $derived(!todos.some(todo => todo.completed))
</script>

<div id="container">
  {#if todos.length !== 0}
    <div id="clean-container">
      <button
        onclick={confirmDelete}
        disabled={isNothingCompleted}
        class:disabled={isNothingCompleted}
      >
        Eliminar completados 🚮
      </button>
    </div>
  {/if}
  <ul>
    {#if todos.length === 0}
      <div id="no-tasks">
        <h2>
          No hay tareas pendientes ✅
        </h2>
      </div>
    {:else}
      {#each todos as task}
        <TodoListItem task={task} />
      {/each}
    {/if}
  </ul>
</div>

<style>
  ul {
    list-style-type: none;
  }

  #container {
    padding-bottom: 2vh;
    scroll-behavior: auto;
    overflow-y: scroll;
    height: 74vh;
    width: 100vw;
    border-radius: 20px 20px 0 0;
  }

  #no-tasks {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;
  }

  h2 {
    text-align: center;
    font-size: 1.5rem;
    color: #ddd;
  }

  #clean-container {
    text-align: center;
    position: sticky;
    top: 0;
    background-color: #444;
  }

  button {
    border: none;
    padding: 14px 18px;
    margin-top: 3px;
    background-color: transparent;
    font-weight: bold;
    color: #fff;
  }

  .disabled {
    cursor: default;
    color: #888;
  }

  @media (prefers-color-scheme: light) {
    #clean-container {
      background-color: lightgray;
    }

    button {
      color: #000;
    }
  }
</style>