import sendRequest from './send-request'
const BASE_URL = '/api/rooftops'

export async function createRooftop(rooftopData) {
    return sendRequest(BASE_URL, 'POST', rooftopData)
}

export async function getRooftops() {
    return sendRequest(BASE_URL)
}