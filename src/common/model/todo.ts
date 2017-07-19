export class TodoItem {
  id?: number
  description: string
  done: boolean

  constructor (description: string, id?: number) {
    this.id = id
    this.description = description
    this.done = false
  }

  toggleDone () {
    this.done = !this.done
  }

  editDescription (description) {
    this.description = description
  }

  setId (id) {
    this.id = id
  }
}
