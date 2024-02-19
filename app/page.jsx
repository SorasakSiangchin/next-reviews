/* eslint-disable jsx-a11y/alt-text */
import Heading from "@/components/Heading";
import { getReviews } from "@/lib/reviews";
import Image from "next/image";
import Link from "next/link";



export default async function HomePage() {
  // todo load featured review
  const reviews = await getReviews(3);
  //console.log("Homepage");
  return (
    <>
      <Heading>Indie Gamer</Heading>
      <p className="pb-3">Only the best indie games, reviewed for you.</p>
      <ul className="flex flex-col gap-2">
        {reviews.map((review, index) => (
          <li
            key={review.slug}
            className="bg-white bordershadow w-80 hover:shadow-xl sm:w-full rounded-2xl hover:shadow-xl"
          >
            {/* sm คือ responsive โดยถ้าเกินความกว้างที่กำหนดจะให้ทำอะไร */}
            <Link
              href={`/reviews/${review.slug}`}
              className="flex flex-col sm:flex-row"
            >
              <Image
                alt=""
                src={review.image}
                priority={index === 0}
                width="320"
                height="180"
                className="rounded-t sm:rounded-l sm:rounded-r-none"
              />
              <div className="px-2 py-1 text-center sm:text-left">
                <h2 className="font-semibold font-orbitron">
                  {review.title}
                </h2>
                <p className="hidden pt-2 sm:block">{review.subtitle}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}