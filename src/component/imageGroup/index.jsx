import './index.scss'

export const ImageGroup = (props) => {
  const {imageData} = props
  return (
    <div className="image-container">
      <div className='image-group'>
        <div className='leftArrow'></div>
        {
          imageData.map(image => {
            return (
              <div className='image-group-item' key={image.src}>
                <img src={image.src} />
                <p>{image.title}</p>
              </div>
            )
          })
        }
        <div className='rightArrow'></div>
      </div>
    </div>
  )

}