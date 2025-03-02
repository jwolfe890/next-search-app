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
  },
};

export default function AboutPage() {
  return (
    <>
      <div>
        <h1>About Page</h1>
        <p>Welcome to the about page!</p>
        <p>Sammy Baugh (Samuel Adrian Baugh) was an American football quarterback, coach, and Hall of Famer, widely regarded as one of the greatest quarterbacks in NFL history. Born on March 17, 1914, in Temple, Texas, Baugh first gained national recognition as a star at Texas Christian University (TCU), where he revolutionized the passing game with his pinpoint accuracy. His standout performances led to him being drafted by the Washington Redskins in 1937, where he would play his entire 16-season career (1937–1952). Nicknamed "Slingin’ Sammy," Baugh was a pioneer in the development of the modern forward pass, leading the NFL in passing yards multiple times. In 1943, he had one of the most remarkable seasons in football history, leading the league in passing, punting, and interceptions as a defensive back. A two-time NFL champion (1937, 1942) and six-time First-Team All-Pro, Baugh set numerous passing records and remains one of the most influential figures in the sport. Beyond his playing days, Baugh transitioned into coaching, including stints at Hardin–Simmons University and in professional football. He was inducted into the Pro Football Hall of Fame in 1963 as part of its inaugural class. Sammy Baugh passed away on December 17, 2008, but his legacy endures as a transformative figure in football history.</p>
        <p>Test version 1.0</p>
        <Link href="/sets/1950bowman">
          View 1950 Bowman Set
        </Link>
        <Link href="/">Back to home</Link>
      </div>
    </>
  );
}
