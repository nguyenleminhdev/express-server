import { FactoryEnvSingleton } from '@/core/env/singleton'

const $ENV = FactoryEnvSingleton.getInst().getEnv()

console.log($ENV)
