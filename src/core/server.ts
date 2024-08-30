import express from 'express'
import { promisify } from 'util'

import type { Application } from 'express'

export class Server {
  private app: Application
  private port: number

  constructor(port: number) {
    this.app = express()
    this.port = port
  }

  public async start() {
    const listen: (port: number) => Promise<void> = promisify(
      this.app.listen.bind(this.app)
    )

    await listen(this.port)
    
    console.log(`Server started at http://localhost:${this.port}`)
  }
}
