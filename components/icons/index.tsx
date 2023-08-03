import cn from 'clsx'
import { type ComponentProps, type SVGProps } from 'react'
import IconGitHub from './icon-github'
import IconGoogle from './icon-google'
import IconTwitter from './icon-twitter'
import IconX from './icon-x'

export const icons = {
  x: (props: SVGProps<SVGSVGElement>) => <IconX {...props} />,
  google: (props: SVGProps<SVGSVGElement>) => <IconGoogle {...props} />,
  github: (props: SVGProps<SVGSVGElement>) => <IconGitHub {...props} />,
  twitter: (props: SVGProps<SVGSVGElement>) => <IconTwitter {...props} />,
}

export type Icon = keyof typeof icons

type IconComponentProps = ComponentProps<'svg'> & {
  icon: Icon
}

export const IconComponent: React.FC<IconComponentProps> = ({
  icon,
  ...props
}) => {
  const Component = icons[icon]
  const classes = cn('fill-current', props.className)
  return <Component className={classes} {...props} />
}

export default IconComponent
