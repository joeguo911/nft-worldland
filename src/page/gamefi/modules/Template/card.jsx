export const Card = (props) => {
  const { info } = props
  return <div className="card">
    <div className="card-img">
      <img src={info.url} />
    </div>
    <div className="card-info">
      <div className="card-info__title">{info.title}</div>
      <div className="card-info__description">{info.description}</div>
    </div>
  </div>
}