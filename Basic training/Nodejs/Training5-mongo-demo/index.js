const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.log('No se pudo conectar a MongoDB...', err));

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [ String ],
    date: { type: Date, default: Date.now},
    isPublished: Boolean
});

const Course = mongoose.model('Course', courseSchema);

async function createCourse() {
    const course = new Course({
        name: 'Angular Course',
        author: 'Anthony Tineo',
        tags: ['angular', 'frontend'],
        isPublished: true
    });
    const result = await course.save();
    // console.log(result);
};

// eq (equal)
// ne (not equal)
// gt (greater than)
// gte (greater than or equal to)
// lt (less than)
// lte (less than or equal to)
// in
// nin (not in)
async function getCourses() {
    const pageNumber = 2;
    const pageSize = 10;

    const courses = await Course
        .find({ author: 'Anthony Tineo', isPublished: true })
        .skip((pageNumber - 1) * pageSize)
        .limit(pageSize)
        .sort({ name: 1 })
        .select({ name: 1, tags: 1 });
        // .count();
        // console.log(courses);
}

async function updateCourse(id) {
    const courseId = await Course.findByIdAndUpdate(id, {
        $set: {
            author: 'Anthony',
            name: 'Angular course',
            isPublished: true
        }
    }, {new: true});
    console.log(courseId);
}

async function removeCourse(id) {
    const resultRemove = await Course.deleteOne({ _id: id });
    console.log(resultRemove);
}

removeCourse('620d88c43848a168f8b753b8');
// updateCourse('620d88c43848a168f8b753b8');
// createCourse();
// getCourses();

