import Categories from '../Categories/Categories';

export default function YelpList({ bizniz }){
  // console.log('||', bizniz);

  return <div className='yelp-card'>
    <h1>{bizniz.name}</h1>
    <img src={bizniz.image_url} alt={bizniz.name} />
    <div>
      {
        bizniz.categories.map((category, i) => <Categories key={category + i} category={category} />,
        )
      }
    </div>
    <div>
      <label>
        Address:
        <p>{bizniz.location.address1}, {bizniz.location.city} {bizniz.location.zip_code}</p>
      </label>
    </div>
    <div className='rating'>
      <label>
        Rating:&nbsp;
        {bizniz.rating}
      </label>
      <label>
        Price:&nbsp;
        {bizniz.price}
      </label>
    </div>
    <div>
      <label>
        Phone Number:
        <p>{bizniz.phone}</p>
      </label>
    </div>

  </div>;
}