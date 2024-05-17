const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const cors = require('cors')
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const coursesSchema = new mongoose.Schema({
    title: String,
    isAvailable: Boolean,
    price: Number,
    imgSrc: String,
}, { timestamps: true });


const CourseModel = mongoose.model("Courses", coursesSchema)
app.get('/', async (req, res) => {
    let courses
    courses = await CourseModel.find()

    res.send({
        message: "all courses",
        data: courses
    })


})

app.get('/:id', async (req, res) => {
    const { id } = req.params
    let course
    course = await CourseModel.findById(id)
    res.send({
        message: "finded course",
        data: course
    })
})

app.post("/", async (req, res) => {
    const course = new CourseModel(req.body);
    await course.save();
    res.send({
        message: "posted",
        data: course
    })
})


app.delete("/:id", async (req, res) => {
    const { id } = req.params
    let response
    response = await CourseModel.findByIdAndDelete(id)
    res.send({
        message: "deleted",
        data: response
    })
})

app.patch('/:id', async (req, res) => {
    const { id } = req.params
    await CourseModel.findByIdAndUpdate(id, req.body)
    const updated = CourseModel.findById(id)
    res.send({
        message: "update",
        response: updated,
    })
})

mongoose.connect("mongodb+srv://tu6xru353:rena123@courses.uw5dzad.mongodb.net/").then(() => console.log("connected"))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})