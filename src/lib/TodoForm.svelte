<script lang="ts">
  import type { Todo } from "../types";
  import { capitalizeStr } from "./utils";
  import { todos, addTodo } from "./shared.svelte";
  
  let newIdx = $state(todos.length > 0 ? todos[0].id + 1 : 1)

  let taskInput = $state("")

  const add = (event: SubmitEvent) => {

    event.preventDefault()

    const trimed = taskInput.trim()

    if(trimed) {

      const objToAdd: Todo = {
        id: newIdx,
        title: capitalizeStr(trimed),
        completed: false
      }
      
      addTodo(objToAdd)

      taskInput = ""
      newIdx = objToAdd.id + 1

      console.log(todos)
    }
  }
</script>

<div id="container">
  <form onsubmit={add}>
    <input 
      type="text" 
      bind:value={taskInput} 
      placeholder="Escribe un nuevo to-do"
    />

    <button
      type="submit"
    >
      ➕
    </button>
  </form>
</div>

<style>
  #container {
    width: 80%;
  }

  form {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }

  input {
    width: 80%;
    padding: 12px 16px;
    border-radius: 16px;
    border: none;
  }

  button {
    border-radius: 50%;
    width: 45px;
    height: 45px;
    border: none;
  }
</style>