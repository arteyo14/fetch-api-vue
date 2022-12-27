import axios from "axios";
const URL = "https://randomuser.me/api/?results=24";

const getData = async (setData) => {
  try {
    const response = await axios.get(URL);
    const newData = response.data;
    setData.value = [...newData.results];
  } catch (error) {
    console.log(error);
  }
};

export default getData;
