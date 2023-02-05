import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Notification {
	uuid: string;
	status: 'success' | 'error' | 'warning' | 'info' | 'default';
	msg: string;
}

interface UI {
	notifications: Notification[];
}

const initialState: UI = {
	notifications: [],
};

const uiSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		addNotification: (state, { payload }: PayloadAction<Notification>) => {
			state.notifications.push(payload);
		},
		removeNotification: (state, { payload }: PayloadAction<string>) => {
			state.notifications = state.notifications.filter(
				(noti) => noti.uuid !== payload
			);
		},
	},
});

export const { addNotification, removeNotification } = uiSlice.actions;

export default uiSlice.reducer;
