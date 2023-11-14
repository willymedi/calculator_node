
const runCommand = async(args: string[]) => {

    process.argv = [...process.argv, ...args]

    const {yarg} = await import('./args.plugin')
    return yarg
}


describe('Test args.plugin', () => {

    const originalArgv = process.argv

    beforeEach(() => {
        process.argv = originalArgv
        jest.resetModules()
    })

    test("Should return default yargs", async() => {
        const argv =  await runCommand(['-b', '5'])

        expect(argv).toEqual(expect.objectContaining({
            b:5,
            l:10,
            s: false,
            n: 'table',
            d: './outputs'
        }))
        
    })

    test("Should return custom yargs", async() => {
        const argv =  await runCommand(['-b', '5', '-l', '20', '-s', 'true', '-n', 'file', '-d', 'salida'])

        expect(argv).toEqual(expect.objectContaining({
            b:5,
            l:20,
            s: true,
            n: 'file',
            d: 'salida'
        }))
        
    })


})