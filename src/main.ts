import { Server } from '@/core/server'

;(async () => {
  await new Server(3000).start()
})()

console.log('Hello World!')
