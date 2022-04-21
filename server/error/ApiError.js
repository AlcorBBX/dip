class ApiError extends Error {
    constructor(status, message){
        super()
        // присваивание того, что получает параметрами
        this.status = status
        this.message = message
    }

    // статические функции - функции, которые можно вызывать без создания объекта

    static badRequest(message) {
        // первым возвращаем статус код, вторым - сообщение 
        return new ApiError(404, message)
    }

    static internal(message) {
        // первым возвращаем статус код, вторым - сообщение 
        return new ApiError(500, message)
    }

    static forbidden(message) {
        // первым возвращаем статус код, вторым - сообщение 
        return new ApiError(403, message)
    }
}

module.exports = ApiError