/**quản lý các giá trị global mà mặc định phải có */
export class Global {
  /**đối tượng duy nhất của class */
  private static instance: Global

  /**dữ liệu môi trường hiện tại */
  #env: EnvInfo

  /**lấy đối tượng duy nhất của class */
  public static getInstance(): Global {
    // nếu chưa có instance thì tạo mới
    if (!Global.instance) Global.instance = new Global()

    // trả về instance duy nhất
    return Global.instance
  }

  /**ghi dữ liệu môi trường */
  set env(env: EnvInfo) {
    // gán dữ liệu môi trường vào biến private
    this.#env = env
  }
  /**lấy dữ liệu môi trường */
  get env(): EnvInfo {
    // trả về dữ liệu môi trường
    return this.#env
  }
}

/**các giá trị global mà mặc định của máy chủ */
export const GLOBAL = Global.getInstance()
