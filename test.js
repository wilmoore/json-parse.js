'use strict'

/*!
 * imports.
 */

var test = require('tape-catch')

/*!
 * imports (local).
 */

var parse = require('./')

/*!
 * tests.
 */

test('mapcat()', function (t) {
  t.deepEqual(parse([])('[1,2,3]'), [ 1, 2, 3 ], 'Returns corresponding JavaScript object when data parses as valid JSON')
  t.throws(parse().bind(null, '[1,2,3'), SyntaxError, 'Throws Syntax error when no default value is given and data does not parse as valid JSON')
  t.deepEqual(parse([])('[1,2,3'), [], 'Returns default value when data does not parase as valid JSON')
  t.end()
})
