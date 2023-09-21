import { USERS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        /**
        @description Login mutation
        @method POST
        @access public
        */
        login: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/auth`,
                method: 'POST',
                body: data,
            }),
            keepUnusedDataFor: 5
        }),
        /**
        @description Register mutation
        @method POST
        @access public
        */
        register: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}`,
                method: 'POST',
                body: data,
            })
        }),
        /**
        @description Logout mutation
        @method POST
        @access public
        */
        logout: builder.mutation({
            query: () => ({
                url: `${USERS_URL}/logout`,
                method: 'POST',
            })
        })
    })
})

export const {
    useLoginMutation,
    useLogoutMutation,
    useRegisterMutation
} = usersApiSlice