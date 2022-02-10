const express = require('express');
const router  = express.Router();

const courses = [
    { id: 1, name: 'JavaScript course' },
    { id: 2, name: 'Node.js course' },
    { id: 3, name: 'TypeScript course' },
];

router.get('/', (req, res) => {
    res.send(courses);
});

router.get('/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send(`The course with the given ${req.params.id} was not found!`);
    res.send(course);
});

router.post('/', (req, res) => {
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

router.put('/:id', (req, res) => {
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

router.delete('/:id', (req, res) => {
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

module.exports = router;