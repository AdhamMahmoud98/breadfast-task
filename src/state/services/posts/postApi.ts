import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Comment, Post } from '../../../types/types'

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://gorest.co.in/public/v2/' }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => `posts`,
    }),
    getPostComments: builder.query<Comment[], string>({
        query: (id) => `posts/${id}/comments`,
      }),
  }),
})
export const { useLazyGetPostsQuery, useLazyGetPostCommentsQuery } = postApi;