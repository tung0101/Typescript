//user.ts
interface IUser { hoten:string;}
export let admin:IUser = {username:'ad', password:'123', hoten:'Tèo'}; 
export const dangnhap=()=>{ console.log('Hàm đăng nhập')}
export const thoat = ()=>{ console.log('Hàm thoát')}
export class User implements IUser {
    hoten: string; tuoi: number;
}
