var common = require('../../common')
	, querystring = require('querystring');

var commentsGet = function(options) {
  var commentId = options.commentId;

  delete options.commentId;

  options.key = common.api.key;
	options.alt = 'json';

  var query = querystring.stringify(options);

  common.requestOptions.path = ['/plus/v1','/comments/',commentId,'?',query].join('');

	return require('../../execute');
};

module.exports = commentsGet;