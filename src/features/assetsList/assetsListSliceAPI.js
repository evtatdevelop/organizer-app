const assets = [
  {
    id: 0,
    currensy: 'RUB',
    value: 1000,
    status: 'active',
    type: 'cash',
  },
  {
    id: 1,
    currensy: 'RUB',
    value: 100000,
    status: 'active',
    type: 'card',
  },
  {
    id: 2,
    currensy: 'THB',
    value: 26352,
    status: 'active',
    type: 'cash',
  },
  {
    id: 3,
    currensy: 'THB',
    value: 243,
    status: 'active',
    type: 'card',
  },
];

const yuan = {
  id: 3,
  currensy: 'CNY',
  value: 5000,
  status: 'active',
}

export const getAssets = async () => {
  return await new Promise(resolve => {
    setTimeout(() => resolve(assets), 3000)
  });
}