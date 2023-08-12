import { SVGProps } from 'react'

const IconChevronDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className={props.className}
    {...props}
    fill="currentColor"
  >
    <path d="m3.543 8.96 1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z" />
  </svg>
)
export default IconChevronDown
