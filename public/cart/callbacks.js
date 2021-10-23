export const cartResponse = (responseText) => {
  const prodArray = JSON.parse(responseText);
  renderProdArray(prodArray);
};