import { FactoryEnv } from '@/core/env/factory'

/**thực thể cấu hình duy nhất */
export class FactoryEnvSingleton extends FactoryEnv implements IFactoryEnv {
  /**thực thể cấu hình duy nhất */
  static #INST: IFactoryEnv

  // không cho khởi tạo instance của class này trực tiếp
  private constructor() {
    // sử dụng biến môi trường hiện tại
    super(process.env.NODE_ENV)
  }

  /**trả về thực thể duy nhất */
  public static getInst(): IFactoryEnv {
    // nếu chưa có thực thể thì khởi tạo
    if (!this.#INST) this.#INST = new this()

    // trả về thực thể duy nhất
    return this.#INST
  }
}
