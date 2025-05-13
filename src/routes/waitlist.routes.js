import { Router } from "express";

const router = Router()
import waitlistController from "../controller/waitlist.controllers.js";

router.route('/register').post(waitlistController)

export default router