import PoolsPage from "./pools";
import ClaimPage from "./claim";
import { usePageContext } from "../hooks/usePageContext";

type Props = {};

const Page = (_props: Props) => {
  const { page } = usePageContext();
  return <>{page === "pools" ? <PoolsPage /> : <ClaimPage />}</>;
};

export default Page;
