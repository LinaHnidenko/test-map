import axios from "axios";

export const MOCK_API_URL =
  "https://65986474668d248edf248d11.mockapi.io/advertisement";

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

    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getAdsInfo = async () => {
  const data = await axios.get(MOCK_API_URL);
  return data;
};
