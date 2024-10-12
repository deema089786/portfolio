import { PortfolioProjectSlideProps } from '../../molecules';
import demoAImage from './assets/demo-a.png';

export const projectSlides: PortfolioProjectSlideProps[] = [
  {
    name: 'FullStack Application',
    description:
      'You can see an example of a full-stack application that can be used in various ways. It allows people to showcase the services they provide, describe them with media content, set prices, and receive feedback from customers. At the same time, customers can view available services, contact the owner, and make purchases.',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    imageSrc: demoAImage.src,
    githubUrl: 'https://github.com/deema089786/demo-A',
    projectUrl: '/demo-a',
  },
  // TODO remove duplicated
  {
    name: 'FullStack Application',
    description:
      'You can see an example of a full-stack application that can be used in various ways. It allows people to showcase the services they provide, describe them with media content, set prices, and receive feedback from customers. At the same time, customers can view available services, contact the owner, and make purchases.',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    imageSrc: demoAImage.src,
    githubUrl: 'https://github.com/deema089786/demo-A',
    projectUrl: '/demo-a',
  },
];
