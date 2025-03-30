<script lang="ts">
  import { initializeTodos } from "./lib/shared.svelte";
  import TodoForm from "./lib/TodoForm.svelte";
  import TodoList from "./lib/TodoList.svelte";

  initializeTodos()

</script>

<main>
  <div id="head">
    <h1>
      Tus to-do's
    </h1>
    <TodoForm />
  </div>
  <TodoList />
</main>

<style>
  main {
    min-height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    margin: 5vh 0;
  }

  #head {
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 0;
    width: 90vw;
    background-color: #dfdfdf;
    margin: 10px;
    padding: 10px;
    border-radius: 20px;
    background-color: #60d394;
  }
</style>