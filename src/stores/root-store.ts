import PostStore from './post-store'

export interface Stores {
  postStore: PostStore
}

const stores = (store: RootStore): Stores => ({
  postStore: new PostStore(store),
})

class RootStore {
  stores: Stores = stores(this)
}

export default RootStore
