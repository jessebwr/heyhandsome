import { Group } from '@mantine/core';
import Image from 'next/image';
import { GetServerSideProps } from 'next';
import { getAssetUrl, getShowById, OneItemShow } from '../../cms/directus';
import ShowList from '../../components/showList';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.query.id as string;
  const show = await getShowById(id);

  return { props: { show } };
};

export default function ShowPage({ show }: { show: OneItemShow }) {
  if (!show) {
    return <div>Umm this is not a real person on our team</div>;
  }

  return (
    <Group style={{ paddingTop: '30px' }} position="center">
      {show?.poster && <Image src={getAssetUrl(show?.poster)} height="600" width="345" />}
      <ShowList shows={[show]} />
    </Group>
  );
}
