export type Microfrontend = {
  bundleLink: string,
  divId: string,
  relativeUrl: string,
  renderMethod: string,
}

export const mfe1: Microfrontend[] = [
  {
    bundleLink: 'http://localhost:8080/app.bundle.js',
    divId: '1-microfrontend',
    relativeUrl: '/1',
    renderMethod: 'render1',
  }
];
export const mfe2: Microfrontend[] = [
  {
    bundleLink: 'http://localhost:8081/app.bundle.js',
    divId: '2-microfrontend',
    relativeUrl: '/2',
    renderMethod: 'render2',
  }
];
export const mfe3: Microfrontend[] = [
  {
    bundleLink: 'http://localhost:8082/app.bundle.js',
    divId: '3-microfrontend',
    relativeUrl: '/3',
    renderMethod: 'render3',
  }
];
