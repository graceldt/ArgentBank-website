import { useState } from 'react';
import Account from '../components/account';
import AccountButton from '../components/account_button';
import EditUsername from '../components/edit_username';
import Username from '../components/username';

const Dashboard = () => {
    
    const [open, setOpen]= useState(false)

    function handleOpen (){
        setOpen(!open)
    }
    return (
        <div className='bg-dark' >
            {
                open ? <EditUsername editData={handleOpen} />
                : <Username editData={handleOpen}/>
            }
            
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




export default Dashboard;