export const votar = (numero) => 
  fetch(`http://localhost:8080/votes/${numero}`, {
    method: "post",
  });
  
export const votarBranco = () =>
  fetch(`http://localhost:8080/votes/0`, {
    method: "post",
  });

export const fetchVotos = async () => {
  const request = await fetch(`http://localhost:8080/votes`);
  const response = await request.json();

  return response;
}
