import { type ComponentProps, type SVGProps } from 'react'
import cn from '../../lib/cn'
import IconChevronDown from './icon-chevron-down'
import IconGitHub from './icon-github'
import IconGoogle from './icon-google'
import IconTwitter from './icon-twitter'
import IconX from './icon-x'

export const icons = {
  x: (props: SVGProps<SVGSVGElement>) => <IconX {...props} />,
  google: (props: SVGProps<SVGSVGElement>) => <IconGoogle {...props} />,
  github: (props: SVGProps<SVGSVGElement>) => <IconGitHub {...props} />,
  twitter: (props: SVGProps<SVGSVGElement>) => <IconTwitter {...props} />,
  'chevron-down': (props: SVGProps<SVGSVGElement>) => (
    <IconChevronDown {...props} />
  ),
}

export type IconName = keyof typeof icons

type IconComponentProps = ComponentProps<'svg'> & {
  name: IconName
}

const Icon: React.FC<IconComponentProps> = ({ name, ...props }) => {
  const Component = icons[name]
  const classes = cn('fill-current', props.className)
  return <Component className={classes} {...props} />
}

export default Icon
