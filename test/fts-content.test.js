var sqlite3 = require('..');
var assert = require('assert');

describe('fts', function() {
    var db;
    before(function(done) {
        db = new sqlite3.Database(':memory:', done);
    });

    it('should create a new fts5 table', function(done) {
        db.exec('CREATE VIRTUAL TABLE t1 USING fts5(content="", a, b, c);', done);
    });
});
