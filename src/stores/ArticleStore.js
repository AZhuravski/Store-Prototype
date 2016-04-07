import AppDispatcher from '../dispatcher'
import { EventEmitter } from 'events'

class ArticleStore extends EventEmitter {
	constructor(initialData) {
		super()
		this.__items = {}
		if (initialData) initialData.forEach(this.__add)

			AppDispatcher.register( (action)=> {
				const { type, data } = action

				switch (type) {
					case 'delete_article':
						this.__delete(data.id)
						this.emitChange()
						break;
				}
				console.log('---',this.getAll());
			})
	}

	emitChange() {
		this.emit('CHANGE_EVENT')
	}

	addChangeListener(callback) {
		this.on('CHANGE_EVENT', callback)
	}

	removeChangeListener(callback) {
		this.removeListener('CHANGE_EVENT', callback)
	}

	getById = (id) => {
		return this.__items[id]
	}

	getAll = () => {
		return Object.keys(this.__items).map(this.getById)
	}

	__add = (item) => {
		this.__items[item.id] = item
	}

	__delete = (id) => {
		delete this.__items[id]
	}
}

export default ArticleStore