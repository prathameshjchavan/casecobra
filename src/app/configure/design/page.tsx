interface DesignPageProps {
  searchParams: { id: string | undefined };
}

const DesignPage = async ({ searchParams: { id } }: DesignPageProps) => {
  // make db call

  return <div>{id}</div>;
};

export default DesignPage;
