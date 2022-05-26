import express from'express';
const app=express();
const port=process.env.PORT || 3000;
import db from './models';
import {users} from './seeders/users';
import {categories} from './seeders/categories';
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

// const createProjectAssignments=()=>{
//     projectassignments.map(projectassignment=>{
//         db.ProjectAssignment.create(projectassignment)
      
//     })  
   
// }


db.Category.findAll({
    include: {
        model: db.User
    }
}).then((result: object)=>console.log(JSON.stringify(result))).catch((err:object)=>console.log(err))


// createUsers();
// createCategories();
// createProjectAssignments();


db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`App listening on port ${port}`)
    })
})