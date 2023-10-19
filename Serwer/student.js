import express  from "express";
import { faker } from '@faker-js/faker';

export const studentsRouter = express.Router();

studentsRouter.get(`/:id`, (req, res) => {
    console.time("test_time")
    faker.seed(Number(req.params.id + 100));
    let name = faker.person.firstName(); // 'John'
    let surname = faker.person.lastName(); // 'Doe'
    let sex = faker.person.sex();
    let user_id = req.params.id
    let student = {
        "student_id":user_id,
        "name":name,
        "surname":surname,
        "sex":sex,
    }
    res.send(student);
    console.timeEnd("test_time")
  }).get(':id/schedule',(req,res) => {
    res.send(`${req.params.id} searching schedule for it`)
  })