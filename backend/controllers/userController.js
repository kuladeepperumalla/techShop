import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";


/**
@description: Auth User.
@route: POST /api/users
@access: public
 */
const authUser = asyncHandler(async (req, res) => {
    res.send('auth user')
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
    res.send('auth user')
})
/**
@description: get user profile.
@route: GET /api/users/profile
@access: private
 */
const getUserProfile = asyncHandler(async (req, res) => {
    res.send('auth user')
})

const deleteUserProfile = asyncHandler(async (req, res) => {
    res.send('auth user')
})
