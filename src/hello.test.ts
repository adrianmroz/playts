import { Hello } from './hello';

test('Greets', () => {
  expect(Hello('Foo')).toBe('Hello Foo!');
});
