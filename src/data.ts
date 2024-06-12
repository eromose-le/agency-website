import { Service } from "@/types/service";
import { User } from "@/types/user";

export const data: Service[] = [
  {
    id: 1,
    name: "design",
    title: "Design",
    desc: "Our design services are dedicated to crafting visually stunning and strategically effective designs that amplify your brand's presence.",
    video: "Avocado.mp4",
    photo: "asdasd.png",
    longDesc:
      "Roca Delta Consulting's design services are dedicated to crafting visually stunning and strategically effective designs that amplify your brand's presence. Our team of talented designers works collaboratively with clients to create unique and compelling visual identities, from logos and branding materials to website and app interfaces. We understand that great design is more than just aesthetics; it's about creating an intuitive and engaging user experience that drives business results. Our design process is rooted in a deep understanding of your brand, market, and audience. By integrating user-centered design principles with innovative thinking, we develop creative solutions that stand out in a crowded marketplace. Whether you need a complete brand overhaul, a website redesign, or marketing collateral, Roca Delta Consulting provides the expertise and creativity needed to bring your vision to life and connect with your audience in meaningful ways.",
    images: [
      {
        id: 1,
        url: "https://images.pexels.com/photos/962000/pexels-photo-962000.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      },
      {
        id: 2,
        url: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      },
      {
        id: 3,
        url: "https://images.pexels.com/photos/3593865/pexels-photo-3593865.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      },
      {
        id: 4,
        url: "https://images.pexels.com/photos/4065906/pexels-photo-4065906.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      },
      {
        id: 5,
        url: "https://images.pexels.com/photos/6373305/pexels-photo-6373305.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      },
      {
        id: 6,
        url: "https://images.pexels.com/photos/4197693/pexels-photo-4197693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      },
    ],
  },
  {
    id: 2,
    name: "development",
    title: "Software Development",
    desc: "We excels in software development, delivering robust IT solutions that address complex problems across various industries. ",
    photo: "dev.jpeg",
    longDesc:
      "Roca Delta Consulting excels in software development, delivering robust IT solutions that address complex problems across various industries. Our team of skilled developers and engineers employs cutting-edge technology to create custom software applications tailored to meet the unique needs of our clients. From initial concept through deployment, we ensure that every solution is meticulously crafted to enhance functionality, improve efficiency, and drive business growth. Our software development services encompass a wide range of offerings, including web and mobile application development, enterprise software solutions, and system integrations. We prioritize user-centric design and scalable architectures, ensuring that our software not only meets current demands but also adapts to future challenges. With a focus on quality assurance and continuous improvement, Roca Delta Consulting is dedicated to providing software solutions that empower businesses to thrive in the digital age.",
    images: [
      {
        id: 1,
        url: "https://images.pexels.com/photos/9965121/pexels-photo-9965121.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      },
      {
        id: 2,
        url: "https://images.pexels.com/photos/9716799/pexels-photo-9716799.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      },
      {
        id: 3,
        url: "https://images.pexels.com/photos/9395308/pexels-photo-9395308.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      },
      {
        id: 4,
        url: "https://images.pexels.com/photos/10067102/pexels-photo-10067102.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      },
      {
        id: 5,
        url: "https://images.pexels.com/photos/5262378/pexels-photo-5262378.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      },
      {
        id: 6,
        url: "https://images.pexels.com/photos/9796405/pexels-photo-9796405.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      },
    ],
  },
  {
    id: 3,
    name: "production",
    title: "Production",
    desc: "Our production services encompass a wide range of capabilities designed to bring your projects to life with precision and excellence.",
    photo: "production.jpeg",
    longDesc:
      "Roca Delta Consulting's production services encompass a wide range of capabilities designed to bring your projects to life with precision and excellence. From concept development to final execution, we manage all aspects of production, ensuring that every detail is meticulously handled. Our services include video production, audio production, event production, and multimedia presentations, all aimed at delivering high-impact content that engages and inspires your audience. We combine technical expertise with creative flair to produce content that not only meets but exceeds your expectations. Our production team is skilled in the latest technologies and methodologies, ensuring that every project is executed with the highest standards of quality. Whether you are producing a corporate video, launching a new product, or hosting a live event, Roca Delta Consulting is committed to delivering exceptional production services that showcase your brand and captivate your audience.",
    images: [
      {
        id: 1,
        url: "https://images.pexels.com/photos/9299384/pexels-photo-9299384.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      },
      {
        id: 2,
        url: "https://images.pexels.com/photos/9100089/pexels-photo-9100089.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      },
      {
        id: 3,
        url: "https://images.pexels.com/photos/9714732/pexels-photo-9714732.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      },
      {
        id: 4,
        url: "https://images.pexels.com/photos/9651391/pexels-photo-9651391.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      },
      {
        id: 5,
        url: "https://images.pexels.com/photos/10008935/pexels-photo-10008935.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      },
      {
        id: 6,
        url: "https://images.pexels.com/photos/7459072/pexels-photo-7459072.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      },
    ],
  },
  {
    id: 4,
    name: "photography",
    title: "Photography",
    desc: "We offers professional photography services that capture the essence of your brand and elevate your visual storytelling.",
    photo: "photography.jpeg",
    longDesc:
      "Roca Delta Consulting offers professional photography services that capture the essence of your brand and elevate your visual storytelling. Our team of experienced photographers specializes in a wide array of photographic disciplines, including corporate events, product photography, portraits, and marketing campaigns. We focus on delivering high-quality images that resonate with your target audience and enhance your brand's visual identity. Utilizing state-of-the-art equipment and innovative techniques, we ensure that each photograph is a work of art that communicates your brand's message effectively. Our photography services are tailored to meet the specific needs of our clients, whether it's creating compelling visuals for your website, documenting important milestones, or producing stunning images for promotional materials. With a keen eye for detail and a passion for creativity, Roca Delta Consulting helps you make a lasting impression through the power of photography.",
    images: [
      {
        id: 1,
        url: "https://images.pexels.com/photos/962000/pexels-photo-962000.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      },
      {
        id: 2,
        url: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      },
      {
        id: 3,
        url: "https://images.pexels.com/photos/3593865/pexels-photo-3593865.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      },
      {
        id: 4,
        url: "https://images.pexels.com/photos/4065906/pexels-photo-4065906.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      },
      {
        id: 5,
        url: "https://images.pexels.com/photos/6373305/pexels-photo-6373305.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      },
      {
        id: 6,
        url: "https://images.pexels.com/photos/4197693/pexels-photo-4197693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      },
    ],
  },
  {
    id: 5,
    name: "recuritment",
    title: "Recruitment and Consulting",
    desc: "We understand that the right talent and strategic advice are crucial for business success.",
    photo: "photography.jpeg",
    longDesc:
      "At Roca Delta Consulting, we understand that the right talent and strategic advice are crucial for business success. Our recruitment and consulting services are designed to help organizations find and retain top-tier professionals while providing expert guidance to navigate complex business challenges. We specialize in identifying skill gaps and sourcing candidates who possess the expertise and cultural fit necessary to drive your company forward. Our consulting services extend beyond talent acquisition to include comprehensive business strategy development, process optimization, and change management. By leveraging our deep industry knowledge and analytical prowess, we provide actionable insights and customized strategies that align with your business objectives. Whether you are looking to streamline operations, enhance performance, or foster innovation, Roca Delta Consulting is your trusted partner in achieving sustainable growth and competitive advantage.",
    images: [
      {
        id: 1,
        url: "https://images.pexels.com/photos/962000/pexels-photo-962000.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      },
      {
        id: 2,
        url: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      },
      {
        id: 3,
        url: "https://images.pexels.com/photos/3593865/pexels-photo-3593865.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      },
      {
        id: 4,
        url: "https://images.pexels.com/photos/4065906/pexels-photo-4065906.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      },
      {
        id: 5,
        url: "https://images.pexels.com/photos/6373305/pexels-photo-6373305.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      },
      {
        id: 6,
        url: "https://images.pexels.com/photos/4197693/pexels-photo-4197693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      },
    ],
  },
];

export const users: User[] = [
  {
    id: 1,
    logo: "yahoo.png",
    avatar: "user1.jpeg",
    comment:
      "Partnering with Roca Delta Consulting for our software development needs has been a game-changer. Their team delivered a custom application that streamlined our operations and significantly improved our efficiency. The attention to detail and commitment to quality they demonstrated was outstanding. We couldn't be happier with the results!",
    name: "Chibueze Annen",
    title: "Cheif Executive Officer",
  },
  {
    id: 2,
    logo: "google.png",
    avatar: "user2.jpeg",
    comment:
      "Roca Delta Consulting's recruitment and consulting services have been instrumental in our company's growth. They helped us identify key talent that perfectly matched our needs and provided strategic insights that transformed our business processes. Their expertise and personalized approach make them an invaluable partner in achieving our business goals.",
    name: "Anna Taylor",
    title: "HR Manager",
  },
  {
    id: 3,
    logo: "facebook.png",
    avatar: "user3.jpeg",
    comment:
      "The photography services provided by Roca Delta Consulting exceeded our expectations. The team captured stunning images for our marketing campaign that truly reflect our brand's essence. Their professionalism and creativity were evident throughout the project, resulting in visuals that have greatly enhanced our brand identity.",
    name: "James Garry",
    title: "UI Designer",
  },
];
