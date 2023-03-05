const CODES = {
  A: 65,
  Z: 90
}

// Функция toCell возвращает элемент div с классом "cell"
// и атрибутом "contenteditable", установленным в true.
// Это делает ячейку редактируемой.
function toCell() {
  return `
  <div class="cell" contenteditable></div>
  `
}

function toColumn(col) {
  return `
  <div class="column">
    ${col}
  </div>
  `
}

function createRow(index, content) {
  return `
  <div class="row">
        <div class="row-info">${index ? index : ''}</div>
        <div class="row-data">${content}</div>
  </div>
  `
}


// Функция toChar принимает индекс и возвращает соответствующую заглавную букву
// алфавита с помощью метода String.fromCharCode().
function toChar(_, index) {
  return String.fromCharCode(CODES.A + index)
}

export function createTable(rowsCount = 15) {
  const colsCount = CODES.Z - CODES.A + 1
  const rows = []

  const cols = new Array(colsCount)
      .fill('')
      .map(toChar)
      // .map(el => createCol(el))
      .map(toColumn)
      .join('')

  rows.push(createRow(null, cols))

  for (let i = 0; i < rowsCount; i++) {
    const cells = new Array(colsCount)
        .fill('')
        .map(toCell)
        .join('')
    rows.push(createRow(i + 1, cells))
  }

  return rows.join('')
}


