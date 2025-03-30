<script lang="ts">
  import { todos, deleteCompletedTodos } from "./shared.svelte";
  import TodoListItem from "./TodoListItem.svelte";

  const confirmDelete = () => {
    const resp = confirm("Confirma la eliminación de todas las tareas completadas");

    if(resp) {
      deleteCompletedTodos()
    }
  }
</script>

<div id="container">
  <div id="clean-container">
    <button
      onclick={confirmDelete}
    >
      Eliminar completados 🚮
    </button>
  </div>
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
    height: 76.3vh;
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
    color: #000000;
  }

  #clean-container {
    text-align: center;
  }

  button {
    border: none;
    padding: 8px 18px;
    margin-top: 3px;
    background-color: salmon;
    font-weight: bold;
  }
</style>