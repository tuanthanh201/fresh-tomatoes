import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import authSlice from './auth/authSlice';
import movieSlice from './movie/movieSlice';
import uiSlice from './ui/uiSlice';

export const store = configureStore({
	reducer: {
		auth: authSlice,
		movie: movieSlice,
		ui: uiSlice,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
