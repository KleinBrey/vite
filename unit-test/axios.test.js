import { ajax } from '../src/utils/axios'

test('测试', () => {
  
  expect(ajax([1,2,3])).toBe(8);
});