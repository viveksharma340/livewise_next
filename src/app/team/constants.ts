type Feature = {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    role: string;
    iconClassName: string;
    delay: string;
  };

  export const features: Feature[] = [
    {
      id: 1,
      title: "Mohit Jindal",
      description:
        "Currently in his 8th year at Microsoft, Mohit Jindal brings a wealth of experience to our team. Based in Redmond, US, he combines a strong background in Finance and Engineering. Mohit has also contributed his expertise to two startups, enriching our team with his unique skill set and innovative mindset.",

      imageUrl: "/Mohit new.webp",
      role: "Senior Software Engineer, Microsoft",
      iconClassName: "icon-system",
      delay: "100ms",
    },
    {
      id: 2,
      title: "Raghav Sood",
      description:
        "Raghav Sood serves as Vice President at Goldman Sachs in Bengaluru. With previous roles at Goldman Sachs in Sydney and Amazon in Hyderabad, Raghav brings a wealth of experience and a results-driven approach to our team. His passion for getting things done is highly valued by his colleagues.",

      imageUrl: "/Image 12-11-2023 at 9_54 am.webp",
      role: "Vice President, Goldman Sachs",
      iconClassName: "icon-cyber",
      delay: "200ms",
    },
    {
      id: 3,
      title: "Gaurav Bhola",
      description:
        "Gaurav Bhola, now a Tech Lead at Google in the US, brings extensive experience from his previous role at Google in Bengaluru and a successful tenure with a startup. His deep expertise in app development, innovative approach, and ability to lead and mentor teams make him an invaluable asset to our team.",

      imageUrl: "/gaurav2.webp",
      role: "Tech Lead, Google",
      iconClassName: "icon-application",
      delay: "300ms",
    },
  ];