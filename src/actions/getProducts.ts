export async function getProducts(url: string) {
    const response = await fetch(
      url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    if (!response.ok) {
      throw new Error('Failed to fetch');
    }
    else {
     return await response.json();
    }
  }