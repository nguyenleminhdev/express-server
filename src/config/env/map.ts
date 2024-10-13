import { DevelopmentEnv } from '@/config/env/config.development'
import { StagingEnv } from '@/config/env/config.staging'
import { ProductionEnv } from '@/config/env/config.production'

/**danh sách các class môi trường */
export const MapEnv: IMapEnv = new Map([
  ['development', DevelopmentEnv],
  ['staging', StagingEnv],
  ['production', ProductionEnv],
])
