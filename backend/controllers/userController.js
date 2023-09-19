import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";
import  jwt  from "jsonwebtoken";


/**
@description: Auth User.
@route: POST /api/users
@access: public
 */
const authUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body;

    const user =  await User.findOne({ email});

    if (user && (await user.matchPassword(password))) {
        const token = jwt.sign({ userId: user._id}, process.env.JWT_SECRET, {
            expiresIn: '30d'
        }); 

        // set jwt as HTTP-Only cookie
        res.cookie('jwt', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development',
            sameSite: 'strict',
            maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days
        })
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        })
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    }
    
})

/**
@description: register User.
@route: POST /api/users
@access: public
 */
const registerUser = asyncHandler(async (req, res) => {
    res.send('register user')
})
/**
@description: logout User.
@route: POST /api/users
@access: private
 */
const logoutUser = asyncHandler(async (req, res) => {
    res.send('logout user')
})
/**
@description: get user profile.
@route: GET /api/users/profile
@access: private/
 */
const getUserProfile = asyncHandler(async (req, res) => {
    res.send('get user profile')
})

/**
@description: update user profile.
@route: PUT /api/users/profile
@access: private/
 */
const updateUserProfile = asyncHandler(async (req, res) => {
    res.send('update user profile')
});

/**
@description: get users.
@route: GET /api/users
@access: private/admin
 */
const getUsers = asyncHandler(async (req, res) => {
    res.send('get users')
})

/**
@description: get users by id.
@route: GET /api/users/:id
@access: private/admin
 */
const getUserById = asyncHandler(async (req, res) => {
    res.send('get user by id')
})

/**
@description: delete user.
@route: DELETE /api/users
@access: private/admin
 */
const deleteUser = asyncHandler(async (req, res) => {
    res.send('get user')
})

/**
@description: update user.
@route: PUT/api/users
@access: private/admin
 */
const updateUser = asyncHandler(async (req, res) => {
    res.send('update user')
})

export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
    getUserById,
    updateUser
}