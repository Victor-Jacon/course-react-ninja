// [jest/chai] vamos usar o expect do chai.

/* import antigo: 
const expect = require('chai').expect
const sum = require('./sum') 
*/

import { expect } from 'chai'
import sum from './sum'


// [CHAI] O chai usa essa sintaxe de objeto, mas ele quebra em vários pedaços, a primeira vista fica esquisito mas depois acostuma.
it('sum should be a function', () => {
  expect(sum).to.be.a('function')
})

it('sum(1,2) should return 3', () => {
  expect(sum(1,2)).to.be.equal(3)
})

