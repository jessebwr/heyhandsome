import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { username } = context.params as { username: string };
  
  return {
    redirect: {
      destination: `https://applink.instagram.com/${username}`,
      permanent: false, // 302 redirect
    },
  };
};

// This component never renders because of the redirect
export default function InstagramRedirect() {
  return null;
}