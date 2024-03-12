import axios from "axios";

const articlesApi = axios.create({
  baseURL: "https://nc-news-1-ukr6.onrender.com/api",
});

export const fetchArticles = () => {
  return articlesApi.get("/articles").then((response) => {
    return response.data;
  });
};

  export const fetchArticlesById = (article_id) => {
    return articlesApi.get(`/articles/${article_id}`).then((response) => {
      return response.data;
    });
  };


  export const fetchAllComments = (article_id) => {
    return articlesApi.get(`/articles/${article_id}/comments`).then((response) => {
      return response.data;
    })
  }