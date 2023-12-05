import Link from "next/link";

const NavBar = () => {
  return (
    <nav>
      <ul className="flex gap-4">
        <li>
          <Link 
            href="/" 
            className="font-bold font-orbitron text-orange-800 hover:underline">
            Indie Gamer
          </Link>
        </li>
        <li className="ml-auto">
          <Link href="/reviews" className="text-orange-800 hover:underline">Reviews</Link>
        </li>
        <li>
          {/* prefetch => กำลังดึงข้อมูลล่วงหน้า */}
          {/* prefetch กรณีที่ให้เป็น false หมายว่า ต้องกดก่อนถึงจะดึงข้อมูลมาให้ ซึ่งโดยปกติจะดึงมาให้ล่วงหน้าแล้ว */}
          <Link href="/about" prefetch={false} className="text-orange-800 hover:underline">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
