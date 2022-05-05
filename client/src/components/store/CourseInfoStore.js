import {makeAutoObservable} from "mobx";

export default class CourseInfoStore {
    constructor() {
        this._courseInfo = []
        this._title = {}
        this._description = {}
        this._selectedType = {}
        makeAutoObservable(this)
    }

    setCourseInfo(_courseInfo) {
        this.__courseInfo = _courseInfo
    }

    setTitle(title) {
        this._title = title
    }
    setDescription(description) {
        this._description = description
    }

    get courseInfo() {
        return this._courseInfo
    }

    get title() {
        return this._title
    }

    get description() {
        return this._description
    }
}
