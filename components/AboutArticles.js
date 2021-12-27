import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'


export default function AboutArticles() {
  const aboutImages = [
    '/shan1.jpg',
    '/shan2.jpg',
    '/shan3.jpg'
  ]

    return (
      <main className='aboutArticlesCont'>
          <article className='aboutArticle'>
            <div className='aboutImage'>
              <Image
                  src={aboutImages[0]}
                  alt="Shanica Cabading"
                  layout='fill'
                  objectFit='cover'
                  objectPosition='center'
                  className='aboutCardImage'
              />
            </div>
            <div className='aboutText'>
              <label className='aboutTitle'>Intro</label>
              <p className='aboutPar'>Reprehenderit sit consequat laboris laborum eu ipsum fugiat nostrud ea dolore ut pariatur eu. Ut ipsum ad fugiat reprehenderit eu tempor dolore excepteur reprehenderit consequat ea mollit nostrud duis. Non eu et minim consequat aute. Cupidatat voluptate culpa nisi ex consectetur eiusmod consequat enim elit consequat sit. Deserunt labore amet cupidatat eu et ipsum nulla. Irure ut laboris nisi labore duis velit fugiat enim dolore.</p>
            </div>
          </article>
          <article className='aboutArticle'>
            <div className='aboutImage revImage'>
              <Image
                    src={aboutImages[1]}
                    alt="Shanica Cabading"
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                    className='aboutCardImage'
              />
            </div>
            <div className='aboutText revText'>
              <label className='aboutTitle'>Profession</label>
              <p className='aboutPar'>Reprehenderit sit consequat laboris laborum eu ipsum fugiat nostrud ea dolore ut pariatur eu. Ut ipsum ad fugiat reprehenderit eu tempor dolore excepteur reprehenderit consequat ea mollit nostrud duis. Non eu et minim consequat aute. Cupidatat voluptate culpa nisi ex consectetur eiusmod consequat enim elit consequat sit. Deserunt labore amet cupidatat eu et ipsum nulla. Irure ut laboris nisi labore duis velit fugiat enim dolore.</p>
            </div>
          </article>
          <article className='aboutArticle'>
            <div className='aboutImage'>
              <Image
                    src={aboutImages[2]}
                    alt="Shanica Cabading"
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                    className='aboutCardImage'
              />
            </div>
            <div className='aboutText'>
              <label className='aboutTitle'>Lifestyle</label>
              <p className='aboutPar'>Reprehenderit sit consequat laboris laborum eu ipsum fugiat nostrud ea dolore ut pariatur eu. Ut ipsum ad fugiat reprehenderit eu tempor dolore excepteur reprehenderit consequat ea mollit nostrud duis. Non eu et minim consequat aute. Cupidatat voluptate culpa nisi ex consectetur eiusmod consequat enim elit consequat sit. Deserunt labore amet cupidatat eu et ipsum nulla. Irure ut laboris nisi labore duis velit fugiat enim dolore.</p>
            </div>
          </article>
      </main>
    )
}