import { data } from "@/data";
import { filterData, getRandomInt } from "@/utils";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string; reviewId: string };
  searchParams: {};
};

const Service: React.FC<Props> = (props) => {
  const { params } = props;

  // const random = getRandomInt(2);
  // console.log(random);
  // if (random === 1) {
  //   throw new Error("Error loading Review");
  // }

  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }

  const filterParams = { name: params.slug };
  const product = filterData(data, filterParams);

  return (
    <h1 className="h-[30vh] w-dvw flex flex-col items-center justify-center">
      Service Page {product?.id} | Review Page{params.reviewId}
    </h1>
  );
};

export default Service;
