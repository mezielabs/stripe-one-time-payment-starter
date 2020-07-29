import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Course from 'App/Models/Course'
import Lesson from 'App/Models/Lesson'

export default class CourseController {
  public async index ({ view }: HttpContextContract) {
    const courses = await Course.all()

    return view.render('courses/index', { courses })
  }

  public async show ({ view, params }: HttpContextContract) {
    const course = await Course
      .query()
      .where('slug', params.course)
      .preload('lessons')
      .firstOrFail()

    return view.render('courses/show', { course })
  }

  public async watch ({ view, params }: HttpContextContract) {
    const course = await Course
      .query()
      .where('slug', params.course)
      .preload('lessons')
      .firstOrFail()
    const lesson = await Lesson.findByOrFail('slug', params.lesson)

    return view.render('courses/watch', { course, lesson })
  }
}
