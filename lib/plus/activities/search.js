var common = require('../../common')
	, querystring = require('querystring');

var activitiesSearch = function(options) {
  var searchTerms = options.query;

  options.key = common.api.key;
	options.alt = 'json';

  var query = querystring.stringify(options);

  common.requestOptions.path = ['/plus/v1','/activities','?',query].join('');

	return require('../../execute');
};

module.exports = activitiesSearch;