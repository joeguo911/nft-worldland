import { Header } from './header/header'
import { Footer } from './footer/footer'
import { PageContent } from './PageContent'

import './pageContainer.scss'

export const PageContainer = () => {
  return <div className='pageContainer'>
          <Header/>
          <PageContent />
          <Footer />
        </div>
}