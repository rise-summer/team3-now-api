import Article from "../models/Article.js"

export const search = async (req, res) => {
    var regex = new RegExp(req.params.term, "i");
  await Article.find({ term: regex }) 
    .then((data) => {
      res.status(200).json(data); 
      console.log(data);
    }).catch(e => console.error(e));
}