var common = require('../../common')
	, querystring = require('querystring');

var peopleListByActivity = function(options) {
  var activityId = options.activityId,
      collection = options.collection;

  delete options.activityId;
  delete options.collection;

  options.key = common.api.key;
	options.alt = 'json';

  var query = querystring.stringify(options);

  common.requestOptions.path = ['/plus/v1','/activities/',activityId,'/people/',collection,'?',query].join('');

  return require('../../execute');
};

module.exports = peopleListByActivity;