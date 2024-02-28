import { Caption } from '@/components/ui/Caption/Caption'
import { ECaptionSize } from '@/components/ui/Caption/caption.interface'
import { Card } from '@/components/ui/Card/Card'
import { data } from '@/components/ui/Card/card.example-data'
import './home.scss'

export default function Home() {
  return (
    <div className='home'>
      <Caption size={ECaptionSize.xl}>
        Мой словарь
      </Caption>
      <div className="home__content">
        <Card item={data} />
        <Card item={data} />
        <Card item={data} />
        <Card item={data} />
        <Card item={data} />
      </div>
    </div>
  )
}
