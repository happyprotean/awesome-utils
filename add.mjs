#!/usr/bin/env zx

$.verbose = false // 不打印执行的命令

console.log(argv) // argv中保存全局命令参数

// 自动创建相关文件
const name = argv.name || ''
if (!name) {
  console.error('name为空')
} else {
  $`touch ./src/utils/${argv.name}.ts`
  $`touch ./src/test/${argv.name}.spec.ts`
  $`touch ./src/doc/${argv.name}.md`
}
