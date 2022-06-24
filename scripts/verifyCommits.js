// const chalk = require('chalk')
// use 'picocolors' to replace 'chalk'
const colors = require('picocolors')

// const msgPath = process.env.GIT_PARAMS
const msgPath = process.argv[2]
const msg = require('fs').readFileSync(msgPath, 'utf-8').trim()

console.log()
console.log(colors.bgBlue('[sure-lint] Commit Msg: '), msg)

const commitRE =
  /^(revert: )?(feat|fix|docs|dx|style|refactor|perf|test|workflow|build|ci|chore|types|wip|release)(\(.+\))?: .{1,50}/

if (!commitRE.test(msg)) {
  console.log()
  console.error(
    `  ${colors.bgRed(' ERROR ')} ${colors.red(
      `invalid commit message format.`
    )}\n\n` +
      colors.red(
        `  Proper commit message format is required for automated changelog generation. Examples:\n\n`
      ) +
      `    ${colors.green(`feat(compiler): add 'comments' option`)}\n` +
      `    ${colors.green(
        `fix(input): handle events on blur (close #28)`
      )}\n\n` +
      colors.red(`  See .github/commit-convention.md for more details.\n`)
  )
  process.exit(1)
}
console.log()
