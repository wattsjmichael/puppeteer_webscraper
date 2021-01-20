require("dotenv").config();

const pageURL = "http://ppgcc.posgrad.ufsc.br/cursos/";
const mongoURI = process.env.MONGOURI;

module.exports = {
  pageURL,
  mongoURI
}