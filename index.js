const express = require('express')
const app = express()

const cors = require('cors')
app.use(
	cors({
		optionsSuccessStatus: 200,
	}),
)

const multer = require('multer')
const upload = multer({
	dest: 'uploads',
})

app.post('/upload', upload.single('upfile'), (req, res) => {
	return res.send({
		name: req.file.filename,
		type: req.file.mimetype,
		size: req.file.size,
	})
})

app.listen(3000)

module.exports = app
