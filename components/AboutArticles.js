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
              <div className='aboutFrame'>
                <Image
                    src={aboutImages[0]}
                    alt="Shanica Cabading"
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                    className='aboutCardImage'
                />
              </div>

            </div>
            <div className='aboutText'>
              <label className='aboutTitle'>Hello</label>
              <p className='aboutPar'>Hi Shan! Merry Christmas sa atin! Sorry ito lang kaya ko mabigay ngayon. Sorry din kung hindi ko pa matapos ngayon. Marami pa ako dapat ayusin. Sana nagustuhan mo ang design ko haha. Pag natapos ko na ito, pwede mo na iedit ang lahat ng content sa website. Sana maging happy ka na jan and positive lang always. Nandito lang ako always. I love you Shan. I miss you so much.</p>
            </div>
          </article>
          <article className='aboutArticle'>
            <div className='aboutImage revImage'>
              <div className='aboutFrame'>
              <Image
                    src={aboutImages[1]}
                    alt="Shanica Cabading"
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                    className='aboutCardImage'
              />
              </div>
            </div>
            <div className='aboutText revText'>
              <label className='aboutTitle'>Thank you</label>
              <p className='aboutPar'>Thank you for existing in my life. Thank you sa pagiging patient sa akin. Alam ko na minsan disappointing ang mga actions ko. Thank you kasi nandito ka always para sa akin. Kahit wala ka physically, always ko ma feel na kasama parin kita. </p>
            </div>
          </article>
          <article className='aboutArticle'>
            <div className='aboutImage'>
              <div className='aboutFrame'>  
                  <Image
                    src={aboutImages[2]}
                    alt="Shanica Cabading"
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                    className='aboutCardImage'
                  />
              </div>
            </div>
            <div className='aboutText'>
              <label className='aboutTitle'>Wish</label>
              <p className='aboutPar'>Ang wish ko para sayo is ma achieve na natin ang goals natin. okay lang kung slow ang progress basta naga progress tayo. Sana mas ma bless ka ng more opportunities sa life. Opportunity to grow, to learn, and to have fun in life. Alam ko kaya mo jud ma achieve yan lahat Shan and mabilis lang yan mag dating sa life mo. Merry Christmas! I love you.</p>
            </div>
          </article>
      </main>
    )
}