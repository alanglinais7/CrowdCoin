const routes =  require('next-routes')();

// the colon is the wildcard
routes
  .add('/campaigns/new', 'campaigns/new')
  .add('/campaigns/:address', '/campaigns/show');


module.exports = routes;
