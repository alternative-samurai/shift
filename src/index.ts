import fastify from 'fastify'

// const server = fastify()

// server.get('/ping', async (request, reply) => {
//   return 'pong\n'
// })

// server.listen({ port: 8080 }, (err, address) => {
//   if (err) {
//     console.error(err)
//     process.exit(1)
//   }
//   console.log(`Server listening at ${address}`)
// })

export const createServer = async () => {
    await new Promise((resolve) => {
        const server = fastify()
        server.get('/ping', async (request, reply) => {
            return 'pong\n'
        })
        server.listen({ port: 8080 }, (err, address) => {
            if (err) {
                console.error(err)
                process.exit(1)
            }
            console.log(`Server listening at ${address}`)
        })
    })
}
;(async () => {
    await createServer()
})()
