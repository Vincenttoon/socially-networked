const router = require('express').Router();
// Import all backend api function for Users
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/user-controller');

// Assign routes based on controller functions
router.route('/').get(getAllUsers).post(createUser);

router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

router.route('/:id/friends/:friendsId').post(addFriend).delete(removeFriend);

module.exports = router;