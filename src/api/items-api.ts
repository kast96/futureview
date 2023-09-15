import { instance } from './api'
import { ResponseType, ItemType } from "../types/types"

export const itemsAPI = {
	getAll() {
		return instance.get<ResponseType<ItemType>>(`items/`).then(response => response.data)
	},
	getOne(itemId: number) {
		return instance.get<ResponseType<ItemType>>(`items/${itemId}`).then(response => response.data)
	},
	create(item: ItemType) {
		return instance.post<ResponseType<ItemType>>(`items/`, item).then(response => response.data)
	},
	remove(itemId: number) {
		return instance.delete<ResponseType<ItemType>>(`items/${itemId}`).then(response => response.data)
	},
	update(itemId: number, item: ItemType) {
		return instance.put<ResponseType<ItemType>>(`items/${itemId}`, item).then(response => response.data)
	},
	setViewed(itemId: number, isViewed: boolean) {
		return instance.patch<ResponseType<ItemType>>(`items/viewed/${itemId}`, {isViewed}).then(response => response.data)
	},
}