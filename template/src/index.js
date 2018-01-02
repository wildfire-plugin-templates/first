import {{module_name}} from './ExamplePlugin'

export default (options = {}) => {
  return {
    name: '{{module_name}}',
    install: ({ registerComponent, i18n, renderAt }) => {
      i18n('en', {
        {{module_name}}: {
          greeting: 'Hello, world!'
        }
      })
      i18n('zh-CN', {
        {{module_name}}: {
          greeting: '你好，世界！'
        }
      })

      registerComponent('{{name}}', {{module_name}})
      renderAt('header.after', '{{module_name}}')
    },
    options: options
  }
}
