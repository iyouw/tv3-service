'use strict';

const Router = require('koa-router');
const miscController = require('./controllers/misc');
const recentlyViewController = require('./controllers/recentlyViewController.js');
const favoriteController = require('./controllers/favoriteController.js');


const router = new Router();

router.get('/', miscController.getApiInfo);
router.get('/spec', miscController.getSwaggerSpec);
router.get('/status', miscController.healthcheck);

router.post('/api/browse/page', recentlyViewController.getRecentlyViewFileListAsync);
router.post('/api/browse/remove', recentlyViewController.removeRecentlyViewFileAsync);

router.post('/api/collection/page', favoriteController.getMyFavoriteFileListAsync);
router.post('/api/collection/remove', favoriteController.removeMyFavoriteFileAsync);

module.exports = router;
