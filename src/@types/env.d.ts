/**thiết lập các hằng số theo từng môi trường */
interface EnvInfo {
  /**thiết lập chính của ứng dụng */
  app?: {
    /**địa chỉ máy chủ khi khởi động */
    host?: string
    /**cổng khi máy chủ khởi động */
    port?: number

  }
}