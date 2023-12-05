import Heading from "@/components/Heading";
import { getFeaturedReview } from "@/lib/reviews";
import Link from "next/link";



export default async function HomePage() {
  // todo load featured review
  const review = await getFeaturedReview();
  //console.log("Homepage");
    return (
      <>
        <Heading>Indie Gamer</Heading>
        <p className="pb-3">
          Only the best indie games, reviewed for you.
        </p>
        <div className="bg-white bordershadow w-80 hover:shadow-xl sm:w-full rounded-2xl hover:shadow-xl">
        {/* sm คือ responsive โดยถ้าเกินความกว้างที่กำหนดจะให้ทำอะไร */}
          <Link href={`/reviews/${review.slug}`}
                className="flex flex-col sm:flex-row">
          <img src={review.image}
          width="320" 
          height="180" 
          className="rounded-t sm:rounded-l sm:rounded-r-none"
         />
            <h2 className="font-semibold font-orbitron text-center py-1 sm:px-2">
            {review.title}
            </h2>
          </Link>
        </div>
      </>
    );
  }