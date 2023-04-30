'use strict'

const StatusCode = {
    FORBIDDEN: 403,
    CONFLICT: 409
}

const ReasonStatusCode = {
    FORBIDDEN: 'Bad request error',
    CONFLICT: 'Conflict error'
}



class ErrorResponese extends Error {
    constructor (messsage, status) {
        super(messsge)
        this.status = status
    }
}

class ConflicRequestError extends ErrorResponese {
    constructor(messsage = ReasonStatusCode.CONFLICT, status = StatusCode.CONFLICT){
        super(messsage, StatusCode)
    }

}
class BadRequestError extends ErrorResponese {
    constructor(messsage = ReasonStatusCode.FORBIDDEN, status = StatusCode.FORBIDDEN){
        super(messsage, StatusCode)
    }

}

module.exports = {
    ConflicRequestError,
    BadRequestError
}