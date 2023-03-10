import Link from 'next/link';
import { useUser } from 'reactfire';

export default function Home() {
  const { status, data: user } = useUser();

  return (
    <>
      Home <br/>
      Status: {status}<br/>
      User: {user?.displayName}<br/>

      <Link href='/login'>Login</Link>
    </>
  )
}
