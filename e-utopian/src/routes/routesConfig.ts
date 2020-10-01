import { lazy, LazyExoticComponent } from 'react'

const Home = lazy(() => import('../pages/home/homeContainer'))
const About = lazy(() => import('../pages/about/aboutContainer'))
export const paths = {
  home: '/home',
  about: '/about',
}

interface PathComponent {
  path: string
  component: LazyExoticComponent<(props: any) => JSX.Element>
}

export const pathComponents: PathComponent[] = [
  {
    path: paths.home,
    component: Home,
  },
  {
    path: paths.about,
    component: About,
  },
]
