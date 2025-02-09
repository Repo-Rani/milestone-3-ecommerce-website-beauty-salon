export interface NavbarPropsType {
    openNav: () => void;
  }
  export interface MobileNavPropsType {
    showNav: boolean;
    closeNav: () => void;
  }

  export interface NavbarLinksType {
    href: string;
    name: string;
    
  }

  export interface BestSellerProps {
    id: number;
    image: string;
    img: string;
    title: string;
    price: number;
    ratingNum:number;
    reviews: string;
    latest? : string;
    


  }

  export interface TrendingProps {
    id: number;
    image: string;
    title: string;
    price: number;
    ratingNum:number;
    reviews: string;
    latest? : string;
  }

  export interface FollowProps{
    id: number;
    image: string;
  }

  export interface BestSellerPageProps {
    id: number;
    image: string;
    img: string;
    title: string;
    price: number;
    ratingNum:number;
    reviews: string;
    latest? : string;

  }

  export interface NewProps {
    id: number;
    image: string;
    title: string;
    price: number;
    ratingNum:number;
    reviews: string;
    latest? : string;

  }

  export interface FaceProps {
    id: number;
    image: string;
    title: string;
    price: number;
    ratingNum:number;
    reviews: string;
    latest? : string;

  }

  export interface EyesProps {
    id: number;
    image: string;
    title: string;
    price: number;
    ratingNum:number;
    reviews: string;
    latest? : string;

  }

  export interface LipsProps {
    id: number;
    image: string;
    title: string;
    price: number;
    ratingNum:number;
    reviews: string;
    latest? : string;

  }

  export interface ShopallProps {
    id: number;
    image: string;
    title: string;
    price: number;
    ratingNum:number;
    reviews: string;
    latest? : string;

  }


  export interface NextArrowsProps {
    onClick: () => void;
  }
  
  export interface PrevArrowsProps {
    onClick: () => void;
  }