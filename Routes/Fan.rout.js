import express from 'express'
import {body} from 'express-validator'

import {addFan,getFan} from "../Controllers/Fan.controller.js"
import multer from "../Middlewares/multer.js"

const router = express.Router()

router.route("/")
        .post(multer("image"),
        body('fullname').isLength({min : 5 ,max:50}),
        body('team').isLength({min:2,max:100}),
        body('phone').isLength({min :8,max:8})
        ,addFan)

router.route("/:team")
        .get(getFan)


export default router