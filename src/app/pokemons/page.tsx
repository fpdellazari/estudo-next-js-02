export default async function Page() {

  const { results } = await getData();

  return (
    <>
      <h1>Pokemons</h1>
      <ul>
        {
          results.map((pk: any) => (<li>{pk.name}</li>))
        }
      </ul>
    </>
  );
}

async function getData() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon-species/");
  return response.json();
}