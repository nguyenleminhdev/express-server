/**thiết lập của môi trường staging */
export class StagingEnv implements IEnv {
  app = {
    host: '0.0.0.0',
    port: 1355,
  }
}
