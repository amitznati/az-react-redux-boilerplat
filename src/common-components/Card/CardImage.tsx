import React from 'react'

export type CardImageProps = React.ImgHTMLAttributes<HTMLImageElement>

const CardImage = React.forwardRef<HTMLElement, CardImageProps>(
  ({ alt, ...props }, ref) => {
    return (
      <figure ref={ref}>
        <img alt={alt} {...props} />
      </figure>
    )
  }
)

export default CardImage
