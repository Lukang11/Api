import express from 'express';
import { faker } from '@faker-js/faker';
import cors from "cors"
import {createServer} from "node:http"
import { studentsRouter } from './student.js';





const app = express()
const port = 3000
app.use(cors(
    {
        origin:'*'
    }
)
)

const arrayOfSubject = ["Informatyka","Matematyka","Biologia","Fizyka","Jezyk_Polski","Jezyk_Angielski"]


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get(`/teacher/:id`, (req, res) => {
    faker.seed(Number(req.params.id));
    let name = faker.person.firstName(); // 'John'
    let surname = faker.person.lastName(); // 'Doe'
    let sex = faker.person.sex();
    let user_id = req.params.id
    let teacher = {
        "teacher_id":user_id,
        "name":name,
        "surname":surname,
        "sex":sex,
    }
    res.send(teacher);
  })
  app.get(`/group/:id`, (req, res) => {
    faker.seed(Number(req.params.id));
    let name = faker.person.firstName(); // 'John'
    let surname = faker.person.lastName(); // 'Doe'
    let sex = faker.person.sex();
    let user_id = req.params.id
    let group = {
        "teacher_id":user_id,
        "name":name,
        "surname":surname,
        "sex":sex,
    }
    res.send(group);
  })
  app.use('/students',studentsRouter);

  app.get(`/room/:id`, (req, res) => {
    faker.seed(Number(req.params.id));
    let name = faker.person.firstName(); // 'John'
    let surname = faker.person.lastName(); // 'Doe'
    let sex = faker.person.sex();
    let user_id = req.params.id
    teacher = {
        "teacher_id":user_id,
        "name":name,
        "surname":surname,
        "sex":sex,
    }
    res.send(teacher);
  })
        

app.get(`/`) 
  app.get(`/status`, (req, res) => {
    let status = {
        "status":"Running",
        "port":port,
 
    }
    res.send(status);
  })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})