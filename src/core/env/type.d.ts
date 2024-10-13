/**đại diện cho FactoryEnv */
interface IFactoryEnv {
  /**khởi tạo thực thể cấu hình theo môi trường */
  getEnv(): IEnv
}

/**đại diện cho cấu hình môi trường */
type IMapEnv = Map<string | undefined, new () => IEnv>