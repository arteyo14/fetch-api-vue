const URL = "https://randomuser.me/api/?results=24";

const getData = async (setData) => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    setData.value = await data.results;
  } catch (error) {
    console.log(error);
  }
};

export default getData;
