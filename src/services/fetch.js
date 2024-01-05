import axios from "axios";

export const getCoordinates = async (city) => {
  const options = {
    method: "GET",
    url: "https://forward-reverse-geocoding.p.rapidapi.com/v1/forward",
    params: {
      city: city,
    },
    headers: {
      "X-RapidAPI-Key": "0561863ecdmsha19dc02207be928p1f1a09jsn4563bc2d6a3e",
      "X-RapidAPI-Host": "forward-reverse-geocoding.p.rapidapi.com",
    },
  };

  try {
    const response = await axios(options);
    // console.log(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
};
