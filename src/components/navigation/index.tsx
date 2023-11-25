import Link from "next/link";

export function Navigation() {
  return (
    <div className="navigation flex-1">
      <nav>
        <ul className="flex gap-x-4 items-center">
          {/* <li className="inline-block">
            <Link href="/about" className="text-gray-300 hover:text-white">
              about
            </Link>
          </li> */}
          <li className="inline-block">
            <Link href="/posts" className="text-gray-300 hover:text-white">
              blog
            </Link>
          </li>
          <li className="inline-block">
            <Link href="/workshops" className="text-gray-300 hover:text-white">
              workshop
            </Link>
          </li>
          {/* <li className="flex-1 inline-block">
            <Link href="/courses" className="text-gray-300 hover:text-white">
              course
            </Link>
          </li> */}
          {/* <li className="pl-10 inline-block">
            <Link href="/off-topic" className="text-gray-300 hover:text-white">
              <span className="text-xl">🤦🏻‍♂️</span> off topic
            </Link>
          </li> */}
        </ul>
      </nav>
    </div>
  );
}
