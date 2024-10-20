import { DevelopmentEnv } from '@/config/env/env.development'
import { StagingEnv } from '@/config/env/env.staging'
import { ProductionEnv } from '@/config/env/env.production'

// xuất các thiết lập môi trường
export default [new DevelopmentEnv(), new StagingEnv(), new ProductionEnv()]
