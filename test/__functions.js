// const expect = require('chai').expect;
// const request = require('supertest');
// const utilTool = require('utility-tool');

describe('unit tests for functions', () => {
  let app;

  beforeEach(() => {
    app = require('../src/index');
  });

  afterEach(() => {
    app.close();
  });

  describe('debug function', () => {
    it('should print to the console', (done) => {
      done();
    });
  });

  describe('isNumber function', () => {
    it('should return true if passed 5', (done) => {
      done();
    });

    it("should return false if passed 'hello'", (done) => {
      done();
    });

    it("should return false if passed { 'prop': false }", (done) => {
      done();
    });
  });
});
