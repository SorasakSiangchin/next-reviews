import { readFile , readdir } from "node:fs/promises";
import matter from "gray-matter";
import { marked } from "marked";
import qs from "qs"; 

const CMS_URL = "http://localhost:1337";

//TODO getFeaturedReview
// export const getFeaturedReview = async () => {
//   const reviews = await getReviews();
//   return reviews[0];
// }

// export const getReview = async (slug) => {
//     const text = await readFile(`./content/reviews/${slug}.md` , 'utf8');
//     // matter เป็นการแปลง text แบบ md ให้เป็น object แบบนี้
//     // {
//     //   content: '<h1>Hello world!</h1>',
//     //   data: {
//     //     title: 'Hello',
//     //     slug: 'home'
//     //   }
//     // }
//     const { content , data : { title , image , date } } = matter(text);
//     const body = marked(content , { headerIds : false , mangle : false }); //แปลงเป็น html
//     return {slug , title , image , date ,body};
//   };

export const getReview = async (slug) => {
  const url =
    `${CMS_URL}/api/reviews?` +
    qs.stringify(
      {
        // eq => สั่งของ jQuery ในหมวดของ Selector มีไว้สำหรับการเข้าถึง Elements ที่ต้องการโดยระบุ index
        filters: { slug: { $eq: slug } },
        fields: ["slug", "title", "subtitle", "publishedAt", "body"], // เลือก ฟิล ที่ต้องการแสดง
        populate: { image: { fields: ["url"] } }, // image เลือกแค่ url
        pagination: { pageSize: 1, withCount: false }, // กำหนดข้อมูลที่เราจะแสดงมี 6 ชิ้น และ withCount : false ไม่แสดงจำนวน
      },{ encodeValuesOnly: true }
    );

  const response = await fetch(url);
  const { data } = await response.json();
   const item = data[0];
  
  return {
    ...toReview(item) ,
    body : marked(item.attributes.body , { headerIds : false , mangle : false }),
  };
};

  /*
    "slug": "hellblade",
    "title": "Hellblade",
    "image": "/images/hellblade.jpg",
    "date": "2023-05-06",
  */

  // export const getReviews = async () => {
  //   const slugs = await getSlugs();
  //   const reviews = [];
  //   for (const slug of slugs) {
  //     const review = await getReview(slug);
  //     reviews.push(review);
  //   };

  //   // TODO sort review by most recent first
  //   // sort => ใช้สำหรับเรียงข้อมูล
  //   // กรณีนี้คือ มากไปหาน้อย
  //   // localeCompare => การเปรียบเทียบ 
  //   reviews.sort((a, b) => b.date.localeCompare(a.date));
  //   return reviews;
  // };

  export const getReviews = async (pageSize) => {
    const { data } = await fetchReviews({
      fields: ["slug", "title", "subtitle", "publishedAt"], // เลือก ฟิล ที่ต้องการแสดง
      populate: { image: { fields: ["url"] } }, // image เลือกแค่ url
      sort : ['publishedAt:desc'] ,
      pagination: { pageSize}, // กำหนดข้อมูลที่เราจะแสดงมี 6 ชิ้น
    });
    return data.map(toReview);
  };

  export const getSlugs = async () => {
    // readdir => function สำหรับอ่านไดร์ หรือ ไฟล์ 
    // readdir => ค่าที่ส่งมาจะเป็น array โดยมีชื่อไฟล์อยู่ข้างใน
    // const files = await readdir('content/reviews');
    // return files.filter(file => file.endsWith('.md')).map(file => file.slice(0 , -'.md'.length));
    const { data } = await fetchReviews({
      fields: ["slug"], // เลือก ฟิล ที่ต้องการแสดง
      sort : ['publishedAt:desc'] ,
      pagination: { pageSize: 100 }, // กำหนดข้อมูลที่เราจะแสดงมี 6 ชิ้น
    });

    return data.map(item => item.attributes.slug);
  };

  const fetchReviews = async (parameters) => {
    const url =
      `${CMS_URL}/api/reviews?` +
      qs.stringify(parameters,{ encodeValuesOnly: true });
    //console.log("[fetchReviews] :", url);
    const response = await fetch(url);
    if(!response.ok){
      throw new Error(`CMS returned ${response.status} for ${url}`);
    }
    return await response.json();
  };

  const toReview = (item) => {
    const {attributes  } = item;
    return {
      slug: attributes.slug,
      title: attributes.title,
      subtitle : attributes.subtitle ,
      date : attributes.publishedAt.slice(0 , "yyyy-mm-dd".length) , // "2023-05-12"
      image : CMS_URL + attributes.image.data.attributes.url
    }
  };