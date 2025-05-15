import HeaderImage from '@src/components/pages/chat/components/assets/header-img.png';
import { ArrowLeft } from '@src/components/pages/chat/components/icons/arrow-left';

export const Header = () => {
  return (
    <header className='flex w-full'>

      <img src={HeaderImage} alt='image' />
    </header>
  )
}