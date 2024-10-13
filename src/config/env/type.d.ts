/**thiết lập chính của ứng dụng */
interface IAppEnv {
  /**thiết lập chính của ứng dụng */
  app: {
    /**địa chỉ máy chủ khi khởi động */
    host: string
    /**cổng khi máy chủ khởi động */
    port: number
  }
}

/**thiết lập các hằng số theo từng môi trường */
interface IEnv extends IAppEnv {}