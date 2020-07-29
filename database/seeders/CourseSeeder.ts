import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Course from 'App/Models/Course'

export default class CourseSeederSeeder extends BaseSeeder {
  public async run () {
    const firstCourse = await Course.create({
      title: 'Introduction to TypeScript',
      description: 'It is no longer news that AdonisJs v5 is being written from ground up in TypeScript, and with its release around the corner, now is the best time to start learning TypeScript. TypeScript is a typed superset of JavaScript with some additional exciting features. In this course, you will get learn the basics of TypeScript and everything you need to know in order to get started with TypeScript.',
      price: 19,
      featuredImage: 'https://res.cloudinary.com/mezie/image/upload/v1578486532/intro_to_typescript_tswwds.png',
    })

    await firstCourse.related('lessons').createMany([
      {
        title: 'What is TypeScript',
        videoId: 'Rf8mCP2xZu8',
        duration: '1:11',
      },
      {
        title: 'Installing TypeScript',
        videoId: '366S8yO0Fng',
        duration: '0:47',
      },
      {
        title: 'Writing your first TypeScript file',
        videoId: 'tIx5Uz_yXTU',
        duration: '2:04',
      },
      {
        title: 'Exploring the TypeScript compiler',
        videoId: 'kqZLNXNB-H8',
        duration: '2:55',
      },
      {
        title: 'The TypeScript configuration file',
        videoId: '1le_3hnJeQ8',
        duration: '3:47',
      },
    ])

    const secondCourse = await Course.create({
      title: 'Visual Studio Code for AdonisJS 4 Development',
      description: 'Visual Studio Code or VS Code as it is mostly called is an open source code editor created by Microsoft. Over the years, it has gained popularity, which makes it one of the most used and favorite code editor. This can be attributed to it exciting features such as built-in Git, integrated terminal to name but a few. Above all, VS Code is extensible and customizable as there are lot of extensions to extend or add new features the code editor. In this course, you will learn how to set up VS Code for AdonisJs development.',
      price: 29,
      featuredImage: 'https://res.cloudinary.com/mezie/image/upload/v1578486532/Visual_Studio_Code_for_AdonisJs_Development_1_jcsfnv.png',
    })

    await secondCourse.related('lessons').createMany([
      {
        title: 'Introduction',
        videoId: 'jovHq-RZNEI',
        duration: '1:09',
      },
      {
        title: 'Edge Templating Support',
        videoId: 'uGWaIWwts00',
        duration: '3:39',
      },
      {
        title: 'AdonisJs Snippets',
        videoId: 'whTtCwy3LR0',
        duration: '1:35',
      },
      {
        title: 'Standard Style',
        videoId: 'iDoZQXL7br4',
        duration: '3:55',
      },
      {
        title: 'StandardJs Styled Snippets',
        videoId: 'DLAt7jJWKtQ',
        duration: '1:29',
      },
    ])
  }
}
