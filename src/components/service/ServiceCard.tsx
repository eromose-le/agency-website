import style from "@/styles/Services.module.css";
import Link from "next/link";
import { Service } from "@/types/service";
import Image from "next/image";

type ServiceCardProps = {
  service: Service;
};

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <Link passHref key={service.id} href={`/service/${service.name}`}>
      <div className={style.service}>
        <div className={style.catInfo}>{service.desc}</div>
        <span className={style.cat}>{service.title}</span>
        <div className={style.media}>
          {service.video ? (
            <video
              src={`/assets/img/${service.video}`}
              autoPlay
              muted
              loop
              className={style.video}
            />
          ) : (
            <Image
              src={`/assets/img/${service.photo}`}
              fill
              sizes="85%"
              priority
              style={{ objectFit: "cover" }}
              alt="service"
            />
          )}
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
