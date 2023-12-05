

import Heading from "@/components/Heading";
import ShareButtons from "@/components/ShareButtons";
import { getReview, getSlugs } from "@/lib/reviews";

// สร้าง functions สำหรับ return slug และบอกให้ระบบรู้ว่ามี slug อะไรบ้าง
// มันรู้ของมันเอง ****
export const generateStaticParams = async () => {
  const slugs = await getSlugs();
  return slugs.map(slug => ({ slug }));
};

// export ถ้าใส่แสดงว่าเรียกใช้แล้ว
// function สำหรับ generateMetadata
export const generateMetadata = async ({ params: { slug }}) => {
  const review = await getReview(slug);
  return {
    title : review.title
  };
};

const ReviewPage = async ({ params: { slug } }) => {
  
  const review = await getReview(slug);
  //console.log('[ReviewPage] rendering : ' ,slug);
  return (
    <>
      <Heading>{review.title}</Heading>
      <div className="flex gap-2 items-baseline">
        <p className="italic pb-2">{review.date}</p>
        <ShareButtons  />
      </div>
      <img
        src={review.image}
        width="640"
        height="360"
        className="mb-3 rounded-2xl"
      />
      {/* 
        article คือ Tag ที่แสดงเนื้อหาหรือบทความ 
        dangerouslySetInnerHTML คือ การแสดงผล html
      */}
      <article dangerouslySetInnerHTML={{ __html : review.body  }}
        className="max-w-screen-sm prose prose-slate"
       />
      {/* <p>{html}</p> */}
    </>
  );
}

export default ReviewPage;