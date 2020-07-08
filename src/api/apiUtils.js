export async function handleResponse(response) {
  console.log(response);
  if (response.status === 200) return response.data;
  if (response.status === 400) {
    const error = await response.text();
    throw new Error(error);
  }
  throw new Error('Network response was not ok.');
}

export function handleError(error) {
  console.log(error);
  console.error('API call failed. ' + error);
  throw error;
}
