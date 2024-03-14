import axios from "axios";

const articlesApi = axios.create({
  baseURL: "https://nc-news-1-ukr6.onrender.com/api",
});

export const fetchArticles = (topicQuery) => {
  return articlesApi.get("/articles", {params: {topic : topicQuery}}).then((response) => {
    return response.data;
  });
};

export const fetchArticlesById = (article_id) => {
  return articlesApi.get(`/articles/${article_id}`).then((response) => {
    return response.data;
  });
};

export const fetchArticlesByTopic = (topic) => {
  return articlesApi.get(`/articles?topic=${topic}`).then((response) => {
    return response.data;
  })
}


export const fetchAllComments = (article_id) => {
  return articlesApi
    .get(`/articles/${article_id}/comments`)
    .then((response) => {
      return response.data;
    });
};

export const fetchAllTopics = () => {
  return articlesApi
    .get('/topics')
    .then((response) => {
      return response.data;
    });
};

export const patchArticle = (article_id, incVotes) => {
  const patchBody = {
    inc_votes: incVotes,
  };
  return articlesApi
    .patch(`articles/${article_id}`, patchBody)
    .then((response) => {
      return response;
    });
};

export const fetchAllUsers = () => {
  return articlesApi.get("/users").then((response) => {
    return response.data;
  });
};

export const postComment = (articleId, userName, writeComment) => {
  const postBody = {
    username: userName,
    body: writeComment,
  };
  return articlesApi
    .post(`/articles/${articleId}/comments`, postBody)
    .then((response) => {
      return response.data.newcomment[0];
    });
};

export const deleteComment = (commentId) => {
  return articlesApi.delete(`/comments/${commentId}`)
  .then((response) => {
    return response
  });
};


