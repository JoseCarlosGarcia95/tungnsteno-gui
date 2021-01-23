import 'ace-builds/src-noconflict/mode-python'

export class TungstenoHighlightRules extends window.ace.acequire(
  'ace/mode/text_highlight_rules'
).TextHighlightRules {
  constructor () {
    super()

    this.$rules = {
      start: [
        {
          token: 'comment',
          // multi line comment
          regex: '\\(\\*',
          next: 'comment'
        },
        {
          token: 'string',
          // single line
          regex: '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'
        },
        {
          token: 'string',
          // single line
          regex: "['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"
        },
        {
          token: 'constant.numeric',
          // hex
          regex: /0(?:[xX][0-9a-fA-F][0-9a-fA-F_]*|[bB][01][01_]*)[LlSsDdFfYy]?\b/
        },
        {
          token: 'constant.numeric',
          // float
          regex: /[+-]?\d[\d_]*(?:(?:\.[\d_]*)?(?:[eE][+-]?[\d_]+)?)?[LlSsDdFfYy]?\b/
        },
        {
          token: 'constant.language.boolean',
          regex: '(?:true|false)\\b'
        },
        {
          token: 'keyword.operator',
          regex:
            '!|\\$|%|&|\\*|\\-\\-|\\-|\\+\\+|\\+|~|===|==|=|!=|!==|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\\|\\||\\?\\:|\\*=|%=|\\+=|\\-=|&=|\\^=|\\b(?:in|instanceof|new|delete|typeof|void)'
        },
        {
          token: 'lparen',
          regex: /[[(\[]/
        },
        {
          token: 'rparen',
          regex: /[[(\]]/
        },
        {
          token: 'text',
          regex: '\\s+'
        }
      ],
      comment: [
        {
          token: 'comment',
          // closing comment
          regex: '.*?\\*\\)',
          next: 'start'
        },
        {
          token: 'comment',
          // comment spanning whole line
          regex: '.+'
        }
      ]
    }
  }
}

export default class TungstenoMode extends window.ace.acequire(
  'ace/mode/python'
).Mode {
  constructor () {
    super()
    this.HighlightRules = TungstenoHighlightRules
  }
}
