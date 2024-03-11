import axios from "axios";

const articlesApi = axios.create({
  baseURL: "https://nc-news-1-ukr6.onrender.com/api",
});


export const fetchArticles = () => {
    return articlesApi.get("/articles").then((response) => {
      return response.data;
    });
  };