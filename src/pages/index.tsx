import Head from 'next/head';

import { NewModal } from '../components/NewModal';

import styles from './home.module.scss';
import { FaAngleDown } from 'react-icons/fa';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import SwiperCore, {
  Pagination,
  Autoplay
} from 'swiper';

SwiperCore.use([Pagination, Autoplay]);

export default function Home() {

  function handleButtonLink(link) {
    window.location.href = link
  }

  return (
    <div className={styles.container} >
      <Head>
        <title>Links | Pri Limas </title>
      </Head>

      <button
        type="button"
        className={styles.button}
        onClick={() => handleButtonLink('https://api.whatsapp.com/send?phone=5548988167572&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento!%20')}
      >
        Fale com um de nossos atendentes
      </button>

      <button
        type="button"
        className={styles.button}
        onClick={() => handleButtonLink('https://www.instagram.com/pricila.limas/')}
      >
        Siga nosso perfil no instagram
      </button>

      <button
        type="button"
        className={styles.button}
        onClick={() => handleButtonLink('https://www.facebook.com/profile.php?id=100010366846305')}
      >
        Siga nossa página no facebook
      </button>

      <div className={styles.separator} ><FaAngleDown /></div>

      <Swiper pagination={{ 'clickable': true }} autoplay={{ 'delay': 4000, 'disableOnInteraction': false }} >
        {/* <SwiperSlide>
          <img className={styles.image} src="/banner_1.png" alt="Swift promotora" />
        </SwiperSlide> */}
      </Swiper>

      <footer>
        <h2>Obrigado!</h2>
        <span>@pricila.limas</span>
      </footer>
    </div>
  )
}
