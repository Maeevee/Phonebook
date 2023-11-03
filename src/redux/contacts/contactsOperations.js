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
        tagTypes: ['Contacts'], 
        endpoints: builder => ({
            getContacts: builder.query({
                query: () => ({
                    url: '/contacts',
                    method: 'GET'
                }),
                providesTags: ['Contacts']
            })
        })
    })