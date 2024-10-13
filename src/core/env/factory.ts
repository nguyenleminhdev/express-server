import { MapEnv } from '@/config/env/map'
import { NotFoundError } from '@/api/errors/NotFound'

/**khởi khởi tạo thực thể cấu hình theo môi trường */
export class FactoryEnv implements IFactoryEnv {
  /**danh sách các class môi trường */
  protected static ENV_MAP: IMapEnv = MapEnv

  /**giá trị môi trường hiện tại */
  #NODE_ENV: string

  /**
   * @param node_env môi trường hiện tại
   */
  constructor(node_env: string = 'development') {
    // thiết lập môi trường hiện tại
    this.#NODE_ENV = node_env
  }

  public getEnv() {
    /**lấy class môi trường tương ứng */
    const CLASS_ENV = FactoryEnv.ENV_MAP.get(this.#NODE_ENV)

    // nếu không tìm thấy class môi trường thì báo lỗi
    if (!CLASS_ENV) throw new NotFoundError('ENV')

    // trả về một instance của class môi trường
    return new CLASS_ENV()
  }
}
