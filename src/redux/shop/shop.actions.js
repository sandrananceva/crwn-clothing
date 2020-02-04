import ShopActionTypes from './shop.types'

export const updateCollections = (collectiosMap) => ({
    type: ShopActionTypes.UPDATE_COLLECTIONS,
    payload: collectiosMap
})