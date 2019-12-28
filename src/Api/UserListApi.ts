import axios from '../plugins/axios'

export default class UserListApi {
  private readonly _resource: string = '/users'
  _isSuccess: boolean = false
  constructor() {
    return this
  }

  public async get(): Promise<any> {
    const { data } = await axios.get(this._resource)
    return data
  }

  get isSuccess(): boolean {
    return this._isSuccess
  }

  public async save(value: any): Promise<void> {
    await axios.post(this._resource, value)
  }
}
