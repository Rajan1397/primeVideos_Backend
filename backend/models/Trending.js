/*
const API_KEY = "cd1b752287267fcdd91d7693d2fb5336";

const userrequests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchComedyMovies: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchRomanceMovies: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
};
*/
const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String },
    img: { type: String },
    imgTitle: { type: String },
    imgSm: { type: String },
    trailer: { type: String },
    video: { type: String },
    year: { type: String },
    limit: { type: Number },
    genre: { type: String },
    isSeries: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Movie", MovieSchema);
