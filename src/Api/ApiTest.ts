import UserListApi from './UserListApi'
// eslint-disable-next-line @typescript-eslint/no-floating-promises
;(async () => {
  const userListApi = new UserListApi()
  const res = await userListApi.get()
  console.log(res)
})()
