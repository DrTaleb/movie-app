import { createSlice } from '@reduxjs/toolkit';
import { IMovieInList } from '@/types';

export interface ISearchState {
  term: {
    title : string;
    type : string;
  },
  isSearched : boolean,
  searchResult : IMovieInList[],
  page : number,
  total : number | undefined
}

const initialState: ISearchState = {
  term : {
    title : "",
    type : "",
  },
  isSearched : false,
  searchResult : [],
  page : 1,
  total : undefined
};

export const searchSlice = createSlice({
  name: 'search',
  initialState: initialState,
  reducers: {
    updateTitle: (state, action) => {
      state.term.title = action.payload;
      if(action.payload?.length < 2){
        state.searchResult = []
      } 
    },
    updateType: (state, action) => {
      state.term.type = action.payload;
    },
    updateSearchResults : (state, action)=>{
      state.searchResult = action.payload;
    },
    updateIsSearched : (state, action)=>{
      state.isSearched = action.payload;
    },
    updatePage : (state, action)=>{
      state.page = action.payload;
    },
    updateTotal : (state, action)=>{
      state.total = action.payload;
    },
  },
});

export const {
  updateTitle,
  updateType,
  updateSearchResults,
  updateIsSearched,
  updatePage,
  updateTotal
} = searchSlice.actions;

export default searchSlice.reducer;
