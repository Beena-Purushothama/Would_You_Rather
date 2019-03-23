export const formatQuestion = (question, user) => {
    return ({
        ...question,
        userName : user ?user.name: "",
        avatar: user ? user.avatarURL:""
    })
}