<script lang="ts">
  import Normalize from "./Normalize.svelte";
  import WrittenQuiz from "./WrittenQuiz.svelte";
</script>

<Normalize />
<main>
  <WrittenQuiz />
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
</style>
