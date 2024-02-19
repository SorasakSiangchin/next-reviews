//ไฟล์นามสกุล .mjs คือไฟล์ JavaScript แบบ module ที่รองรับโดย Node.js

import { writeFileSync } from 'node:fs';
import qs from "qs"; //QueryString

// populate เอาทุกอย่างมาให้หมด (?populate=*)
const url = "http://localhost:1337/api/reviews" + "?" + qs.stringify({
    // eq => สั่งของ jQuery ในหมวดของ Selector มีไว้สำหรับการเข้าถึง Elements ที่ต้องการโดยระบุ index
    filters : { slug : { $eq : "ark-survival-of-the-fittest" }} ,
    fields : ['slug' , 'title' , 'subtitle' , 'publishedAt' , 'body'] , // เลือก ฟิล ที่ต้องการแสดง
    populate : { image : { fields : ["url"] } } ,  // image เลือกแค่ url
    pagination : { pageSize : 1 , withCount : false} // กำหนดข้อมูลที่เราจะแสดงมี 6 ชิ้น และ withCount : false ไม่แสดงจำนวน
} , { encodeValuesOnly : true });

console.log("url :" , url);
const response = await fetch(url);
const body = await response.json();
const formatted = JSON.stringify(body , null , 2);
const file = 'scripts/strapi-response.json';
writeFileSync(file , formatted , 'utf8'); //นำมาเขียนเป็น ไฟล์
