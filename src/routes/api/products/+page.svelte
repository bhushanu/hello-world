<script>
  export let data;

  const products = data.products;
  const title = data.title;
</script>

<h1>{title}</h1>

{#each products as product}
  <div>
    <h2>{product.title}</h2>
    <h3>{product.price}</h3>
    <p>{product.description}</p>
    <hr />
  </div>
{/each}
