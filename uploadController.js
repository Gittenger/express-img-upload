const multer = require('multer')
const Image = require('./ImageSchema')

const multerStorage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'public/img')
	},
	filename: (req, file, cb) => {
		const ext = file.mimetype.split('/')[1]
		cb(null, `image-${Date.now()}.${ext}`)
	},
})

const multerFilter = (req, file, cb) => {
	if (file.mimetype.startsWith('image')) {
		cb(null, true)
	} else {
		cb(new Error('Not an image.'), false)
	}
}

const upload = multer({
	storage: multerStorage,
	fileFilter: multerFilter,
})

exports.uploadPhoto = upload.single('image')

exports.updateImageDB = async (req, res, next) => {
	const img = await Image.create({ name: `${req.file.filename}` })

	res.status(200).json({
		status: 'success',
		doc: img,
	})
}
