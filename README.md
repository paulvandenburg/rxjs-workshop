# RxjsWorkshop

Demo project for ihomer Academy RxJS workshop.

This project expects you have node 16 / npm 8 installed.

Run project with `npm start`

Add new pages by generating a new Angular component using:  
`npm run ng generate component workshop/part1/p00-my-page -m workshop/part1`

Then in the module, in this case `part1.module.ts`, add a route for your new component.  
Now you can see your component by typing in this new address.

To also have it show up in the sidebar menu, add it in `menu.ts` as well.

## Utilities

To provide some concrete examples I've added the `SourceService`, which provides some simple methods to perform some API calls for experimenting with RxJS.

The following "API"s are available from my server:

- https://portal.paulvandenburg.nl  
  Simple API that just returns one of the great quotes from Portal.
- https://cowsay.paulvandenburg.nl  
  Converts any provided input to an ASCII art as if a cow said it, how great!  
  You can either add the input in a GET request like `https://cowsay.paulvandenburg.nl/<your input here>`  
  Or by sending a POST request and send a body as JSON with your query in the `q` property like: `{ "q": "Hello world" }`
- https://http.paulvandenburg.nl  
  Simple endpoint that allows you to force certain HTTP status response, all response also include a cool fox image as body.
  To specify the status code you want as response, just include the number after the URL like:  
  https://http.paulvandenburg.nl/401
- https://airports.paulvandenburg.nl  
  An endpoint that allows you to search through a database of airports in the world (of which there are about 45 000).  
  This is useful to optimize an autocomplete-like search with RxJS.  
  Specify your search query like: `https://airports.paulvandenburg.nl?q=<query here>`  
  Pagination info is also returned using the following 3 HTTP headers: `X-Item-Count`, `X-Offset`, `X-Page-Size`  
  You can also specify an offset for your query if you want to implement pagination.  
  `https://airports.paulvandenburg.nl?q=<query here>&offset=10`

Besides these "useful" APIs the `SourceService` also has a `slow` method to test with slower async calls, if my server is too performant ;)
