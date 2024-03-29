const router = require('express').Router();

const {
    getThoughts,
    getOneThought, 
    createThought, 
    updateThought,
    deleteThought,
    addReaction, 
    deleteReaction
} = require('../../controllers/thoughts');

router.route('/').get(getThoughts).post(createThought);
router.route('/:id').get(getOneThought).put(updateThought).delete(deleteThought);

router.route('/:thoughtId/reactions').post(addReaction);
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;
