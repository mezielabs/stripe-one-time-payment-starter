import { BaseModel, beforeSave, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import Slugify from 'slugify'
import Lesson from './Lesson'

export default class Course extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column()
  public slug: string

  @column()
  public description: string

  @column()
  public featuredImage: string

  @column()
  public price: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Lesson)
  public lessons: HasMany<typeof Lesson>

  @beforeSave()
  public static async generateSlug (course: Course) {
    course.slug = Slugify(course.title, {
      lower: true,
      remove: /[*+~.()'"!:@]/g,
    })
  }
}
