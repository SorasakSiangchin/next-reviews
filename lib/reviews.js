import { readFile , readdir } from "node:fs/promises";
import matter from "gray-matter";
import { marked } from "marked";

//TODO getFeaturedReview
export const getFeaturedReview = async () => {
  const reviews = await getReviews();
  return reviews[0];
}

export const getReview = async (slug) => {
    const text = await readFile(`./content/reviews/${slug}.md` , 'utf8');
    // matter เป็นการแปลง text แบบ md ให้เป็น object แบบนี้
    // {
    //   content: '<h1>Hello world!</h1>',
    //   data: {
    //     title: 'Hello',
    //     slug: 'home'
    //   }
    // }
    const { content , data : { title , image , date } } = matter(text);
    const body = marked(content , { headerIds : false , mangle : false }); //แปลงเป็น html
    return {slug , title , image , date ,body};
  };


  export const getReviews = async () => {
    const slugs = await getSlugs();
    const reviews = [];
    for (const slug of slugs) {
      const review = await getReview(slug);
      reviews.push(review);
    };

    // TODO sort review by most recent first
    // sort => ใช้สำหรับเรียงข้อมูล
    // กรณีนี้คือ มากไปหาน้อย
    // localeCompare => การเปรียบเทียบ 
    reviews.sort((a, b) => b.date.localeCompare(a.date));
    return reviews;
  };

  export const getSlugs = async () => {
      // readdir => function สำหรับอ่านไดร์ หรือ ไฟล์ 
    // readdir => ค่าที่ส่งมาจะเป็น array โดยมีชื่อไฟล์อยู่ข้างใน
    const files = await readdir('content/reviews');
    return files.filter(file => file.endsWith('.md')).map(file => file.slice(0 , -'.md'.length));
  };