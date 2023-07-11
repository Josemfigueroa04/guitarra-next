import Head from 'next/head'
import Header from './header'
import Fooder from './fooder'

export default function Layout({ children, title="", description="" }) {

    return (
        <>
            <Head>
                <title>{`GuitarLA - ${title}`}</title>
                <meta name="description" content={description} />

            </Head>
            <Header />
            <h1>Desde Layout</h1>
            {children}
            <Fooder />
        
        </>
       
    )
}