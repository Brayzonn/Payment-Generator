const router = require("express").Router();

import { generateLink, getLinkData } from '../controllers/mainController'; 

router.get('/getlinkdata', getLinkData)

router.post('/generatelink', generateLink)


export default router 