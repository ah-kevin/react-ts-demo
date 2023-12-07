module.exports = {
  // 箭头函数只有一个参数时，是否省略括号
  arrowParens: "avoid",
  // 括号内部不要出现空格
  bracketSpacing: true,
  // 行结束符使用 Unix 格式
  endOfLine: "lf",
  jsxBracketSameLine: false, // jsx > 是否另起一行
  printWidth: 100,
  proseWrap: "preserve", // 是否要换行
  semi: false,// 句末加分号
  singleQuote: true,
  tabWidth: 2,
  useTabs: false,// 缩进不使用tab，使用空格
  trailingComma: "es5", // 最后一个对象元素加逗号
  parser: "typescript"
};
