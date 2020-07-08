
export async function handleResponse(response) {
  //console.log(response);
  if (response.status === 200) return response.data;
  throw new Error('Network response was not ok.');
}

export function handleError(error) {
  console.log(error);
  console.error('API call failed. ' + error);
  throw error;
}
