const request = require('superagent');
const fetch = require('node-fetch');

require('dotenv').config();

exports.handler = async (event, context) => {
  try {

    const pokemon = event.queryStringParameters.pokemon;
    console.log(pokemon);
    // grab the pokemon's name from the request's query parameters
    // here is an example from the netlify docs:
    // https://functions.netlify.com/playground/#hello%2C-%7Bname%7D 
    
    // consult the pokedex docs 
    // https://pokedex-alchemy.herokuapp.com/

    return { 
      statusCode: 200, 
    // this is where you shoot data back to the user. right now it's sending an empty object--replace this with the pokemon data. remember, you do need to stringify it, otherwise netlify gets mad. ¯\_(ツ)_/¯
      body: JSON.stringify({}),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};


/*
// this is what imports look like in node
const fetch = require('node-fetch');

// WELCOME TO NODE.JS

// what is exports.handler? let's just say, that's node stuff.
// node is javascript on the back end. it's almosty 100% identical to the js you know
// but technically it is a different language
exports.handler = async (
  event
  // 3) event: notice that our little server has an event. this event is where the query parameters live. it will have a key called queryStringParameters, which has a key called search (because that's what we called it when we made the request back in YelpSearch.js)
) => {
  // 4) now we use the event.queryStringParameters.search string to make a request to yelp. If queryStringParameters.search is `portland or usa`, it will give us the business in thsi city.
  const response = await fetch(`https://api.yelp.com/v3/businesses/search?location=${event.queryStringParameters.search}`, { 
    // 5) we must remember to add the token to the headers. It must be called Authorization. It must have a value that begins with the word Bearer, a space, then the token.
    headers : {
      Authorization: `Bearer ${process.env.YELP_KEY}`
      // note that our token lives in the environment becuase it must remain private.
    } 
  });
  
  // 6 now that we've hit yelp, we need to make it json. This must weirdly be awaited.
  const json = await response.json();

  // 7 now we send the yelp data back from our little server to the react app, who made the request.
  return { 
    statusCode: 200, 
    // 8 don't forget! we have to weirdly stringify the body proerty of the return. That's just what netlify tells us to do. If you want to know more, google serialized data.
    body: JSON.stringify(json.businesses),
  };
};*/