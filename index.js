const express = require('express')
const app = express()

const path = require('path')

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

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/index.html'))
})

app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
	return res.send({
		name: req.file.originalname,
		type: req.file.mimetype,
		size: req.file.size,
	})
})

app.listen(3000)

module.exports = app
