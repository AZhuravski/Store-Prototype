import AppDispatcher from '../dispatcher'
import SimpleStore from './SimpleStore'
import { DELETE_ARTICLE } from '../constants'
import { ADD_COMMENT } from '../constants'

class ArticleStore extends SimpleStore {
    constructor(...args) {
        super(...args)

        AppDispatcher.register((action) => {
            const { type, data } = action

            switch (type) {
                case DELETE_ARTICLE:
                    this.__delete(data.id)
                    this.emitChange()
                    break;

                case ADD_COMMENT:
                    this.__items[data.articleId].comments.push(data.id)
                    this.emitChange()
                    break;
            }
        })
    }
}

export default ArticleStore