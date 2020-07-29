import Config from '@ioc:Adonis/Core/Config'
import View from '@ioc:Adonis/Core/View'

View.global('config', (key: string) => {
  return Config.get(key)
})
