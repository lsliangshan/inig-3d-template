import { userStore, getItem } from '../../utils/localforage'

export function getUserInfo () {
  return new Promise(async (resolve) => {
    await getItem({
      key: key,
      store: userStore
    }).then(data => {
      resolve(data)
    })
  })
}

export function setUserInfo (key, data, expiredAt) {
  return new Promise(async (resolve) => {
    await setItem({
      key: key,
      expiredAt: expiredAt || 1 * 60 * 60 * 1000,
      store: userStore,
      data: data
    })
    resolve(true)
  })
}