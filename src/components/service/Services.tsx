import style from "@/styles/Services.module.css";
import ServiceCard from "./ServiceCard"
import { data } from "@/data";
import { Service } from "@/types/service";

async function getData() {
  return data;
}

const Services = () => {
  const services: Service[] = data;
  return (
    <div className={style.container}>
      <h1 className={style.title}>What We Can Do?</h1>
      <h1 className={style.subtitle}>Services we can help you with</h1>
      <div className={style.services}>
        {services?.map((service: Service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
