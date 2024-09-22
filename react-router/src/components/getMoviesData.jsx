 const getMoviesData = async () => {
    const res = await fetch("https://api.escuelajs.co/api/v1/products");
    const data = await res.json();
    return data;
}
export default getMoviesData