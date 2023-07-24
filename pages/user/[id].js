import Head from 'next/head';
import { Fragment } from 'react';
import axios from 'axios';

const UserDetailPage = (props) => {
    return (
        <Fragment>
            <Head>
                <title>{props?.user?.name}</title>
                <meta name='description' content={props?.user?.email} />
                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content={props?.user?.name} />
                <meta property="og:description" content={props?.user?.email} />
            </Head>
            <h1>{props?.user?.name}</h1>
            <h1>{props?.user?.email}</h1>
            <h1>{props?.user?.username}</h1>
            <h1>{props?.user?.phone}</h1>
            <h1>{props?.user?.website}</h1>
        </Fragment>
    )
}

// export const getStaticProps = async (context) => {
//     const { params } = context;
//     const { id } = params;

//     console.log('id', id)

//     try {
//         const result = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
//         // console.log('result')
//         // console.log(result?.data)
//         return {
//             props: {
//                 user: result?.data
//             }
//         };
//     } catch (error) {
//         console.log(error)
//         return {
//             props: {
//                 user: {}
//             }
//         };
//     }
// }

// export const getStaticPaths = () => {
//     return {
//         paths: [], //indicates that no page needs be created at build time
//         fallback: 'blocking' //indicates the type of fallback
//     }
// }

export const getServerSideProps = async (context) => {
    const { params } = context;
    const { id } = params;

    console.log('id', id)

    try {
        const result = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        // console.log('result')
        // console.log(result?.data)
        return {
            props: {
                user: result?.data
            }
        };
    } catch (error) {
        console.log(error)
        return {
            props: {
                user: {}
            }
        };
    }
}

export default UserDetailPage;
