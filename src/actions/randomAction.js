export const getRandom = () => async dispatch => {
    const response = await fetch("https://www.random.org/integers/?num=1&min=1&max=1000&col=1&base=10&format=plain&rnd=new");
    const resultat = await response.json();
    console.log("random :" , resultat);
    dispatch({
        type: "GET",
        payload: resultat
    });
}