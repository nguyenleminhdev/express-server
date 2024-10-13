import express from 'express'
import { promisify } from 'util'
// import { Env } from '@/core/Env'
import '@/core/Logger'
import { LOGGER } from '@/core/Logger'
import { GLOBAL } from '@/core/Global'

import type { Application } from 'express'

/** */
// export class Server {
//   private app: Application
//   private port: number

//   #env: IEnv

//   constructor() {
//     this.app = express()
//     this.port = 3000
//   }

//   public async start() {
//     try {
//       // lưu dữ liệu môi trường hiện tại
//       GLOBAL.env = await new Env().loadConfigOfCurrentEnv()

//       const listen: (port: number) => Promise<void> = promisify(
//         this.app.listen.bind(this.app)
//       )

//       await listen(this.port)

//       LOGGER.info('xxx:', GLOBAL.env)

//       console.log(`Server started at http://localhost:${this.port}`)
//     } catch (e) {
//       // TODO sau này sẽ đổi sang dùng class singleton global
//       // báo lỗi nếu khởi động máy chủ thất bại
//       LOGGER.err(e?.stack || e)
//     }
//   }
// }