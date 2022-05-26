import express from'express';
const app=express();
const port=process.env.PORT || 3000;
import db from './models';
import {users} from './seeders/users';
import {categories} from './seeders/categories';


const createCategories=()=>{
    categories.map(category=>{
        db.Category.create(category)
      
    })  
   
}

// createCategories();


db.sequelize.sync().then(()=>{
    app.listen(port,()=>{
        console.log(`App listening on port${port}`)
   })
})