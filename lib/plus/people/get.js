var common = require('../../common')
	, querystring = require('querystring');

var peopleGet = function(options) {

  var userId = options.userId;

  delete options.userId;

  options.key = common.api.key;
	options.alt = 'json';

  var query = querystring.stringify(options);

	common.requestOptions.path = ['/plus/v1','/people/',userId,'?',query].join('');

  return require('../../execute');
};

module.exports = peopleGet;