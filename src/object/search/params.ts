const searchParams: {
  minPrice: number,
  maxPrice: number,
  minRating: number,
  maxRating: number,
  type: 'asc' | 'desc',
  orderType: 'rating' | 'price',
} = {
  minPrice: 0,
  maxPrice: 0,
  minRating: 0,
  maxRating: 0,
  type: 'asc',
  orderType: 'price',
};

export default searchParams;
