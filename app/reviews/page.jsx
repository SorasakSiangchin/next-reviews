import Link from "next/link"
import Heading from "@/components/Heading"
import { getReviews } from "@/lib/reviews"

export const metadata = {
  title : "Reviews" ,
};

const ReviewsPage = async () => {
  const reviews = await getReviews();
  return (
    <>
      <Heading>Reviews</Heading>
      <ul className="flex flex-row flex-wrap gap-3 ">
      {reviews.map(review => {
        return <li key={review.slug} className="bg-white border w-80 shadow rounded-2xl hover:shadow-xl">
          <Link href={`/reviews/${review.slug}`}>
          <img src={review.image}
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