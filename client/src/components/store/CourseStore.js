import {makeAutoObservable} from "mobx";

export default class CourseCours {
    constructor() {
        this._name = {}
        this._type = []
            //  {id: 1, name: 'React', rating: '5', img: 'https://sololearnuploads.azureedge.net/uploads/courses/1097.png'},
            // {id: 2, name: 'HTML', rating: '5', img: 'https://sololearnuploads.azureedge.net/uploads/courses/1014.png'},
            // {id: 3, name: 'Kotlin', rating: '5', img: 'https://sololearnuploads.azureedge.net/uploads/courses/1160.png'},
            // {id: 4, name: 'CSS', rating: '5', img: 'https://sololearnuploads.azureedge.net/uploads/courses/1023.png'},
            // {id: 5, name: 'JS', rating: '5', img: 'https://sololearnuploads.azureedge.net/uploads/courses/1024.png'},
            // {id: 6, name: 'PHP', rating: '5', img: 'https://sololearnuploads.azureedge.net/uploads/courses/1059.png'},
            // {id: 7, name: 'GO', rating: '5', img: 'https://sololearnuploads.azureedge.net/uploads/courses/1164.png'},
            // {id: 8, name: 'C#', rating: '5', img: 'https://sololearnuploads.azureedge.net/uploads/courses/1080.png'},
            // {id: 9, name: 'C++', rating: '5', img: 'https://sololearnuploads.azureedge.net/uploads/courses/1051.png'},
            // {id: 10, name: 'Ruby', rating: '5', img: 'https://sololearnuploads.azureedge.net/uploads/courses/1081.png'},
        this._course = []
        this._selectedType = {}
        
        makeAutoObservable(this)
    }

    setName(name) {
        this._name = name
    }


    setType(type) {
        this._type = type
    }
    setCourse(course) {
        this._course = course
    }

    setSelectedType(type) {
        // this.setPage(1)
        this._selectedType = type
    }

    get name() {
        return this._name
    }


    get type() {
        return this._type
    }
    get course() {
        return this._course
    }

    get selectedType() {
        return this._selectedType
    }
}
