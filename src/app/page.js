import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import Headline from '@/components/typography/Headline/Headline'
import HeadlineSm from '@/components/typography/Headline/HeadlineSm'
// import Headline from '../components/typography/Headline/Headline'
import SubHeading from '../components/typography/SubHeading/SubHeading'
import Text from '../components/typography/Text/Text'
import TextBold from '../components/typography/Text/TextBold'
import SegmentButton from '../components/mains/SegmentButton/SegmentButton'
import Card from '../components/mains/card/Card'
import CardSecond from '../components/mains/card/CardSecond'
import Row from '../components/mains/row/Row'
import LogoDesc from '../components/mains/LogoDesc/LogoDesc'

import firstExample from '../../public/firstExample.png'
import secondExample from '../../public/secondExample.png'
import thirdExample from '../../public/thirdExample.png'
import raff from '../../public/raff.png'
import Alfa from '../../public/alfa.png'
import tink from '../../public/tink.png'
import vtb from '../../public/vtb.png'
import sign from '../../public/sign.png'
import portrait from '../../public/portrait.png'
import commas from '../../public/comas.svg'




export default function Home() {
  return (
    <>
    <div className={styles.gradient}></div>
    <main className={styles.main}>
      <div className={styles.mainHeadlineWrapper}>
        <h1 className={styles.mainHeadline}>Независимая оценка и экспертиза всех видов имущества</h1>
        <Text style={{width: '50%' }}>Мы делаем независимую экспертизу и оцениваем рыночную стоимость имущества. Работаем в рамках судебных и досудебных споров или для сделок с имуществом.</Text>
        <div className={styles.buttonWrapper}>
          <SegmentButton className="active">ОЦЕНКА</SegmentButton>
          <SegmentButton className="default">ЭКСПЕРТИЗА</SegmentButton>
          <SegmentButton className="default">ЮРИДИЧЕСКИЕ УСЛУГИ</SegmentButton>
        </div>

        <div className={styles.cards}>
          <div className={styles.cardRow}>
            <Card href="assessments/property" linkText="Еще 7 услуг" >
              <SubHeading style={{height: "60px"}}>Недвижимость </SubHeading>
              <Text>Оценка квартиры</Text>
              <Text>Оценка загородной недвижимости</Text>
              <Text>Оценка комнаты</Text>
            </Card>

            <Card href="/" linkText="Еще 8 услуг" >
              <SubHeading style={{height: "60px"}}>Транспортные средства</SubHeading>
              <Text>Оценка автомобилей</Text>
              <Text>Оценка автомобиля для наследства</Text>
              <Text>Оценка морских судов</Text>
            </Card>

            <Card href="/" linkText="Еще 15 услуг" >
              <SubHeading style={{height: "60px"}}>Коммерческой недвижимости</SubHeading>
              <Text>Оценка нежелых помещений</Text>
              <Text>Оценка зданий</Text>
              <Text>Оценка офисных помещений</Text>
            </Card>
          </div>

          <div className={styles.cardRow}>
            <Card href="/" linkText="Еще 8 услуг" >
              <SubHeading style={{height: "60px"}}>Движимого имущества</SubHeading>
              <Text>Оценка оборудования</Text>
              <Text>Оценка оружия</Text>
              <Text>Оценка станков и спец. машин</Text>
            </Card>

            <Card href="/" linkText="Еще 7 услуг" >
              <SubHeading style={{height: "60px"}}>Нематериальные активы</SubHeading>
              <Text>Оценка товарных знаков</Text>
              <Text>Оценка бренда</Text>
              <Text>Оценка авторских прав</Text>
            </Card>

            <Card href="/" linkText="Еще 13 услуг" >
              <SubHeading style={{height: "60px"}}>Бизнес и ценные бумаги</SubHeading>
              <Text>Оценка стоимости компании</Text>
              <Text>Оценка стоимости доли в ООО</Text>
              <Text>Оценка доли уставного капитала</Text>
            </Card>
          </div>
        </div>
        

        <HeadlineSm>
          Примеры работ:
        </HeadlineSm>

        <div className={styles.cards}>
        <div className={styles.cardRow}>
         <CardSecond>
            <TextBold>Экспертиза авто после ДТП</TextBold>
            <Text>Оценили стоимость ущерба после ДТП, установили виновника и помогли клиенту в судебном порядке взыскать со страховой 800 тыс. ₽</Text>
            <Image 
              style={{width: "auto", height: "185px"}}
              className={styles.example}
              alt="arrow"
              src={firstExample}>
            </Image>
            <Row label='Клиент' value="Частное лицо"></Row>
            <Row label='Сумма взыскания' value="800 тыс. ₽"></Row>
            <Row label='Дата экспертизы' value="22.05.2022"></Row>
          </CardSecond>
          
          <CardSecond>
            <TextBold>Оценка ущерба после залива </TextBold>
            <Text>Оценили стоимость ущерба после залива, установили виновника и помогли клиенту в судебном порядке взыскать со страховой 400 тыс. ₽</Text>
            <Image 
              style={{width: "auto", height: "185px"}}
              className={styles.example}
              alt="arrow"
              src={secondExample}>
            </Image>
            <Row label='Клиент' value="Частное лицо"></Row>
            <Row label='Дата экспертизы' value="22.05.2022"></Row>
            <Row label='Сумма взыскания' value="400 тыс. ₽"></Row>
          </CardSecond>

          <CardSecond>
            <TextBold>Экспертиза авто после ДТП</TextBold>
            <Text>Оценили стоимость ущерба после ДТП, установили виновника и помогли клиенту в судебном порядке взыскать со страховой 800 тыс. ₽</Text>
            <Image 
              style={{width: "auto", height: "185px"}}
              className={styles.example}
              alt="arrow"
              src={thirdExample}>
            </Image>
            <Row label='Клиент' value="Частное лицо"></Row>
            <Row label='Сумма взыскания' value="800 тыс. ₽"></Row>
            <Row label='Дата экспертизы' value="22.05.2022"></Row>
          </CardSecond>       
        </div>
        </div>

        <HeadlineSm>
          Наши клиенты:
        </HeadlineSm>

        <div className={styles.logoDescWrapper}>
          <LogoDesc src={Alfa} alt="alfa" desc="Альфа-Банк" />
          <LogoDesc src={tink} alt="tink" desc="Тинькофф" />
          <LogoDesc src={vtb} alt="vtb" desc="ВТБ" />
          <LogoDesc src={tink} alt="tink" desc="Тинькофф" />
          <LogoDesc src={Alfa} alt="alfa" desc="РоссельхозБанк" />
          <LogoDesc src={vtb} alt="vtb" desc="ВТБ" />
          <LogoDesc src={tink} alt="tink" desc="Тинькофф" />
          <LogoDesc src={raff} alt="raff" desc="Раффайзен" />
          <LogoDesc src={tink} alt="tink" desc="Росгострах" />
          <LogoDesc src={raff} alt="raff" desc="Раффайзен" />
          <LogoDesc src={vtb} alt="vtb" desc="ВТБ" />
          <LogoDesc src={tink} alt="tink" desc="Серпуховской суд" />
          <LogoDesc src={raff} alt="raff" desc="Люберецкий суд" />
          <LogoDesc src={tink} alt="tink" desc="Московский суд" />
          <LogoDesc src={raff} alt="raff" desc="Правительство Москвы" />
        </div>

        <div className={styles.commentBanner}>
          <div className={styles.commentBannerDescWrapper}>
          <Image 
              className={styles.commas}
              alt="commas"
              src={commas}>
            </Image>
            <p className={styles.commentBannerText}>
              Мы всегда отдаем предпочтение тем экспертам, которые выполняют свою работу чётко и в срок. На экспертов НЭО-Бюро можно полностью положить и довериться их проффесионализму
            </p>
            <TextBold>Шенфогель Андрей</TextBold>
            <Text>Юрист в Правовом Аудите</Text>
            <Image 
              className={styles.sign}
              alt="sign"
              src={sign}>
            </Image>
          </div>   
            <Image 
              className={styles.portrait}
              alt="portrait"
              src={portrait}>
            </Image>
        </div>

      </div>
    </main>
    </>
  )
}
