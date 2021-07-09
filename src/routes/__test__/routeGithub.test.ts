const request = require('supertest');
const app = require('../../app')

let username = 'andriel123'

describe('Testando Rota do Github', () => {
    it('Verifica se o número de repositórios públicos do github é igual ao esperado', async() => {
        const response = await request(app).get(`/github/${username}`)

        expect(response.body).toEqual(17)
    })

    //console.log(response)
})