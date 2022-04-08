import { ConnectWallet } from "../../../../component/connectWallet"
import { SearchBar } from "../../../../component/searchBar"
import './index.scss'
const tableColumns = [{
  cls: 'name',
  title: '12'
}, {
  cls: 'name1',
  title: '12'
}, {
  cls: 'name2',
  title: '12'
}, {
  cls: 'name3',
  title: '12'
},{
  cls: 'name4',
  title: '12'
},{
  cls: 'name5',
  title: '12'
}]
const data = [{
  name: '1',
  blockchain: "corrrr",
  token: 'cro',
  template: 'NT123',
  address: 'X0123456789',
  status: 'active'
},{
  name: '1',
  blockchain: "corrrr",
  token: 'cro',
  template: 'NT123',
  address: 'X0123456789',
  status: 'active'
},{
  name: '1',
  blockchain: "corrrr",
  token: 'cro',
  template: 'NT123',
  address: 'X0123456789',
  status: 'active'
},{
  name: '1',
  blockchain: "corrrr",
  token: 'cro',
  template: 'NT123',
  address: 'X0123456789',
  status: 'active'
},{
  name: '1',
  blockchain: "corrrr",
  token: 'cro',
  template: 'NT123',
  address: 'X0123456789',
  status: 'active'
},{
  name: '1',
  blockchain: "corrrr",
  token: 'cro',
  template: 'NT123',
  address: 'X0123456789',
  status: 'active'
}, ]

export const Mint = () => {
  return <div className="mint">
    <ConnectWallet />
    <div className="mint-title">
      <div>You mint it, you own it!</div>
      <div>Your game is an NFT now!</div>
    </div>
    <div className="mint-content">
      <SearchBar title='Search'/>
      <div className="mint-table">
      <div className="mint-table-header">
        <div class="header-item">Game Name</div>
        <div class="header-item">Blockchain</div>
        <div class="header-item">Token</div>
        <div class="header-item">Template</div>
        <div class="header-item">Contract Address</div>
        <div class="header-item">Deploy Status</div>
      </div>
      <div className="mint-table-content">
        {
          data.map(item => {
            return (
              <div className="mint-table-row">
                <div class="row-item">{item.name}</div>
                <div class="row-item">{item.blockchain}</div>
                <div class="row-item">{item.token}</div>
                <div class="row-item">{item.template}</div>
                <div class="row-item">{item.address}</div>
                <div class="row-item">{item.status}</div>
            </div>
            )
          })
        }
      </div>
      </div>
    </div>
  </div>
}