export function fetchData() {
  const data = [
    {
      id: 0,
      currensy: 'RUB',
      value: 1000,
      status: 'active',
    },
    {
      id: 1,
      currensy: 'THB',
      value: 3000,
      status: 'active',
    },
  ];  
  return new Promise( resolve => 
    setTimeout(() => resolve({data: data}), 2000)
  );
}