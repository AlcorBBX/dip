import {makeAutoObservable} from "mobx";

export default class CourseCours {
    constructor() {
        this._title = {}
        this._description = {}
        this._courseInfo = []
        this._selectedType = {}
        makeAutoObservable(this)
    }

    setTitle(title) {
        this._title = title
    }
    setDescription(description) {
        this._description = description
    }
    setCourseInfo(courseInfo) {
        this._courseInfo = courseInfo
    }

    get title() {
        return this._title
    }

    get description() {
        return this._description
    }

    get courseInfo() {
        return this._courseInfo
    }
}
