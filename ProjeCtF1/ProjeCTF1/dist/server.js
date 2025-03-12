import fastify from 'fastify';

const server= fastify({logger: true});
server.get ('/teams' , async (request, response) => {
response.type('application/json').code(200)});


server.listen= ({port:3333},()=> {
    console.log('Servidor aberto na porta: 3333');
});