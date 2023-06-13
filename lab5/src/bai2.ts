
//bai2 
//tạo type cho thông số laptop và 1 enum màu laptop
interface IThongSoLaptop {
    idLT:number;
    RAM: string;
    CPU: string;
    OCung: string;
    CanNang?: number;
  }
  
  enum MÀULAPTOP {ĐEN, TRẮNG, XÁM}


  interface ILapTop {
    idLT:number;
    tenLT:string;
    hangLT:string
    gia:string;
    mau:MÀULAPTOP;
    hinh?: string;
  }
  //type MyLapTop
  type MyLapTop = IThongSoLaptop & ILapTop;
  //mảng MyLaptop 
  
  const listlaptop:MyLapTop[] = 
  [
    { idLT:1, tenLT:'Laptop Acer Aspire 5 A514-55-5954', hangLT:'Acer', gia:'16.890.000đ', mau: MÀULAPTOP.ĐEN, RAM:'8GB', CPU:'Core i5-1235U ', OCung:'256GB', CanNang:1, hinh: 'public/images/sp1.jpg'  },
    { idLT:2, tenLT:'Laptop Acer Aspire 3 A315-59-51X8', hangLT:'Acer', gia:"14.990.000đ", mau: MÀULAPTOP.ĐEN, RAM:'8GB', CPU:'Core i5-1235U', OCung:'512GB ', CanNang:1, hinh: 'public/images/sp2.jpg'  },
    { idLT:3, tenLT:'Laptop Gaming Acer Nitro 5 AN515-57-53F9', hangLT:'Acer', gia:"22.990.000đ", mau: MÀULAPTOP.ĐEN, RAM:'8GB', CPU:'Intel Core i5-11400H', OCung:'512GB', CanNang:1, hinh: 'public/images/sp3.jpg'  },
    { idLT:4, tenLT:'Laptop Apple Macbook Air 13.6 inch', hangLT:'Macbook', gia:"26.190.000đ", mau: MÀULAPTOP.ĐEN, RAM:'8GB', CPU:'Apple M2 ', OCung:'256GB', CanNang:1, hinh: 'public/images/macbook air 13.6. (2)jpg.png'  },
    { idLT:5, tenLT:'Laptop Apple Macbook Air 2 13.6 inch', hangLT:'Macbook', gia:"36.190.000đ", mau: MÀULAPTOP.TRẮNG, RAM:'2GB', CPU:'Apple M2 chip', OCung:'512GB', CanNang:3, hinh: 'public/images/macbook air 13.6.jpg' },
    

  ]
  console.log(listlaptop);

  for (let index = 0; index < listlaptop.length; index++) {
    let htmlLapTop = ` 
        <th scope="row">${listlaptop[index].idLT}</th>
        <th scope="row">${listlaptop[index].tenLT}</th>
        <td>${listlaptop[index].hangLT}</td>
        <td>${listlaptop[index].gia}</td>
        <td>${listlaptop[index].mau}</td>
        <td>${listlaptop[index].RAM}</td>
        <td>${listlaptop[index].CPU}</td>
        <td>${listlaptop[index].OCung}</td>
        <td>${listlaptop[index].CanNang}</td>
        <td ><img src="${listlaptop[index].hinh}" alt="" ></td>

        `
    let c = document.getElementById("product");
    c.innerHTML += htmlLapTop
  }
  

  