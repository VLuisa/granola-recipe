<script>
  export let label;
  export let amount;
  export let unit;
  import { portion } from "./stores.js";
  import { fractionize } from "./utils.js";

  $: portionedAmount = amount * $portion;
  $: fractionAmount = fractionize(portionedAmount);
</script>

<span class="item"
  ><span class="amount">{@html fractionAmount} {unit}</span> of
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
