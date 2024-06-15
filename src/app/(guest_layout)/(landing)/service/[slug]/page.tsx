import { data } from "@/data";
import { Img } from "@/types/service";
import styles from "@/styles/Product.module.css";
import { filterData } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

type Props = {
  params: { slug: string };
  searchParams: {};
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `${params.slug} | Roca Delta`,
  };
};

const Service: React.FC<Props> = (props) => {
  const { params, searchParams } = props;

  const filterParams = { name: params.slug };
  const product = filterData(data, filterParams);

  return (
    <div className={styles.container}>
      {/* Large */}
      <div className={styles.cardL}>
        {product?.images?.map((img: Img) => (
          <div key={img.id} className={styles.imgContainer}>
            <Image
              src={img.url}
              quality={100}
              fill
              sizes="100%"
              style={{ objectFit: "cover" }}
              alt="product-images"
            />
          </div>
        ))}
      </div>
      {/* Small */}
      <div className={styles.cardS}>
        <h1 className={styles.title}>{product?.title}</h1>
        <p className={styles.desc}>{product?.longDesc}</p>
        <button className={styles.button}>
          <Link href="/contact">Book Now</Link>
        </button>
      </div>
    </div>
  );
};

export default Service;
