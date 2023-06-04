import Hero from './z-module/components/Hero'
import Content from './z-module/components/Content'
import Video from './z-module/components/Video'
import Values from './z-module/components/Values'
import Team from './z-module/components/Team'

export const metadata = {
  title: 'Фабрика ЗОВ | О компании ЗОВ',
  description: 'Информация о фабрике ЗОВ',
}

export default function Page() {
  return (
      <div className="bg-white">
        <main className="isolate">
          <Hero/>
          <Content/>
          <Video/>
          <Values/>
          <Team/>
        </main>
      </div>
  )
}
