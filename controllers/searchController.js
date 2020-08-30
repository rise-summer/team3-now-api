import Article from "../models/Article.js"

export const search = async (req, res) => {
    console.log(req.query);
    const term = req.query.term;
    await Article.find({
        $text: {
            $search: term
        }
    }).catch(e => console.error(e));
}