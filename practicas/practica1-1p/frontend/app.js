import { App } from '@tinyhttp/app'

import sirv from 'sirv'

const PORT = process.env.PORT || 8080

new App().use('/', sirv('dist')).listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`))
