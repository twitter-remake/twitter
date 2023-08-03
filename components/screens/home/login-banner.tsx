import IconComponent from '@/components/icons'
import Image from 'next/image'

export const LoginBanner = () => (
  <section className="relative overflow-hidden w-full min-h-[45vh] bg-blue flex flex-shrink justify-center items-center">
    <Image
      src="/landing/whats_happening.png"
      priority
      fill
      quality={100}
      sizes="100%"
      draggable={false}
      className="object-cover object-center"
      alt="Twitter banner"
    />
    <i className="absolute">
      <IconComponent
        icon="twitter"
        className="text-[#fff] w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96"
      />
    </i>
  </section>
)

export default LoginBanner
