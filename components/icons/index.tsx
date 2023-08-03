import cn from 'clsx'
import { type ComponentProps, type SVGProps } from 'react'
import IconGitHub from './IconGitHub'
import IconGoogle from './IconGoogle'
import IconTwitter from './IconTwitter'
import IconX from './IconX'

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
