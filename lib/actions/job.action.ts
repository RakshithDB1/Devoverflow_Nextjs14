"use server";

export async function Jobactions() {
  const axios = require("axios");

  const options = {
    method: "GET",
    url: "https://jsearch.p.rapidapi.com/search",
    params: {
      query: "Python developer in Texas, USA",
      page: "1",
      num_pages: "1",
    },
    headers: {
      "X-RapidAPI-Key": `${process.env.RapidAPI_Key}`,
      "X-RapidAPI-Host": `${process.env.RapidAPI_Host}`,
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
