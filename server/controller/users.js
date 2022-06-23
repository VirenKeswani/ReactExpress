import { v4 as uuid } from 'uuid';

let users =  [];


export const getUsers = (req, res) => {
    res.send(users);
}


export const createUser = (req, res) => {
    // const user = {
    //     id: uuid(),
    //     name: req.body.name,
    //     email: req.body.email,
    //     password: req.body.password
    // }
    const user = req.body;

    users.push({ ...user, id: uuid() });
    res.send("created user");
}

export const getUser = (req, res) => {
    // const user = users.find(user => user.id === req.params.id);
    // res.send(user);
    const singleUser = users.filter(user => user.id === req.params.id);
    res.send(singleUser);
}


export const deleteUser = (req, res) => {
    // const remuser = users.filter(user => user.id == req.params.id); 
    // users.remove(users, remuser);
    //delete user from users array
    users = users.filter(user => user.id !== req.params.id);
    res.send("deleted user");
}

export const updateUser = (req, res) => {
    const user = users.find(user => user.id === req.params.id);
    user.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password;
    res.send("updated user");
    
}
