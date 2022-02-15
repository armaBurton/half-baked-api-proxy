export default function Categories({ category }){
  console.log('||', category);

  return <span className='space'>
    {category.title}
  </span>;
}