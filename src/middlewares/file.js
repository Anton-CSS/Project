import multer from "multer";

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'C:\\Users\\92515\\Desktop\\Elbrus\\project\\public\\uploads') // Укажите путь для сохранения фотографий
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
});
const fileFilter = function(req, file, cb) {
    if (file.mimetype.startsWith('image/')) {
        cb(null, true);
    } else {
        cb(new Error('Invalid file type'), false);
    }
};

const upload = multer({
    storage: storage,
    fileFilter: fileFilter
});

export default upload;
