import {CreateTable} from './create-table.use-case'

describe('CreateTableUseCase', () => {

    test('should create table with default values', () => {
        const createTable = new CreateTable()
        const table = createTable.execute({base:2})
        const rows = table.split("\n").length
        expect(createTable).toBeInstanceOf(CreateTable)
        expect(rows).toBe(10)
    })

    test('should create table with custom values', () => {
        const createTable = new CreateTable()
        const limit = 20
        const table = createTable.execute({base:3, limit})
        const rows = table.split("\n").length
        expect(createTable).toBeInstanceOf(CreateTable)
        expect(table).toContain("3 x 1 = 3")
        expect(rows).toBe(limit)
    })
})