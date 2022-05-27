import express from'express';
const app=express();
const port=process.env.PORT || 3000;
import db from './models';
import {users} from './seeders/users';
import {categories} from './seeders/categories';
import {expenses} from './seeders/expenses';
///////////////
const { userRouter } = require("./routes/userRouter");
const { categoryRouter } = require("./routes/categoryRouter");
import Redis from 'redis'

const redisClient=Redis.createClient();

app.use(express.json());

app.use("/user", userRouter);
app.use("/category", categoryRouter);

const createUsers=()=>{
    users.map(user=>{
        db.User.create(user)
    })  
}

const createCategories=()=>{
    categories.map(category=>{
        db.Category.create(category)
    })  
}
const createExpenses=()=>{
    expenses.map(expense=>{
        db.Expense.create(expense)
    })  
}

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`App listening on port ${port}`)
    })
})

function cors(): any {
    throw new Error('Function not implemented.');
}
