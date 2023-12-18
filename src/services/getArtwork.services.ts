import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {IArtwork} from '../interfaces/interfaces';

interface IData {
  data?: IArtwork[];
}

export interface queryParams {
  id: string;
}

export const artworkApi = createApi({
  reducerPath: 'artworkApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.artic.edu/api/v1',
  }),
  endpoints: builder => ({
    getArtworkById: builder.query<IData, queryParams>({
      query: ({id}) => ({
        url: `/artworks${id}`,
        responseHandler: response => response.json(),
      }),
    }),
  }),
});

export const {useGetArtworkByIdQuery} = artworkApi;
