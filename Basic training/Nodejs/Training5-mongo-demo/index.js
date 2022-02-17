const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.log('No se pudo conectar a MongoDB...', err));

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    },
    category: {
        type: String,
        required: true,
        enum: ['web', 'mobile', 'network'],
        lowercase: true,
        // uppercase: true,
        trim: true
    },
    author: String,
    tags: {
        type: Array,
        validate: {
            isAsync: true,
            validator: function(v, callback) {
                setTimeout(() => {
                    const result = v && v.length > 0;
                    callback(result);
                }, 4000);
            },
            message: 'El curso debe tener por lo menos un tag'
        }
    },
    date: { type: Date, default: Date.now},
    isPublished: Boolean,
    price: {
        type: Number,
        required: function() { return this.isPublished; },
        min: 10,
        max: 200,
        get: v => Math.round(v),
        set: v => Math.round(v)
    }
});

const Course = mongoose.model('Course', courseSchema);

async function createCourse() {
    const course = new Course({
        name: 'React Course',
        category: 'web',
        author: 'Keila',
        tags: 'frontend',
        isPublished: true,
        price: 15.8
    });

    try {
        const result = await course.save();
        console.log(result);
    }
    catch (ex) {
        for(field in ex.errors)
            console.log(ex.errors[field].message);
    }
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
        .find({ _id: '620dfccdcdf31420901f39e2' })
        // .skip((pageNumber - 1) * pageSize)
        // .limit(pageSize)
        .sort({ name: 1 })
        .select({ name: 1, tags: 1, price: 1 });
        // .count();
        console.log(courses[0].price);
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

// removeCourse('620de69f3bef8618c4e9f2de');
// updateCourse('620d88c43848a168f8b753b8');
// createCourse();
getCourses();

