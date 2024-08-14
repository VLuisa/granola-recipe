<script>
  import Ingredient from "./Ingredient.svelte";
  export let ingredients;

  let ing_objs = Object.entries(ingredients);
  let ings = [];
  ing_objs.forEach((i) => {
    ings.push(i[1]);
  });
</script>

<ul>
  {#each ings as ingredient}
    <li><Ingredient {...ingredient} /></li>
  {/each}
</ul>

<style>
  ul {
    line-height: 2em;
  }
</style>
