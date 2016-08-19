const assert = require('chai').assert;
const expect = require('chai').expect;
// const request = require('supertest');
const sinon = require('sinon');

describe('unit tests for functions', () => {
  beforeEach(() => {
    this.app = require('../src/index');
  });

  describe('debug function', () => {
    beforeEach(() => {
      sinon.stub(console, 'log');
    });

    afterEach(() => {
      console.log.restore();
    });

    it('should print to the console', (done) => {
      this.app.debug('test debug');

      assert.equal(console.log.callCount, 4);

      const expectedOutput = '\u001b[41m\u001b[1mtest debug\u001b[22m\u001b[49m';

      expect(console.log.getCall(2).args[0]).to.equal(expectedOutput);

      done();
    });
  });

  describe('isNumber function', () => {
    it('should return true if passed 5', (done) => {
      if (this.app.isNumber(5, (n) => {
        this.app.debug(`${n} is not a number`);
      }, (n) => {
        this.app.debug(`${n} is a number`, null, 0);
        done();
      }));
    });
  
    it("should return false if passed 'hello'", (done) => {
      if (this.app.isNumber('hello', (n) => {
        this.app.debug(`${n} is not a number`, null, 0);
        done();
      }, (n) => {
        this.app.debug(`${n} is a number`);
      }));
    });
  
    it('should return false if passed { number: false }', (done) => {
      if (this.app.isNumber({ number: false }, (n) => {
        this.app.debug(`${n} is not a number`, null, 0);
        done();
      }, (n) => {
        this.app.debug(`${n} is a number`);
      }));
    });
  });
});
