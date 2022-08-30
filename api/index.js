import axios from "axios";

const api_key = "a7b98802de709a9e60cd491e7549b81b";

export const getNews = () =>
  axios.get(
    `http://api.mediastack.com/v1/news?access_key=${api_key}&languages=en&limit=100`
  );

export const getNewsByCategory = (category) =>
  axios.get(
    `http://api.mediastack.com/v1/news?access_key=${api_key}&languages=en&categories=${category}`
  );

export const fetchGoogleUserInfo = (token) =>
  axios.get("https://www.googleapis.com/oauth2/v2/userinfo", {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });


export const fetchFacebookUserInfo = (token) =>
  axios.get(
    `https://graph.facebook.com/v2.9/me?access_token=${token}&fields=id,name,email,picture.width(720).height(720)`
  );
