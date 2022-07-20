require('./bootstrap')
require('./aragon')
require('vue-moment')


import * as Alerts from './utils/alerts.js'
import * as Constants from './utils/constans.js'
import './utils/validators.js'

window.Alerts = Alerts
window.Constants = Constants