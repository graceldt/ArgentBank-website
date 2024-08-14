import Account from '../components/account';
import AccountButton from '../components/account_button';
import HeaderUser from '../components/header_user';

function User() {
    return (
        <div className='bg-dark' >
            <HeaderUser/>
            <section className='account'>
                <Account title='Argent Bank Checking (x8349)' amount='$2,082.79' description='Available Balance'/>
                <AccountButton/>
            </section>

            <section className='account'>
                <Account title='Argent Bank Savings (x6712)' amount='$10,928.42' description='Available Balance'/>
                <AccountButton/>
            </section>
        
            <section className='account'>
                <Account title='Argent Bank Credit Card (x8349)' amount='$184.30' description='Current Balance'/>
                <AccountButton/>
            </section>
        </div>
    )
}




export default User;