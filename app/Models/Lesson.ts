import { BaseModel, beforeSave, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import Slugify from 'slugify'
import Course from './Course'

export default class Lesson extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public courseId: number

  @column()
  public title: string

  @column()
  public slug: string

  @column()
  public videoId: string

  @column()
  public duration: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Course)
  public course: BelongsTo<typeof Course>

  @beforeSave()
  public static async generateSlug (lesson: Lesson) {
    lesson.slug = Slugify(lesson.title, {
      lower: true,
      remove: /[*+~.()'"!:@]/g,
    })
  }
}
