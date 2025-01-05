
export const getDataEcho = async () => {
    const response = await fetch("https://catfact.ninja/fact");
    const data = await response.json();
    const { fact } = data;
    return fact;
  }