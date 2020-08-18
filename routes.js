const HOME = "/";
const SEARCH = "/search";

//user
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

//article
const ARTICLE_DETAIL = "/:id";
const EDIT_ARTICLE = "/:id/edit";
const DELETE_ARTICLE = "/:id/delete";

//thread
const ADD_RESOURCE = "/resource/add" //id will the threadID

const routes = {
    home: HOME,
    search: SEARCH,
    userDetail: USER_DETAIL,
    editProfile: EDIT_PROFILE,
    changePassword: CHANGE_PASSWORD,
    articleDetail: ARTICLE_DETAIL,
    editArticle: EDIT_ARTICLE,
    deleteArticle: DELETE_ARTICLE,
    addResource: ADD_RESOURCE
}

export default routes;