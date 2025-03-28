import Link from "next/link";

export const metadata = {
  title: 'My Custom Page Title',
  description: 'This is a unique description for my page.',
  openGraph: {
    title: 'My Custom Page Title',
    description: 'This is a unique description for my page.',
    type: 'website',
  },
  other: {
    'addsearch-custom-field': 'player=Sammy Baugh',
    'data-type': 'text',
  },
};

export default function Home() {
  return (
    <div>
      <p>
        Welcome to [Website Name], your premier destination for vintage sports cards! Whether you're a seasoned collector or just starting out, we specialize in rare and iconic trading cards from baseball, football, basketball, and more. Our carefully curated selection features everything from classic rookie cards to hard-to-find gems, ensuring you can add history to your collection. With a passion for preserving the legacy of sports, we provide expert insights, fair pricing, and a seamless shopping experience. Explore our collection today and rediscover the thrill of vintage sports card collecting with [Website Name]!
      </p>
      <h1>Home Page</h1>
      <Link href="/sets/1950bowman">
        View 1950 Bowman Set
      </Link>
      <Link href="/about">Go to About Page</Link>
      <Link href="/nonsports/batman">Batman</Link>
    </div>
  );
}