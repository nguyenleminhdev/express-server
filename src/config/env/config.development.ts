/**thiết lập của môi trường dev */
export class DevelopmentEnv implements IEnv {
  app = {
    host: '0.0.0.0',
    port: 1355,
  }
}
