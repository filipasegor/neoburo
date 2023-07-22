import Image from 'next/image'
import Link from 'next/link'

import styles from './page.module.scss'

import ArrowBack from '../../../../components/mains/ArrowBack/ArrowBack'
import Headline from '../../../../components/typography/Headline/Headline'
import HeadlineSm from '../../../../components/typography/Headline/HeadlineSm'
import Text from '../../../../components/typography/Text/Text'
import Card from '../../../../components/mains/card/Card'
import SubHeading from '../../../../components/typography/SubHeading/SubHeading'
import Bullet from '../../../../components/mains/Bullet/Bullet'
import ImgWrapper from '../../../../components/mains/ImgWrapper/ImgWrapper'
import DocumentWrapper from '../../../../components/mains/DocumentWrapper/DocumentWrapper'
import Value from '../../../../components/mains/Value/Value'
import LogoDesc from '../../../../components/mains/LogoDesc/LogoDesc'


import flat from '../../../../../public/flat.png'
import FlatDoc1 from '../../../../../public/FlatDoc1.png'
import FlatDoc2 from '../../../../../public/FlatDoc2.png'
import FlatDoc3 from '../../../../../public/FlatDoc3.png'

import raff from '../../../../../public/raff.png'
import Alfa from '../../../../../public/alfa.png'
import tink from '../../../../../public/tink.png'
import vtb from '../../../../../public/vtb.png'

import bank1 from '../../../../../public/bank1.png'
import bank2 from '../../../../../public/bank2.png'
import bank3 from '../../../../../public/bank3.png'

import propertyDoc1 from '../../../../../public/propertyDoc1.png'
import propertyDoc2 from '../../../../../public/propertyDoc2.png'
import propertyDoc3 from '../../../../../public/propertyDoc3.png'
import propertyDoc4 from '../../../../../public/propertyDoc4.png'

export const metadata = {
  title: 'Оценка квартиры',
  description: 'Независимая оценка и экспертиза всех видов имущества',
}

export default function AssessmentsPropertyFlat() {
  return (
    <main className={styles.main}>
        <ArrowBack /> 
        <div className={styles.HeadWrapper}>
          <Headline>Оценка квартиры</Headline>
          <div className={styles.mainDescription}>
           <Text>Определение рыночной стоимости недвижимости и создание отчета об оценке – официального документа, подтверждающего ликвидность объекта для банка или иных целей</Text>
           <div className={styles.valueWrapper}>
            <Value label="Стоимость" value="от 10 000 ₽"></Value>
            <Value label="Срок" value="от 5 дней"></Value>
           </div>
          </div>
        </div> 
        <Image 
          className={styles.mainImage}
          alt="flat"
          src={flat}>
        </Image>

      <HeadlineSm>Как проводится оценка и что для этого нужно?</HeadlineSm>
      <Text style={{width: "730px", marginTop: "20px"}}>Оценка недвижимости начинается с предварительной консультации и заключения договора. В договоре обозначается задание на оценку, сроки проведения стоимость услуг. Для заключения договора на оценку квартиры для ипотеки или иных целей вам потребуется:</Text>
        <div className={styles.documentWrapper}>
          <DocumentWrapper src={FlatDoc1} alt="FlatDoc1" desc="Выписка из ЕГРН или договор долевого участия с актом приема-передачи"/>
          <DocumentWrapper src={FlatDoc2} alt="FlatDoc2" desc="Экспликация и поэтажный план на квартиру (технический паспорт)" />
          <DocumentWrapper src={FlatDoc3} alt="FlatDoc3" desc="Экспликация и поэтажный план на квартиру (технический паспорт)" />
        </div>
        <Text style={{width: "730px", marginBottom: "50px"}}>После получения копий документов, при необходимости, наш специалист выезжает на осмотр объекта оценки, осматривает объект и проводит фотоциксацию. Процедура оценки квартиры занимает до 3 рабочих дней. Далее отчет направляется клиенту вместе с актом оказанных услуг, на котором клиенту необходимо поставить подпись. Доставка отчета возможна в зависимости от района расположения</Text>
        
        <HeadlineSm>Что учитывают оценщики?</HeadlineSm>
        <Text style={{width: "730px", marginTop: "20px"}}>Подготавливая отчет об оценке недвижимости, аккредитованная Сбербанком оценочная компания ООО «НЭО Бюро», учитывает большое количество критериев, а именно:</Text>
        <div className={styles.bulletWrapper}>
          <Bullet>Развитость инфраструктуры (наличие школ, магазинов, больниц и прочих объектов поблизости)</Bullet>
          <Bullet>Экологическая ситуация (наличие промышленных объектов, свалок и пр.).</Bullet>
          <Bullet>Планировка объекта</Bullet>
          <Bullet>Техническое состояние здания в целом и квартиры в частности</Bullet>
          <Bullet>Транспортная развязка</Bullet>
          <Bullet>При оформлении договора дарения или завещания (по желанию собственника)</Bullet>
          <Bullet>Качество ремонта или наличие чистовой отделки в случае с новостройками</Bullet>
        </div>

        <HeadlineSm>Преимущества Нашей Компании</HeadlineSm>
        <Text style={{width: "730px", marginTop: "20px", marginBottom: "20px"}}>
        Экспертно-оценочная компания ООО «НЭО Бюро» профессионально занимается подготовкой отчетов об оценке рыночной стоимости имущества для Сбербанка, а также оценивают недвижимость в других целях. За годы практики сотрудники накопили бесценный опыт, позволяющий делать свою работу на высоком уровне и отвечать за результат. Отчеты нашей компании соответствуют всем требованиям законодательства, а оценщики являются членами СРО, имеют квалификационные аттестаты и страховой полис.
        </Text>
        <Link href="https://intellect-valuation.ru/files/131" className={styles.link}>ПАО СБЕРБАНК. Включение в Перечень оценочных организаций.</Link>

        <HeadlineSm style={{marginTop: "80px"}}>Наша компания аккредитована:</HeadlineSm>
        <div className={styles.logoDescWrapper}>
          <LogoDesc src={Alfa} alt="alfa" desc="в Сбербанке" />
          <LogoDesc src={raff} alt="tink" desc="Газпромбанке" />
          <LogoDesc src={vtb} alt="tink" desc="Совкомбанке" />
          <LogoDesc src={tink} alt="tink" desc="Банке Уралсиб" />
          <LogoDesc src={vtb} alt="tink" desc="Московском индустриальном бане" />
          <LogoDesc src={tink} alt="tink" desc="Райффайзенбанке" />
          <LogoDesc src={raff} alt="tink" desc="Банк Россия" />
        </div>

        <ImgWrapper desc="Отчеты нашей компании принимаются банками:">
          <Image 
            className={styles.bankImage}
            alt="bank1"
            src={bank1}>
          </Image>
          <Image 
            className={styles.bankImage}
            alt="bank2"
            src={bank2}>
          </Image>
          <Image 
            className={styles.bankImage}
            alt="bank3"
            src={bank3}>
          </Image>
          <Image 
            className={styles.bankImage}
            alt="bank1"
            src={bank1}>
          </Image>
        </ImgWrapper>

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