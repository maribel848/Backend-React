const users = [
    {
        id: 1,
        name: "Mary",
        emal: "marialvara@gmail.com",
        passaward: "54321"
    }
];
const getAllusers = () => {
    return users;
};
const getUsers = (id) => {
    return users.find((users) => users.id === id);
}
const createUser = (email, password) => {
    const searchUser = users.find((users) => users.email ===email);
    if (searchUser) {
        return false;
    }

    const newUser = {
        id: users[users.length - 1].id + 1,
        name: "",
        email,
        password
    };

    users.push(newUser);
    return true;
};

module.exports = {
    getUsers,
    createUser,
    getAllusers,
};