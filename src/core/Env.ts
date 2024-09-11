import { NotFoundError } from '@/api/errors/NotFound'

/**dữ liệu của tập tin hằng số */
interface EnvFile {
  /**dữ liệu sẽ được export default */
  default?: EnvInfo
}

/**nạp dữ liệu hằng số theo môi trường */
export class Env {
  /**môi trường hiện tại */
  readonly #NODE_ENV: string

  constructor() {
    // thiết lập môi trường hiện tại
    this.#NODE_ENV = process.env.NODE_ENV || 'development'
  }

  /**đường dẫn tới tập tin hằng số của môi trường hiện tại */
  #genEnvPath() {
    return `@/config/env/${this.#NODE_ENV}`
  }
  /**nạp dữ liệu hằng số từ đường dẫn */
  async #importEnvFile(path: string): Promise<EnvFile> {
    try {
      // nạp dữ liệu từ đường dẫn
      return (await import(path)) as EnvFile
    } catch (e) {
      // nếu không tìm thấy tập tin thì báo lỗi
      throw new NotFoundError(path)
    }
  }

  /**nạp dữ liệu hằng số của môi trường hiện tại */
  public async loadConfigOfCurrentEnv() {
    try {
      /**đường dẫn tới tập tin hằng số của môi trường hiện tại */
      const ENV_PATH = this.#genEnvPath()

      /**dữ liệu hằng số của môi trường hiện tại */
      const { default: ENV_PAYLOAD } = await this.#importEnvFile(ENV_PATH)

      // nếu không tìm thấy dữ liệu hằng số thì báo lỗi
      if (!ENV_PAYLOAD) throw new NotFoundError(`${ENV_PATH} -> default`)

      // trả về dữ liệu hằng số tìm thấy
      return ENV_PAYLOAD
    } catch (e) {
      // nếu có lỗi thì ném ra
      throw e
    }
  }
}
