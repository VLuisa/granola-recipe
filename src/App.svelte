<script>
  import Ingredient from "./Ingredient.svelte";
  import Instructions from "./Instructions.svelte";
  import Ingredients from "./Ingredients.svelte";
  import { portion } from "./stores.js";

  const ingredients = {
    oats: {
      label: "Oats",
      amount: 3.5,
      unit: "cup",
    },
    wheat_germ: {
      label: "Wheat germ",
      amount: 0.5,
      unit: "cup",
    },
    maple_syrup: {
      label: "Maple syrup",
      amount: 0.5,
      unit: "cup",
    },
    almonds: {
      label: "Almonds, sliced",
      amount: 0.5,
      unit: "cup",
    },
    pecan_walnuts: {
      label: "Pecans or walnuts, roughly chopped",
      amount: 0.5,
      unit: "cup",
    },
    sunflower_seeds: {
      label: "Sunflower seeds",
      amount: 0.5,
      unit: "cup",
    },
    oil: {
      label: "Vegetable oil",
      amount: 0.25,
      unit: "cup",
    },
    salt: {
      label: "Salt",
      amount: 0.25,
      unit: "teaspoon",
    },
    vanilla: {
      label: "Vanilla extract",
      amount: 0.5,
      unit: "tablespoon",
    },
    raisins: {
      label: "Raisins",
      amount: 0.5,
      unit: "cup",
    },
    golden_raisins: {
      label: "Golden raisins",
      amount: 0.5,
      unit: "cup",
    },
    cranberries: {
      label: "Cranberries",
      amount: 0.5,
      unit: "cup",
    },
    apricots: {
      label: "Apricots, diced",
      amount: 0.5,
      unit: "cup",
    },
  };
</script>

<main>
  <h1>The Best Granola Recipe</h1>
  <label>
    Number of large sheet trays: <input
      class="slider"
      type="range"
      bind:value={$portion}
      min="0.5"
      max="3"
      step="0.5"
    />
    {$portion}x</label
  >
  <Instructions {ingredients} />
  <details>
    <summary>Shopping list</summary>
    <Ingredients {ingredients} />
  </details>
  <p>
    This app uses the <a
      href="https://www.kingarthurbaking.com/recipes/crunchy-granola-recipe"
      >Crunchy Granola</a
    > recipe from King Arthur Flour with some small tweaks.
  </p>
  <p></p>
</main>

<style>
  main {
    margin: 0;
    padding: 0;
    font-family: "Helvetica", sans-serif;
    max-width: 600px;
  }

  .slider {
    -webkit-appearance: none;
    background: transparent;
    cursor: pointer;
    background: Black;
    height: 0.3rem;
    border-radius: 5px;
  }

  input[type="range"]::-webkit-slider-thumb {
    background-color: blue;
    appearance: none;
    background-color: rgb(244, 206, 135);
    border-radius: 100px;
    height: 1.2rem;
    width: 1.2rem;
  }
</style>
