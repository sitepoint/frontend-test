var _ = require("lodash");
var __Counters = [ {id: "asdf", title: "boop",  count: 4}, {id: "zxcv", title: "steve", count: 3}, {id: "qwer", title: "bob",   count: 0}];

module.exports = {
  all    : getAll,
  create : create,
  inc    : applyTo("count", inc),
  dec    : applyTo("count", dec),
  delete : del
};

function genId() {
  return (+new Date() + ~~(Math.random * 999999)).toString(36);
}

function getAll() { return _.map(__Counters, _.identity); }

function create(title) {
  var id = genId();
  __Counters[id] = {id: id, title: title, count: 0};
  return getAll();
}

function del(id) {
  delete __Counters[id];
  return getAll();
}

function applyTo(key, fn) {
  return function(id) {
    __Counters[id][key] = fn(__Counters[id][key]);
    return getAll();
  };
}

function inc(n) { return n + 1; }
function dec(n) { return n - 1; }
