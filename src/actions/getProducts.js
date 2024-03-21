'use server';

export const getProducts = () => {
  return fetch('https://marketplace-5ihn.onrender.com/api/v1/products/s/list', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error();
      }
      console.log(response);
      console.log('getProducts');
      // return response.json()
    })
    .then(data => {
      // console.log(data)
      return data;
    })
    .catch(error => {
      console.log(error.message);
    });
};
