"use client";

import React, { useState, useEffect } from 'react';
import Navbar from "../../components/Navbar";
import Footer from '../../components/Footer';
import { graphQLClient } from "../../lib/graphqlClient";
import { gql } from 'graphql-request';
import { BlogNode, BlogsConnectionResponse } from '../../types/blog.type'; // Import types
import Link from 'next/link';
import Image from 'next/image';
import { PulseLoader } from "react-spinners"; // Import the loader
import arrowup from "../../assets/arrow-up.png"
import { blurHashToDataURL } from '@/utils/blurhash';
import { calculateReadingTime } from "../../utils/helper";
import Head from 'next/head';

const Blogs: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogsConnectionResponse['blogsConnection']['edges']>([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await graphQLClient.request<BlogsConnectionResponse>(gql`
          query MyQuery {
            blogsConnection(orderBy: createdAt_ASC) {
              edges {
                node {
                  title
                  slug
                  shortDescription
                  blurHash
                  featuredBlog
                  image {
                    url
                  }
                  content {
                    raw
                    text
                  }
                }
              }
              pageInfo {
                hasNextPage
                hasPreviousPage
                pageSize
              }
            }
          }
        `);

        const data = response?.blogsConnection;
        if (data) {
          setBlogs(data.edges);
        }

      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchBlogs();
  }, []);
  console.log(blogs);
  
  const truncateText = (text: string, wordLimit: number) => {
    const words = text.split(' ');
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(' ') + '...'
      : text;
  };

  const BlogItem: React.FC<{ imageSrc: string; title: string; href: string; description: string; blurHash: string }> = ({ imageSrc, title, href, description, blurHash }) => {
    return (
      <Link href={href}>
        <div className="blog-item rounded-md overflow-hidden">
          <Image
            width={400}
            height={300}
            src={imageSrc} 
            alt={title} 
            placeholder='blur'
            blurDataURL={blurHashToDataURL(blurHash)}
            className="w-full rounded-t-[30px] object-cover h-[300px]" 
          />
          <div className="py-4 px-1">
            <h3 className="text-2xl font-bold font-bebas mb-2">{title}</h3>
            <p className="text-gray-700 text-base hover:underline">{truncateText(description, 15)}</p>
            <p className='flex items-center font-bebas xsm:text-xl text-lg text-bg1  mt-1'>
                READ MORE <Image src={arrowup} alt='arrow-up' className='xsm:w-[32px] w-[30px] xsm:h-[32px] h-[30px]' />
              </p>
          </div>
        </div>
      </Link>
    );
  };

  const BlogFeaturedSection: React.FC<{ blog: BlogNode }> = ({ blog }) => {
    return (
      <div className='flex flex-col items-center bg-bg3'>
        <h1 className='xl:text-[90px] xsm:text-[60px] xsm:leading-[55px] xl:leading-[70px] text-[50px] leading-[45px] font-bebas xsm:mb-10 mb-5 md:mb-16 text-bg1 text-center'>
          BLOGS
        </h1>
        <Link href={`/blogs/${blog.slug}`}>
          <div className='flex flex-col custom-lg:flex-row items-center custom-lg:justify-evenly justify-center z-10 overflow-hidden '>
            <div className='custom-lg:mr-10 custom-lg:mb-0 mb-8 custom-lg:w-1/2 w-full flex items-center justify-center'>
              <Image
                
                src={blog.image?.url || "https://via.placeholder.com/600x500"} 
                alt={blog.title} 
                placeholder='blur'
                blurDataURL={blurHashToDataURL(blog.blurHash)}
                className='rounded-[30px] xsm:w-[600px] xsm:h-[550px] w-[400px] h-[450px]'
                width={600}
                height={400}
                
              />
            </div>
            <div className='flex flex-col custom-lg:items-start custom-lg:w-1/2 w-full'>
              <h1 className='xl:text-[70px] xsm:text-[60px] xsm:leading-[55px] xl:leading-[62px] text-[50px] leading-[45px] font-bebas text-bg1 max-w-[600px] mb-4'>
                {blog.title}
              </h1>
              <div className='flex items-start' >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 mt-1 mr-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              <p className='xsm:mb-10 mb-6 font-nunito uppercase text-bg1 font-semibold text-lg' >
              {calculateReadingTime(blog?.content?.text)} minute reading
              </p>
              </div>
              <p className='xsm:text-2xl text-xl font-rubik custom-lg:max-w-[680px] max-w-sreen text-bg1 xsm:mb-10 mb-6 '>
                {blog.shortDescription}
              </p>
              <p className='flex items-center font-bebas xsm:text-3xl text-xl text-bg1 font-bold'>
                READ MORE <Image src={arrowup} alt='arrow-up' className='xsm:w-[45px] w-[35px] xsm:h-[45px] h-[35px]' />
              </p>
            </div>
          </div>
        </Link>
      </div>
    );
  };

  const featuredBlogs = blogs.filter(({ node }) => node.featuredBlog);
  const firstFeaturedBlog = featuredBlogs.length > 0 ? featuredBlogs[0].node : null;
  const firstBlogImage = blogs.length > 0 ? blogs[0].node.image.url : "";


  return (

    <div>
          <Head>
        <title>{"Blogs on Food in Atlanta by Bawarchi Atlanta"}</title>
        <link rel="canonical" href={`https://bawarchiatlanta.com/blogs`} />
        <meta
          name="description"
          content="Check out the latest blogs on Food and Catering by Bawarchi Atlanta"
        />
        {/* OG Tags */}
        <meta
          property="og:title"
          content={"Blogs on Food in Atlanta by Bawarchi Atlanta"}
        />
          <meta property="og:image" content={firstBlogImage} />

        <meta property="og:url" content={`https://bawarchiatlanta.com/blogs`} />

        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content={
            "Check out the latest blogs on Food and Catering by Bawarchi Atlanta"
          }
        />
        <meta name="twitter:card" content="summary" />
        <meta
          property="twitter:title"
          content={"Blogs on Food in Atlanta by Bawarchi Atlanta"}
        />
        <meta
          property="twitter:description"
          content={
            "Check out the latest blogs on Food and Catering by Bawarchi Atlanta"
          }
        />
        <meta
          property="twitter:url"
          content={`https://bawarchiatlanta.com/blogs`}
        />
      </Head>
      <Navbar />
      <div className="blog-content-section px-4 py-8 bg-bg3 min-h-[60vh]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-bg1">Our Blog</h2>
          {loading ? (
            <div className="flex h-[50vh] justify-center items-center">
              <PulseLoader color="#1e212d" size={12} /> {/* Loader component */}
            </div>
          ) : (
            <>
              {firstFeaturedBlog && <BlogFeaturedSection blog={firstFeaturedBlog} />}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                {blogs
                   .filter(({ node }) => !node.featuredBlog || node.slug !== firstFeaturedBlog?.slug)
                  .map(({ node }) => (
                    node && (
                      <BlogItem
                        key={node.title}
                        href={`/blogs/${node.slug}`}
                        imageSrc={node.image?.url || 'https://via.placeholder.com/380x280'}
                        title={node.title}
                        description={node.shortDescription}
                        blurHash={node.blurHash}
                      />
                    )
                  ))}
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
