import Image from 'next/image'
import Link from 'next/link'

import styles from './page.module.scss'

import ArrowBack from '../../../components/mains/ArrowBack/ArrowBack'
import Headline from '../../../components/typography/Headline/Headline'
import HeadlineSm from '../../../components/typography/Headline/HeadlineSm'
import Text from '../../../components/typography/Text/Text'
import Card from '../../../components/mains/card/Card'
import SubHeading from '../../../components/typography/SubHeading/SubHeading'
import Bullet from '../../../components/mains/Bullet/Bullet'
import ImgWrapper from '../../../components/mains/ImgWrapper/ImgWrapper'

import property from '../../../../public/property.png'
import propertyDoc1 from '../../../../public/propertyDoc1.png'
import propertyDoc2 from '../../../../public/propertyDoc2.png'
import propertyDoc3 from '../../../../public/propertyDoc3.png'
import propertyDoc4 from '../../../../public/propertyDoc4.png'

export const metadata = {
  title: 'Оценка недвижимости',
  description: 'Независимая оценка и экспертиза всех видов имущества',
}

export default function AssessmentsProperty() {
  return (
    <main className={styles.main}>
        <ArrowBack /> 
        <div className={styles.HeadWrapper}>
          <Headline>Оценка недвижимого имущества</Headline>
          <Text>Oцeнка cтoимocти нeдвижимocти — это профессиональная деятельность, направленная на установление стоимости конкретного объекта. Объектами для оценки недвижимости являются квартиры и комнаты, дачи и земля, коммерческие объекты (офисы, производственные цеха и тд.).</Text>
          <Text>Компания НЭО Бюро проведет для вас оценочное исследование для достижения любой цели. Наши специалисты предоставят точный результат. Обращайтесь на первую консультацию, чтобы узнать подробности.</Text>
        </div> 
        <Image 
          className={styles.mainImage}
          alt="property"
          src={property}>
        </Image>

      <HeadlineSm>Направления оценки недвижимости:</HeadlineSm>
      <div className={styles.cards}>
          <div className={styles.cardRow}>
            <Card href="property/flat" linkText="Подробнее" >
              <SubHeading style={{height: "60px"}}>Оценка квартиры</SubHeading>
              <Text>от 4 000 ₽</Text>
              <Text>от 5 дней</Text>
            </Card>

            <Card href="assessments/property" linkText="Подробнее" >
              <SubHeading style={{height: "60px"}}>Оценка загородной недвижимости</SubHeading>
              <Text>от 4 000 ₽</Text>
              <Text>от 5 дней</Text>
            </Card>

            <Card href="assessments/property" linkText="Подробнее" >
              <SubHeading style={{height: "60px"}}>Оценка комнаты</SubHeading>
              <Text>от 4 000 ₽</Text>
              <Text>от 5 дней</Text>
            </Card> 
          </div>

          <div className={styles.cardRow}>
            <Card href="/" linkText="Подробнее" >
              <SubHeading style={{height: "60px"}}>Оценка земельного участка</SubHeading>
              <Text>от 4 000 ₽</Text>
              <Text>от 5 дней</Text>
            </Card>

            <Card href="/" linkText="Подробнее">
              <SubHeading style={{height: "60px"}}>Бизнес и ценные бумаги</SubHeading>
              <Text>от 4 000 ₽</Text>
              <Text>от 5 дней</Text>
            </Card>

            <Card href="/" linkText="Подробнее" >
              <SubHeading style={{height: "60px"}}>Оценка стоимости гаража</SubHeading>
              <Text>от 4 000 ₽</Text>
              <Text>от 5 дней</Text>
            </Card>
          </div>
        </div>
        
        <HeadlineSm>В каких случаях проводится:</HeadlineSm>
        <div className={styles.bulletWrapper}>
          <Bullet>При продаже или покупке квартиры</Bullet>
          <Bullet>Для обмена недвижимости</Bullet>
          <Bullet>При оформлении ипотеки</Bullet>
          <Bullet>Для раздела имущества по суду</Bullet>
          <Bullet>Для определения активов компании</Bullet>
          <Bullet>При оформлении договора дарения или завещания (по желанию собственника)</Bullet>
          <Bullet>Для использования квартиры в качестве залога</Bullet>
        </div>

        <ImgWrapper desc="Лицензии">
          <Image 
            className={styles.document}
            alt="propertyDoc1"
            src={propertyDoc1}>
          </Image>
          <Image 
            className={styles.document}
            alt="propertyDoc2"
            src={propertyDoc2}>
          </Image>
          <Image 
            className={styles.document}
            alt="propertyDoc3"
            src={propertyDoc3}>
          </Image>
          <Image 
            className={styles.document}
            alt="propertyDoc4"
            src={propertyDoc4}>
          </Image>
        </ImgWrapper>
      

    </main>
  )
}