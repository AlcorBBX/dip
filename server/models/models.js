// описывание моделей данных


//импорт моделей

const sequelize = require('../db')
// импорт класса ДатаТайпс
const {DataTypes} = require('sequelize')


// const User = sequelize.define('название модели', {
// название поля: его тип и т.д.
// })
const User = sequelize.define('user', {
    id : {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email : {type: DataTypes.STRING, unique: true},
    password : {type: DataTypes.STRING},
    role : {type: DataTypes.STRING, defaultValue: 'USER'},
    img: {type: DataTypes.STRING, allowNull: true},
})

const Basket = sequelize.define('basket', {
    id : {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const BasketCourse = sequelize.define('basket_course', {
    id : {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Course = sequelize.define('course', {
    id : {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: true},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    img: {type: DataTypes.STRING, allowNull: true},
})

const Type = sequelize.define('type', {
    id : {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name : {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Brand = sequelize.define('brand', {
    id : {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name : {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Rating = sequelize.define('rating', {
    id : {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate : {type: DataTypes.STRING, allowNull: false},
})

const CourseInfo = sequelize.define('course_info', {
    id : {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title : {type: DataTypes.STRING, allowNull: true},
    description : {type: DataTypes.STRING, allowNull: true},
    name : {type: DataTypes.STRING, allowNull: false},
    subname : {type: DataTypes.STRING, allowNull: false},
})

// связующая таблица для типа и бренда (внешние ключи секвалайз добавит сам)
const TypeBrand = sequelize.define('type_brand', {
    id : {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Lesson = sequelize.define('lesson', {
    id : {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title : {type: DataTypes.STRING, allowNull: true},
    text : {type: DataTypes.STRING, allowNull: true},
    code : {type: DataTypes.STRING, allowNull: true},
    atention : {type: DataTypes.STRING, allowNull: true},
})

const LessonInfo = sequelize.define('lesson_info', {
    id : {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title : {type: DataTypes.STRING, allowNull: false},
    description : {type: DataTypes.STRING, allowNull: false},
})

const Chat = sequelize.define('chat', {
    id : {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    text : {type: DataTypes.STRING, allowNull: false},
})

const Comments = sequelize.define('comments', {
    id : {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    text : {type: DataTypes.STRING, allowNull: false},
})

// описывание связывания моделей


// .hasOne() связь Юзера к Баскет один к одному 
// .belongsTo() - сущность Баскет принадлежит Юзер
User.hasOne(Basket)
Basket.belongsTo(User)

// ffsffffffffffffffffffffffffffff

User.hasOne(Chat)
Chat.belongsTo(User)

User.hasOne(Comments)
Comments.belongsTo(User)

CourseInfo.hasOne(Comments)
Comments.belongsTo(CourseInfo)

Course.hasOne(LessonInfo)
LessonInfo.belongsTo(Course)

CourseInfo.hasOne(Lesson)
Lesson.belongsTo(CourseInfo)


// ffsffffffffffffffffffffffffffff
User.hasMany(Rating)
Rating.belongsTo(User)

Basket.hasMany(BasketCourse)
BasketCourse.belongsTo(Basket)

Type.hasMany(Course)
Course.belongsTo(Type)

Brand.hasMany(Course)
Course.belongsTo(Brand)

Course.hasMany(Rating)
Rating.belongsTo(Course)

Course.hasMany(BasketCourse)
BasketCourse.belongsTo(Course)

// .hasMany() - одна запись Девайс содержит много записей ДевайсИнфо
// .belongsTo() - сущность ДевайИнфо принадлежит Девайс
// as: '...' - название поля, которое будет у массива характеристик
Course.hasMany(CourseInfo, {as: 'info'})
CourseInfo.belongsTo(Course)

// .belongsToMany() - многие ко многим(много типов к многим брендом)
// Type.belongsToMany(Brand, {through: связующая таблица (TypeBrand)})
Type.belongsToMany(Brand, {through: TypeBrand})
Brand.belongsToMany(Type, {through: TypeBrand}) 

// экспорт моделей
module.exports = {
    User,
    Basket,
    BasketCourse,
    Course,
    Type,
    Brand,
    Rating,
    TypeBrand,
    CourseInfo,
    Lesson,
    Chat, 
    LessonInfo, 
    Comments
}