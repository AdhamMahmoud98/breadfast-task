import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Post } from '../../../types/types'

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://gorest.co.in/public/v2/' }),
  endpoints: (builder) => ({
    getPosts: builder.query<void, Post[]>({
      query: () => `posts`,
    }),
  }),
})
export const { useLazyGetPostsQuery } = postApi;