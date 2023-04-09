import { add } from '../utils'
import { it, expect, describe } from 'vitest'

describe('add', () => {
  it('add two number', () => {
    const res = add(1, 2)
    expect(res).toBe(3)
  })
})