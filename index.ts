import express from'express';
const app=express();
const port=process.env.PORT || 3000;
import db from './models';
import {users} from './seeders/users';
import {categories} from './seeders/categories';
import {expenses} from './seeders/expenses';
import {projectassignments} from './seeders/projectassigments';

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
    // categories.map(expense=>{
        db.Expense.create({amount: 60},)
    // })  
}

// const createProjectAssignments=()=>{
//     projectassignments.map(projectassignment=>{
//         db.ProjectAssignment.create(projectassignment)
//     })  
// }

app.get('/', (req, res) => {
db.User.findAll({
 
}).then((result: object)=>console.log(JSON.stringify(result)))
.catch((err:object)=>console.log("error: " +err));
})

// createUsers();
// createCategories();
// createExpenses();
// createProjectAssignments();


db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`App listening on port ${port}`)
    })
})