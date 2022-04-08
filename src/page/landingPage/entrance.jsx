import { useNavigate } from "react-router-dom";

export const Entrance = () => {
  const navigate = useNavigate()

  return (
    <div className="entrance">
      <p className='entrance-title'>Top NFT Game Collections</p>
      <div className="entrance-items">
        <p onClick={() => navigate('/gamefi')}>{'See more >>'}</p>
        <p onClick={() => navigate('/gamefi')}>{'Play to earn >>'}</p>
      </div>
    </div>
  )
}