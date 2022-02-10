const Joi = require('joi');
const express = require('express');
const app = express();

// Middleware
app.use(express.json());

const courses = [
    { id: 1, name: 'JavaScript course' },
    { id: 2, name: 'Node.js course' },
    { id: 3, name: 'TypeScript course' },
];

app.get('/', (req, res) => {
    res.send(`Hola Anthony Tineo!!!`);
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send(`The course with the given ${req.params.id} was not found!`);
    res.send(course);
});

app.post('/api/courses', (req, res) => {
    // Validate
    const {error} = validateCourse(req.body);

    // If invalid, return 400 - Bad request
    if (error) return res.status(400).send(error.details[0].message);

    const course = {
        id: courses.length + 1,
        name: req.body.name,
    };
    courses.push(course);
    res.send(course);
});

app.put('/api/courses/:id', (req, res) => {
    // Look up the course
    const course = courses.find(c => c.id === parseInt(req.params.id));
    // If not existing, return 404
    if (!course) return res.status(404).send(`The course with the given ${req.params.id} was not found!`);

    // Validate
    const {error} = validateCourse(req.body);

    // If invalid, return 400 - Bad request
    if (error) return res.status(400).send(error.details[0].message);


    // Update course
    course.name = req.body.name;
    // Return the updated course
    res.send(course);
});

app.delete('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send(`The course with the given ${req.params.id} was not found!`);

    const index = courses.indexOf(course);
    courses.splice(index, 1);

    res.send(course);
});

function validateCourse(course) {
    const schema = {
        name: Joi.string()
            .min(3)
            .max(100)
            .required(),
    }
    return Joi.validate(course, schema);
}

const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`El server ${port}, esta listo!`) });