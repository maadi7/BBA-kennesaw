// types.ts

export interface BlogImage {
    url: string;
  }
  
  export interface BlogContent {
    raw: any;
    text: string;
  }
  
  export interface BlogNode {
    title: string;
    slug: string;
    shortDescription: string;
    image: BlogImage;
    content: BlogContent;
  }
  
  export interface BlogEdge {
    node: BlogNode;
  }
  
  export interface PageInfo {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    pageSize: number;
  }
  
  export interface BlogsConnection {
    edges: BlogEdge[];
    
  }
  
  export interface BlogsConnectionResponse {
    blogsConnection: BlogsConnection;
  }
  

export interface BlogImage {
    url: string;
  }
  
  export interface BlogContent {
    raw: any;
    text: string;
  }
  
  export interface BlogNode {
    title: string;
    slug: string;
    shortDescription: string;
    image: BlogImage;
    content: BlogContent;
    blurHash: string;
    featuredBlog: boolean
    
  }
  
  export interface BlogEdge {
    node: BlogNode;
  }
  
  export interface BlogContentSectionProps {
    blogs: BlogEdge[];
  }
  
  