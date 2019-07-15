import request from 'request-promise';

const rp = request.defaults({
  json: true,
  resolveWithFullResponse: true,
});
const getItems = async ({ url, query }) => rp({
  method: 'GET',
  url: url || 'https://api.github.com/repos/tensorflow/tfjs/issues',
  qs: query,
});

export {
  getItems,
};
