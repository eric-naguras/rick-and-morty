<script>
	import { query, graphql } from '$houdini';

	const { data } = query(graphql`
		query AllCharacters {
			characters {
				results {
					name
					id
					image
				}
			}
		}
	`);
</script>

<section class="page">
	<h1>The World of Rick and Morty</h1>
	<main>
		{#each $data.characters.results as character (character.id)}
			<section style={`background-image: url(${character.image})`}>
				<h2>{character.name}</h2>
			</section>
		{/each}
	</main>
  <p>This page is showing the result of the GraphQL query below:</p>
	<pre><code>
    query AllCharacters &#123 <br />
      characters &#123 <br />
        results &#123 <br />
          name <br />
          id <br />
          image <br />
        &#125 <br />
      &#125 <br />
    &#125 <br />
  </code></pre>
</section>

<style>
	h1,
	h2,
  p {
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	}

	main {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		grid-template-rows: repeat(4, 200px);
		row-gap: 10px;
		column-gap: 10px;
	}

	section {
		position: relative;
		background-size: cover;
	}

	h2 {
		display: none;
		position: absolute;
		bottom: 0px;
		margin: 0px;
		padding: 10px;
		background: rgba(255, 255, 255, 0.5);
		width: 100%;
		font-weight: bold;
	}

	section:hover > h2 {
		display: block;
	}

	.page {
		width: 1200px;
		margin: 10px auto;
	}
</style>
