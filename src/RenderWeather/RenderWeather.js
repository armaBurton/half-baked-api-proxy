export default function RenderWeather({ city, state }){

  return <h1 className='locate'>{city}, <span>{state}</span></h1>;
}