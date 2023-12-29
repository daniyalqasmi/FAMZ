import Image from 'next/image'
import Contactus from './contactus/page'
import Mostpopular from '@/components/ourproducts'
import Ourcustomers from '@/components/ourcustomers'
import Ourproducts from '@/components/ourproducts'

export default function Home() {
  return (
   <div>
    <Ourproducts/>
    <Ourcustomers/>
   </div>
  )
}
