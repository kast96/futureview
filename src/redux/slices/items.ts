import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { itemsAPI } from "../../api/items-api"

export const fetchItems = createAsyncThunk('items/fetchItems', async () => {
	const data = await itemsAPI.getAll()
	return data.error ? [] : data.data
})

export const fetchItem = createAsyncThunk('items/fetchItem', async (id: number) => {
	const data = await itemsAPI.getOne(id)
	return data.error ? null : data.data
})

export const fetchSetViewedItem = createAsyncThunk('items/fetchSetViewedItem', async (payload: {id: number, isViewed: boolean}) => {
	const data = await itemsAPI.setViewed(payload.id, payload.isViewed)
	return data.error ? null : data.data
})

export const fetchRemoveItem = createAsyncThunk('items/fetchRemoveItem', async (id: number) => {
	const data = await itemsAPI.remove(id)
	return data.error ? null : data.data
})

const initialState = {
	items: [],
	status: 'loading'
}

const itemsSlice = createSlice({
	name: 'items',
	initialState,
	reducers: {},
	extraReducers: {
		//Получение элементов
		//@ts-ignore
		[fetchItems.pending]: (state) => {
			state.items = []
			state.status = 'loading'
		},
		//@ts-ignore
		[fetchItems.fulfilled]: (state, action) => {
			state.items = action.payload
			state.status = 'loaded'
		},
		//@ts-ignore
		[fetchItems.rejected]: (state) => {
			state.items = []
			state.status = 'error'
		},
		//Просмотр элемента
		//@ts-ignore
		[fetchSetViewedItem.pending]: (state) => {
			state.status = 'loading'
		},
		//@ts-ignore
		[fetchSetViewedItem.fulfilled]: (state, action) => {
			//@ts-ignore
			state.items = state.items.map(item => {
				if (item._id === action.payload._id) return action.payload
				return item
			})
			state.status = 'loaded'
		},
		//@ts-ignore
		[fetchSetViewedItem.rejected]: (state) => {
			state.status = 'error'
		},
		//Удаление статьи
		//@ts-ignore
		[fetchRemoveItem.pending]: (state, action) => {
			//@ts-ignore
			state.items = state.items.filter(obj => obj._id !== action.meta.arg)
		},
	}
})

export const itemsReducer = itemsSlice.reducer