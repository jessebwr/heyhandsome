import { getFutureShows, Shows } from '../cms/directus';
import Link  from 'next/link';

// This gets called on every request
export async function getServerSideProps() {
  const upcomingShows = await getFutureShows();
  // Pass data to the page via props
  return { props: { upcomingShows } };
}

export default function UpcomingShowsPage({ upcomingShows }: { upcomingShows: Shows }) {
  const username = 'taylorswift';
  
  return (
    <>
      <Link href={`/ig/${username}`}>
        <button>Open Instagram</button>
      </Link>
      <button onClick={() => {
        navigator.share();
      }}>Open Instagram</button>
    </>
  );
}
