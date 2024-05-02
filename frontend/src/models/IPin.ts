export interface IPin {
    _id: string
    username: string
    title: string
    desc: string
    rating: number
    lat: number
    long: number
    createdAt: string
    updatedAt: string
    __v: number
  }
  

export interface IPinResp {
    data: IPin[]
}