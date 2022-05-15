export function fetchData( data = [] ) {
  return new Promise( resolve => 
    setTimeout(() => resolve({data}), 500)
  );
}