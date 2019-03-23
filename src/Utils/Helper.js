export const formatQuestion = (question, user) => {
    console.log("quesss",question)
    return ({
        ...question,
        userName : user ?user.name: "",
        avatar: user ? user.avatarURL:""
    })
}