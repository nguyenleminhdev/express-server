/**thiết lập của môi trường prod */
export class ProductionEnv implements IEnv {
  app = {
    host: '0.0.0.0',
    port: 1355,
  }
}
