/**quản lý các giá trị global mà mặc định phải có */
export class Global {
  #source: Map<string, any>

  export() {
    return {}
  }
}

new Global().export()