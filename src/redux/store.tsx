import { configureStore } from '@reduxjs/toolkit'
import  mortgageReducer  from './mortgageSlice'
// ...

export const store = configureStore({
  reducer: {
    mortgageReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch