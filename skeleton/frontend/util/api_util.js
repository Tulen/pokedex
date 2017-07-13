export const fetchAllPokemon = () => (
  $.ajax({
    method: 'GET',
    url: '/api/pokemon'
  })
);

export const fetchSinglePokemon = (id) => {
 console.log("ID:", id);
 return  $.ajax({
    method: 'GET',
    url: `/api/pokemon/${id}`
  });
};
