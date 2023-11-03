import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

  export const contactsApi = createApi({
    reducerPath: 'contacts',
    baseQuery: axiosBaseQuery({ baseUrl: 'https://connections-api.herokuapp.com' }),
    tagTypes: ['contscts'],
    endpoints: (builder) => ({
      getContacts: builder.query({
        query: () => ({
            url: '/contacts',
            method: 'GET',
        }),
        providesTags: ['contscts']
      }),
      postContact: builder.mutation({
        query: (value) => ({
            url: '/contacts',
            method: 'POST',
            data: value,
        }),
        invalidatesTags: ['contscts']
      }),
      changeContact: builder.mutation({
        query: (value) => ({
            url: `/contacts/${value.id}`,
            method: 'PATCH',
            data: {
                name: value.name,
                number: value.number,
            }
        }),
        invalidatesTags: ["contscts"]
      }),
      deleteContact: builder.mutation({
        query: (id) => ({
            url: `/contacts/${id}`,
            method: 'DELETE',
        }),
        invalidatesTags: ['contscts']
      })
    }),
  })

  export const {useChangeContactMutation, useDeleteContactMutation, useGetContactsQuery, usePostContactMutation} = contactsApi