import express from "express";
import bodyParser from "body-parser";//body-parser is a middleware that allows us to parse the body of the request
import cors from "cors";//cross origin resource sharing , middlleware that allows us to access our api from another domain

import userRoutes from "./routes/users.js";

const app = express();
const port = process.env.PORT || 5000;


app.use(bodyParser.json());
app.use(cors());


app.use('/', userRoutes);


app.get('/', (req, res) => {
    res.send('Hello World');
}
);
app.all('*', (req, res) => {
    res.send('Route does not exist');
}
);



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}
);

