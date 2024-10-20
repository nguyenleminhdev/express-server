import { NotFoundError } from '@/api/errors/NotFound'
import envs from '@/config/env'

/**lấy thiết lập môi trường */
export interface IGetEnv {
  /**lấy thiết lập môi trường hiện tại */
  exec(): IEnv
}

/**lấy thiết lập môi trường */
export class GetEnv implements IGetEnv {
  /**nơi lưu trữ các môi trường */
  private readonly MAP_ENVS = new Map<string, IEnv>()
  /**môi trường mặc định */
  private readonly DEFAULT_ENV: IEnv
  /**tên môi trường hiện tại */
  private readonly NODE_ENV: string

  /**
   * @requires envs
   * @param envs danh sách các thiết lập môi trường
   */
  constructor(node_env?: string, ...envs: IEnv[]) {
    // nếu không có môi trường đầu vào thì báo lỗi
    if (!envs?.length) throw new NotFoundError('INIT.ENV')

    // lưu trữ môi trường hiện tại
    this.NODE_ENV = node_env || 'development'

    // lấy môi trường mặc định
    this.DEFAULT_ENV = envs[0]

    // lưu trữ các môi trường
    this.saveEnv(envs)
  }

  /**tạo ra tên env từ tên lớp */
  private static getEnvName(env: IEnv) {
    return env.constructor.name // lấy tên class
      .toLowerCase() // chuyển thành chữ thường
      .replace(/env$/, '') // bỏ hậu tố 'env'
  }

  /**lưu trữ các môi trường */
  private saveEnv(envs: IEnv[]) {
    // lặp qua từng môi trường
    envs.forEach(env => {
      /**tên môi trường */
      const ENV_NAME = GetEnv.getEnvName(env)

      // lưu trữ môi trường
      this.MAP_ENVS.set(ENV_NAME, env)
    })
  }

  /**
   * lấy thiết lập môi trường hiện tại
   * @param node_env môi trường hiện tại
   */
  public exec() {
    // nếu không tìm thấy môi trường thì lấy mặc định
    return this.MAP_ENVS.get(this.NODE_ENV) || this.DEFAULT_ENV
  }
}

/**
 * dịch vụ lấy thiết lập môi trường từ nơi lưu trữ
 * - tự động nạp toàn bộ các thiết lập theo môi trường trong config/env
 * - xuất thiết lập theo môi trường hiện tại
 */
export class ServiceGetEnv extends GetEnv implements IGetEnv {
  constructor() {
    // khởi tạo với danh sách các môi trường
    super(
      process.env.NODE_ENV, // lấy môi trường hiện tại
      ...envs // lấy danh sách các môi trường
    )
  }
}

/**thực thể lấy thiết lập môi trường duy nhất */
export class SingletonServiceGetEnv extends ServiceGetEnv implements IGetEnv {
  /**thực thể cấu hình duy nhất */
  static #INST: IGetEnv

  // không cho khởi tạo instance của class này trực tiếp
  private constructor() {
    // khởi tạo lớp cha
    super()
  }

  /**trả về thực thể duy nhất */
  public static getInst(): IGetEnv {
    // nếu chưa có thực thể thì khởi tạo
    if (!this.#INST) this.#INST = new ServiceGetEnv()

    // trả về thực thể duy nhất
    return this.#INST
  }
}
