import type { TnewsType } from "@type/index";


export const news:TnewsType[]= [
    {
      id: 1,
      img: "https://picsum.photos/id/655/400/270",
      title: "Noteworthy technology acquisitions 2021",
      description:
        "Here are the biggest enterprise technology acquisitions of 2020 so far, in reverse chronological order.",
        status:true
    
      },
    {
      id: 2,
      img: "https://picsum.photos/id/659/400/270",
      title: "Noteworthy technology acquisitions 2022",
      description:
        "Here are the biggest enterprise technology acquisitions of 2022 so far, in reverse chronological order.",
        status:false
    },
    {
      id: 3,
      img: "https://picsum.photos/id/652/400/270",
      title: "Noteworthy technology acquisitions 2023",
      description:
        "Here are the biggest enterprise technology acquisitions of 2022 so far, in reverse chronological order.",
        status:true
    },
    {
      id: 4,
      img: "https://picsum.photos/id/660/400/270",
      title: "Noteworthy technology acquisitions 2024",
      description:
        "Here are the biggest enterprise technology acquisitions of 2023 so far, in reverse chronological order.",
        status:true
    }
];

export const BaseURL="https://jsonplaceholder.typicode.com"