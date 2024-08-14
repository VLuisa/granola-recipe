<script>
  import Ingredient from "./Ingredient.svelte";
  export let ingredients;
</script>

<div>
  <h3>Instructions</h3>
  <p>Preheat oven to 250°.</p>
  <ol class="instructions">
    <li>
      In a large bowl, mix together <Ingredient {...ingredients.oats} />, <Ingredient
        {...ingredients.wheat_germ}
      />, <Ingredient {...ingredients.almonds} />, <Ingredient
        {...ingredients.pecan_walnuts}
      />, and <Ingredient {...ingredients.sunflower_seeds} />. Mix well.
    </li>
    <li>
      In a medium bowl, whisk together <Ingredient {...ingredients.oil} />, <Ingredient
        {...ingredients.salt}
      />, <Ingredient {...ingredients.vanilla} />, and <Ingredient
        {...ingredients.maple_syrup}
      />.
    </li>
    <li>Pour wet ingredients into dry ingredients and stir/toss well.</li>
    <li>Place onto sheet.</li>
    <li>
      Spread granola onto baking sheet(s), splitting amongst baking sheets if
      necessary.
    </li>
    <li>
      Bake the granola for 90 minutes, stirring the granola every 30 minutes.
      Swap the baking sheets every time you stir.
    </li>
    <li>When the granola is golden brown take it out of the oven cool.</li>
    <li>
      Once cool, transfer to a bowl and add the dried fruit: <Ingredient
        {...ingredients.raisins}
      />, <Ingredient {...ingredients.golden_raisins} />, <Ingredient
        {...ingredients.cranberries}
      />, and <Ingredient {...ingredients.apricots} />.
    </li>
    <li>Toss granola with fruit in a large bowl.</li>
    <li>Transfer to airtight storage container or freeze.</li>
  </ol>
</div>

<style>
  .instructions {
    line-height: 1.8em;
  }
</style>
