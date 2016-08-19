// const expect = require('chai').expect;
// const request = require('supertest');
const utilTool = require('utility-tool');

describe('unit tests for functions', () => {
  // let app;
  //
  // beforeEach(() => {
  //   app = require('../src/index');
  // });

  // afterEach(() => {
  //   app.close();
  // });

  describe('debug function', () => {
    it('should print to the console', (done) => {
      done();
    });
  });

  describe('isNumber function', () => {
    it('should return true if passed 5', (done) => {
      if (utilTool.isNumber(5, (n) => {
        utilTool.debug(`${n} is not a number`);
      }, (n) => {
        utilTool.debug(`${n} is a number`, null, 0);
        done();
      }));
    });

    it("should return false if passed 'hello'", (done) => {
      if (utilTool.isNumber('hello', (n) => {
        utilTool.debug(`${n} is not a number`, null, 0);
        done();
      }, (n) => {
        utilTool.debug(`${n} is a number`);
      }));
    });

    it('should return false if passed { number: false }', (done) => {
      if (utilTool.isNumber({ number: false }, (n) => {
        utilTool.debug(`${n} is not a number`, null, 0);
        done();
      }, (n) => {
        utilTool.debug(`${n} is a number`);
      }));
    });
  });
});
