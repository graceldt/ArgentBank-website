import Banner from '../components/banner';
import FeaturesItem from '../components/features_item';
import icon_chat from '../assets/icon_chat.webp';
import icon_money from '../assets/icon_money.webp';
import icon_security from '../assets/icon_security.webp';




function Home() {


    return (
        <div >
            <Banner/>
            <section className='features'>
            <FeaturesItem title='You are our #1 priority' icon={icon_chat} paragraph='Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes.'/>
            <FeaturesItem title='More savings means higher rates'icon={icon_money} paragraph='The more you save with us, the higher your interest rate will be!'/>
            <FeaturesItem title='Security you can trust'icon={icon_security} paragraph='We use top of the line encryption to make sure your data and money
            is always safe.'/>
            </section>
            
        </div>
    )
}




export default Home;