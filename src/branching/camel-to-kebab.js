/**
 * camelCase -> kebab-case（reduce 版）
 *
 * 处理三件事：
 * 1. 首尾空白  —— 先 trim
 * 2. 连续空白  —— 用 /\s+/ 切分，空串过滤掉
 * 3. 驼峰边界  —— 小写/数字后面跟大写处断一次；连续大写（如 HTTPServer）再断一次
 *
 * 每个词转成 kebab 片段，再用 reduce 以 '-' 拼接。
 */
function camelToKebab(input) {
  return String(input)
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((word) =>
      word
        // aB / 1B -> a-B / 1-B
        .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
        // HTTPServer -> HTTP-Server
        .replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2")
        .toLowerCase(),
    )
    .reduce((acc, part) => (acc ? `${acc}-${part}` : part), "");
}

module.exports = { camelToKebab };

if (require.main === module) {
  const cases = [
    ["helloWorld", "hello-world"],
    ["userNameIsTaken", "user-name-is-taken"],
    ["  fooBar  ", "foo-bar"],
    ["foo   bar\tBaz\nQux", "foo-bar-baz-qux"],
    ["HTTPServerError", "http-server-error"],
    ["", ""],
  ];
  for (const [input, expected] of cases) {
    const actual = camelToKebab(input);
    console.log(
      actual === expected ? "ok  " : "FAIL",
      JSON.stringify(input),
      "->",
      JSON.stringify(actual),
      actual === expected ? "" : `(expected ${JSON.stringify(expected)})`,
    );
  }
}
