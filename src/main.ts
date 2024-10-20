import { SingletonServiceGetEnv } from '@/core/Env'

console.log('lần 1:',SingletonServiceGetEnv.getInst().exec())
console.log('lần 2:',SingletonServiceGetEnv.getInst().exec())
console.log('lần 3:',SingletonServiceGetEnv.getInst().exec())
console.log('lần 4:',SingletonServiceGetEnv.getInst().exec())
console.log('lần 5:',SingletonServiceGetEnv.getInst().exec())
console.log('lần 6:',SingletonServiceGetEnv.getInst().exec())
console.log('lần 7:',SingletonServiceGetEnv.getInst().exec())
