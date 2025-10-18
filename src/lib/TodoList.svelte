<script lang="ts">
  import { todos, deleteCompletedTodos } from "./shared.svelte";
  import TodoListItem from "./TodoListItem.svelte";

  const finalTodos = $derived(todos.filter(t => !t.completed))
  const completedTodos = $derived(todos.filter(t => t.completed))

  let completedClosed = $state(true)

  const confirmDelete = () => {
    const resp = confirm("Confirma la eliminación de todas las tareas completadas");

    if(resp) {
      deleteCompletedTodos()
    }
  }

  const toggleCompletedSection = () => {
    const val = completedClosed
    console.log(val, 'val')
    completedClosed = !val
  }

  let isNothingCompleted = $derived(completedTodos.length === 0)
</script>

<div id="container">
  {#if finalTodos.length !== 0}
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
    {#if finalTodos.length === 0}
      <div id="no-tasks">
        <h2>
          No hay tareas pendientes ✅
        </h2>
      </div>
    {:else}
      {#each finalTodos as task}
        <TodoListItem task={task} />
      {/each}
    {/if}
  </ul>
  <ul>
    {#if completedTodos.length > 0}
      <div
        id="completed-header"
      >
        <h3>
          To do's completados
        </h3>

        <button
          onclick={toggleCompletedSection}
        >
          { completedClosed ? '+' : '-' }
        </button>
      </div>
      {#if !completedClosed}
        {#each completedTodos as task}
        <TodoListItem task={task} />
        {/each}
      {/if}
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
    margin: 40px auto;
  }

  h2 {
    text-align: center;
    font-size: 1.5rem;
    color: #ddd;
  }

  #clean-container, #completed-header {
    text-align: center;
    position: sticky;
    top: 0;
    background-color: #444;
  }

  #completed-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  #completed-header > h3, #completed-header > button {
    padding: 10px 20px;
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