import {makeAutoObservable} from 'mobx'

export default class CourseStore {
    constructor() {
        // создаем переменные, _ - для того, чтоб обозначить что эта переменная не может изменятся 
        this._course = {}
        
        // mobx будет следить за изменениями этих переменных, при их изменении компоненты будут перерендериваться
        makeAutoObservable(this)
    }



    setCourse(course){
        this._course = course
    }


    get course(){
        return this._course
    }

}