"use client";

import style from "@/styles/Services.module.css";
import Link from "next/link";
import { Service } from "@/types/service";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/slices/cartSlice";
import { BaggageClaim } from "lucide-react";

type ServiceCardProps = {
  service: Service;
};

const ServiceCard = ({ service }: ServiceCardProps) => {
  const dispatch = useDispatch();
  function handleAddToCart() {
    dispatch(addToCart(service));
  }
  return (
    <>
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
      <div className="flex items-center justify-between gap-2 pb-3 dark:text-slate-200 text-slate-800">
        <p>$ {service.price}</p>
        <button
          onClick={() => handleAddToCart()}
          className="flex items-center space-x-2 bg-lime-600 px-4 py-2 rounded-md text-white"
        >
          <BaggageClaim />
          <span>Add</span>
        </button>
      </div>
    </>
  );
};

export default ServiceCard;
