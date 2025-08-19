import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Product { id: number; title: string; price: number; category: string; }
export interface Filters { category: string; minPrice: number; maxPrice: number; sort: string; }
export interface ProductState { products: Product[]; filters: Filters; }

const initialState: ProductState = {
  products: [
    { id: 1, title: "گوشی موبایل", price: 12000, category: "mobile" },
    { id: 2, title: "لپتاپ ایسوس", price: 35000, category: "laptop" },
    { id: 3, title: "هدفون بی‌سیم", price: 8000, category: "accessory" },
    { id: 4, title: "مانیتور سامسونگ", price: 15000, category: "laptop" },
  ],
  filters: { category: "all", minPrice: 0, maxPrice: 999999, sort: "default" },
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => { state.filters.category = action.payload; },
    setPriceRange: (state, action: PayloadAction<{min:number,max:number}>) => { state.filters.minPrice = action.payload.min; state.filters.maxPrice = action.payload.max; },
    setSort: (state, action: PayloadAction<string>) => { state.filters.sort = action.payload; },
  },
});

export const { setCategory, setPriceRange, setSort } = productSlice.actions;
export default productSlice.reducer;
