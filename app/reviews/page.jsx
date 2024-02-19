import Image from "next/image";
import Link from "next/link"
import Heading from "@/components/Heading"
import { getReviews } from "@/lib/reviews"

export const metadata = {
  title : "Reviews" ,
};

const ReviewsPage = async () => {
  const reviews = await getReviews(6);
  //console.log("[ReviewsPage] reviews :" + JSON.stringify(reviews , null , 2));

  return (
    <>
      <Heading>Reviews</Heading>
      <ul className="flex flex-row flex-wrap gap-3 ">
      {reviews.map((review , index) => {
        return <li key={review.slug} className="bg-white border w-80 shadow rounded-2xl hover:shadow-xl">
          <Link href={`/reviews/${review.slug}`}>
          <Image src={review.image}
          alt=""
          // priority => ลำดับความสำคัญ
          priority={index === 0}
          width="320" height="180" className="rounded-t"
         />
            <h2 className="font-semibold font-orbitron text-center py-1">
              {review.title}
            </h2>
          </Link>
        </li> 
      })}
      
      </ul>
    </>
  )
}

export default ReviewsPage