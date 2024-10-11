<script>
  export let data;

  const title = data.title;
  const product = data.product;
</script>

<h1>{title}</h1>

<div>
  <h2>{product.title}</h2>
  <h3>{product.price}</h3>
  <p>{product.description}</p>
</div>
