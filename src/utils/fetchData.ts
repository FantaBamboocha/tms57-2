import axios from "axios";

const fetchData = async <T>(url: string): Promise<T[]> => {
  try {
    const response = await axios(url);

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to fetch data from ${url}`);
  }
};

export default fetchData;
