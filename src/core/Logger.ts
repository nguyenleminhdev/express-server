import chalk from 'chalk'
import { isArray, isPlainObject } from 'lodash'

/**quản lý, hỗ trợ log trong hệ thống */
export class Logger {
  /**chuyển đổi đối tượng thành chuỗi */
  #stringify(input: any): string {
    return JSON.stringify(input, null, 4)
  }
  /**kiểm tra xem dữ liệu đầu vào có phải là object không */
  #isObject(input: any): boolean {
    return isPlainObject(input) || isArray(input)
  }
  /**chuyển đổi dữ liệu log thành chuỗi nếu gặp object */
  #objToString(message: any): any {
    return this.#isObject(message) ? this.#stringify(message) : message
  }
  /**xử lý toàn bộ dữ liệu đầu vào */
  #formatInput(messages: any[]): any[] {
    return messages?.map(this.#objToString.bind(this))
  }

  /**log thông tin */
  info(...messages: any[]) {
    console.log(chalk.blue(...this.#formatInput(messages)))
  }
  /**log cảnh báo */
  warn(...messages: any[]) {
    console.log(chalk.yellow(...this.#formatInput(messages)))
  }
  /**log lỗi */
  err(...messages: any[]) {
    console.error(chalk.red.bold(...this.#formatInput(messages)))
  }
  /**log thành công */
  ok(...messages: any[]) {
    console.log(chalk.green(...this.#formatInput(messages)))
  }
}
