import { Fragment } from 'react';
import Head from 'next/head';
import axios from 'axios';
import Link from 'next/link'

import FeaturedPosts from '../components/home-page/featured-posts';
import Hero from '../components/home-page/hero';
import { getFeaturedPosts } from '../lib/posts-util';

const HomePage = (props) => {
    return (
        <Fragment>
            <Head>
                <title>Max' Blog</title>
                <meta
                    name='description'
                    content='I post about programming and web development.'
                />
            </Head>
            <Hero />
            <FeaturedPosts posts={props.posts} />
            <section className='featured-posts_latest__raFNZ'>
                <p>Users</p>
                {props?.users?.length > 0 && props?.users?.map((item, index) => {
                    return <Link legacyBehavior  href={`/user/${item?.id}`} key={index} passHref={true}>
                        <h1 role='button' className='test'>{item?.name}</h1>
                    </Link>
                })}
            </section>
        </Fragment>
    )
}

export const getStaticProps = async () => {
    const featuredPosts = getFeaturedPosts();

    try {
        const result = await axios.get('https://jsonplaceholder.typicode.com/users')
        // console.log('result')
        // console.log(result?.data)
        return {
            props: {
                posts: featuredPosts,
                users: result?.data
            },
        };
    } catch (error) {
        console.log(error)
        return {
            props: {
                posts: featuredPosts
            },
        };
    }
}

export default HomePage;
