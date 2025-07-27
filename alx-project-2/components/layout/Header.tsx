import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 p-4 text-white">
      <nav className="flex gap-4">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/home" className="hover:underline">/home</Link>
        <Link href="/about" className="hover:underline">/about</Link>
      </nav>
    </header>
  );
}
