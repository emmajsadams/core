import { describe, expect, test } from 'bun:test'
import {
  EMAIL,
  FIRST_NAME,
  GITHUB,
  LAST_NAME,
  LINKEDIN,
  NAME,
  PHONE_NUMBER,
  TITLE,
  URL,
} from './personalDetails'

describe('personalDetails', () => {
  test('name is composed of first and last', () => {
    expect(NAME).toBe(`${FIRST_NAME} ${LAST_NAME}`)
  })

  test('email is valid format', () => {
    expect(EMAIL).toMatch(/.+@.+\..+/)
  })

  test('phone number starts with +', () => {
    expect(PHONE_NUMBER).toMatch(/^\+/)
  })

  test('social links are non-empty', () => {
    expect(GITHUB).toBeTruthy()
    expect(LINKEDIN).toBeTruthy()
  })

  test('title and URL are set', () => {
    expect(TITLE).toBeTruthy()
    expect(URL).toBeTruthy()
  })
})
