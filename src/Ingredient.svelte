<script>
  import { fade } from "svelte/transition";
  export let label;
  export let amount;
  export let unit;
  import { portion } from "./stores.js";
  import { fractionize } from "./utils.js";

  $: portionedAmount = amount * $portion;
  $: fractionAmount = fractionize(portionedAmount);
</script>

<span class="item"
  >{#key $portion}
    <span class="amount" in:fade>{@html fractionAmount} {unit}</span>{/key} of
  <span class="ingredient">{label}</span></span
>

<style>
  .amount {
    font-weight: bold;
  }

  .item {
    border-bottom: 2px solid wheat;
  }

  .ingredient {
    background: wheat;
    border-radius: 2px;
    padding: 2px;
  }
</style>
