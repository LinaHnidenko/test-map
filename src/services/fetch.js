import axios from "axios";

const options = {
  method: "GET",
  url: "https://forward-reverse-geocoding.p.rapidapi.com/v1/forward",
  params: {
    city: "",
  },
  headers: {
    "X-RapidAPI-Key": "0561863ecdmsha19dc02207be928p1f1a09jsn4563bc2d6a3e",
    "X-RapidAPI-Host": "forward-reverse-geocoding.p.rapidapi.com",
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}
