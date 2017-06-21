const chai = require('chai')
const expect = require('chai').expect
const chaiChange = require('chai-change')
chai.use(chaiChange)

const weekday = require(/Users/admin/LGprojects/phase_2_challange/phase-2-challange/part-1/functions.js)
describe('weekday()', () => {
  it('Seleted the correct day', () => {
    expect(weekday(2017, 5, 19)).to.equal("Mon");

  })
})
