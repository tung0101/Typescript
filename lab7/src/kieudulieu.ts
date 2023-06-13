export const urlAPIServer = "http://localhost:4000/hinh";
export interface IUser { hoten:string;}
export interface IHinhDep{
    id:number;   ten:string;    url:string;
    mota:string; level:number
}
export interface INguoiChoi extends IUser {
    diem:number;thoidiem:string; 
}
export class LanChoi  {
    username:string; diem:number; thoidiem:string;    
}