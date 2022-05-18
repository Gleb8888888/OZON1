const getData = () => {
  //console.log(str);
  return fetch(
    "https://test-b7d0a-default-rtdb.firebaseio.com/goods.json"
  ).then((response) => {
    return response.json();
  });
};
export default getData;
