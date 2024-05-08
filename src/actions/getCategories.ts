'use server';
export async function getCategories() {
  const baseUrl = process.env.BASE_URL;
  try {
    const res = await fetch(`${baseUrl}/v1/categories/list`);
    const categories = await res.json();
    // console.log(categories);
    return categories;
  } catch (error) {
    console.log(error);
  }
}
