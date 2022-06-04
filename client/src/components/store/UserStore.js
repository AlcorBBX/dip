import {makeAutoObservable} from 'mobx'

export default class UserStore {
    constructor() {
        // создаем переменные, _ - для того, чтоб обозначить что эта переменная не может изменятся 
        this._isAuth = true
        this._user = {}
        this._role = {}
        // this._countLessons = 0
        // this._isAdmin = true
        // mobx будет следить за изменениями этих переменных, при их изменении компоненты будут перерендериваться
        makeAutoObservable(this)
    }

    // функции для изменения состояния (action)

    // функция принимает параметрами булевое значение и присваивает его переменной _isAuth

    setIsAuth(bool){
        this._isAuth = bool
    }

    setRole(role){
        this._role = role
    }

    setUser(user){
        this._user = user
    }

    // геттеры нужны чтобы получать какие-то переменные из нашего состояния 
    // к ним будем обращаться как к обычным объектам(это computed фунции)
    // они вызываются толкьо в случае если переменная была изменена(переменная в AppRouter.js)
    get isAuth(){
        return this._isAuth
    }

    get role() {
        return this._tole
    }

    get user(){
        return this._user
    }
    
}