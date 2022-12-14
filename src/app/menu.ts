type MenuItem = {
  displayName: string;
  path: string;
}

type MenuGroup = {
  displayName: string;
  basePath: string;
  items: MenuItem[];
}

export const menu: MenuGroup[] = [
  {
    displayName: 'Part 1',
    basePath: '/workshop/part-1',
    items: [
      {
        displayName: 'Tap',
        path: '01-tap',
      },
      {
        displayName: 'Map',
        path: '02-map',
      },
      {
        displayName: 'Nested map',
        path: '03-nested-map',
      },
      {
        displayName: 'Error handling',
        path: '04-errors',
      },
    ],
  },
  {
    displayName: 'Part 2',
    basePath: '/workshop/part-2',
    items: [
      {
        displayName: 'Debounce',
        path: '01-debounce',
      },
      {
        displayName: 'Combining observables',
        path: '02-combining-observables',
      },
      {
        displayName: 'Sharing observables',
        path: '03-sharing-observables',
      },
    ],
  },
]
