import { Router } from 'express';
import * as PageControler from '../controllers/pageController/index.js'
import * as SeachControler from '../controllers/searchController/index.js'
const router = Router();

router.get('/', PageControler.home);
router.get('/dogs', PageControler.dogs);
router.get('/cats', PageControler.cats);
router.get('/fishes', PageControler.fishes);

router.get('/search', SeachControler.search)
export default router;
